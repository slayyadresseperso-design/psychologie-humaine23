import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { verifyDownloadToken } from "@/lib/download-token";

// Le PDF est stocké dans /assets (jamais dans /public) pour ne jamais être
// accessible directement sans passer par cette route et son token signé.
const EBOOK_PATH = path.join(process.cwd(), "assets", "ebook.pdf");

export async function GET(_request: Request, { params }: { params: { token: string } }) {
  const { valid, expired } = verifyDownloadToken(params.token);

  if (!valid) {
    return NextResponse.json({ error: "Lien de téléchargement invalide." }, { status: 403 });
  }
  if (expired) {
    return NextResponse.json(
      { error: "Ce lien de téléchargement a expiré. Contactez-nous pour en obtenir un nouveau." },
      { status: 410 }
    );
  }
  if (!fs.existsSync(EBOOK_PATH)) {
    console.error("[download] fichier introuvable à", EBOOK_PATH);
    return NextResponse.json({ error: "Fichier momentanément indisponible." }, { status: 500 });
  }

  const file = fs.readFileSync(EBOOK_PATH);

  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="psychologie-humaine.pdf"',
      "Cache-Control": "private, no-store"
    }
  });
}
