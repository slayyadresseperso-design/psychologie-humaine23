import crypto from "crypto";

// Secret utilisé pour signer les liens de téléchargement.
// Définissez DOWNLOAD_TOKEN_SECRET dans vos variables d'environnement (une chaîne
// aléatoire quelconque, ex. générée avec `openssl rand -hex 32`).
const SECRET = process.env.DOWNLOAD_TOKEN_SECRET || process.env.STRIPE_WEBHOOK_SECRET || "insecure-dev-secret";

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * Crée un lien de téléchargement signé et à durée limitée pour un e-mail donné.
 * Le token encode l'e-mail + une date d'expiration + une signature HMAC,
 * ce qui évite de stocker quoi que ce soit côté serveur.
 */
export function createDownloadToken(email: string, ttlMs: number = SEVEN_DAYS_MS): string {
  const expiresAt = Date.now() + ttlMs;
  const payload = `${email}|${expiresAt}`;
  const signature = crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
  return Buffer.from(`${payload}|${signature}`).toString("base64url");
}

export function verifyDownloadToken(token: string): { email: string; valid: boolean; expired: boolean } {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const [email, expiresAtStr, signature] = decoded.split("|");
    if (!email || !expiresAtStr || !signature) {
      return { email: "", valid: false, expired: true };
    }

    const payload = `${email}|${expiresAtStr}`;
    const expectedSignature = crypto.createHmac("sha256", SECRET).update(payload).digest("hex");

    const validSignature =
      signature.length === expectedSignature.length &&
      crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));

    const expired = Date.now() > Number(expiresAtStr);

    return { email, valid: validSignature, expired };
  } catch {
    return { email: "", valid: false, expired: true };
  }
}
