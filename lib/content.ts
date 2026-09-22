// Contenu réel du livre — extrait du sommaire et de l'introduction.
// Modifie librement ces valeurs : tout le site lit ses textes depuis ce fichier.

export const book = {
  title: "Psychologie Humaine",
  subtitle:
    "Comprendre les comportements, les émotions, la manipulation, le mensonge et développer une confiance en soi solide",
  tagline:
    "Les mécanismes invisibles qui influencent nos pensées, nos décisions et nos relations.",
  chaptersCount: 35,
  partsCount: 11,
  price: "9,99 €",
  originalPrice: "14,99 €",
  year: new Date().getFullYear(),
  contactEmail: "cerebrumcontactpro@gmail.com"
};

export const parts = [
  { number: "01", title: "Les fondamentaux de la psychologie humaine" },
  { number: "02", title: "Comprendre les autres" },
  { number: "03", title: "Mensonge, dissimulation et vérité" },
  { number: "04", title: "Manipulation et influence" },
  { number: "05", title: "Se protéger psychologiquement" },
  { number: "06", title: "Confiance en soi" },
  { number: "07", title: "Devenir plus à l'aise avec les autres" },
  { number: "08", title: "Psychologie sociale" },
  { number: "09", title: "Comprendre ses propres mécanismes" },
  { number: "10", title: "Expériences et cas pratiques" },
  { number: "11", title: "Boîte à outils psychologique" }
];

export const fullSommaire = [
  {
    part: "Partie I — Les fondamentaux de la psychologie humaine",
    chapters: [
      "Comment fonctionne l'esprit humain",
      "Les émotions",
      "Les besoins psychologiques",
      "La perception"
    ]
  },
  {
    part: "Partie II — Comprendre les autres",
    chapters: [
      "Lire les comportements",
      "Le langage corporel",
      "La communication",
      "Les relations humaines"
    ]
  },
  {
    part: "Partie III — Mensonge, dissimulation et vérité",
    chapters: [
      "Pourquoi les humains mentent",
      "Détecter les incohérences",
      "Peut-on vraiment détecter un menteur ?"
    ]
  },
  {
    part: "Partie IV — Manipulation et influence",
    chapters: [
      "Qu'est-ce que la manipulation ?",
      "Les mécanismes d'influence",
      "Les techniques de manipulation psychologique",
      "Le gaslighting",
      "Le manipulateur et sa victime"
    ]
  },
  {
    part: "Partie V — Se protéger psychologiquement",
    chapters: ["Poser ses limites", "Résister à la pression", "Reconnaître une relation toxique"]
  },
  {
    part: "Partie VI — Confiance en soi",
    chapters: [
      "Comprendre la confiance en soi",
      "Construire une confiance solide",
      "L'image que l'on renvoie",
      "Ne plus dépendre du regard des autres"
    ]
  },
  {
    part: "Partie VII — Devenir plus à l'aise avec les autres",
    chapters: ["Comprendre les conversations", "Charisme et présence", "Gérer les conflits"]
  },
  {
    part: "Partie VIII — Psychologie sociale",
    chapters: ["L'être humain en groupe", "L'effet des réseaux sociaux", "Marketing et persuasion"]
  },
  {
    part: "Partie IX — Comprendre ses propres mécanismes",
    chapters: ["Se comprendre soi-même", "Les biais cognitifs", "Maîtriser ses décisions"]
  },
  {
    part: "Partie X — Expériences et cas pratiques",
    chapters: ["Expériences psychologiques célèbres", "Situations de la vie réelle"]
  },
  {
    part: "Partie XI — Boîte à outils psychologique",
    chapters: ["Les outils à retenir"]
  }
];

export const whyThisBook = [
  "Comprendre avant de juger",
  "Identifier les mécanismes psychologiques",
  "Développer une meilleure connaissance de soi",
  "Reconnaître certaines formes d'influence",
  "Transformer la théorie en outils pratiques"
];

export const readingExperience = [
  { label: "Explications", detail: "Des mécanismes psychologiques expliqués simplement, sans jargon inutile." },
  { label: "Exemples", detail: "Des situations concrètes pour ancrer chaque notion dans le réel." },
  { label: "Scénarios", detail: "Des mises en situation pour observer un mécanisme en contexte." },
  { label: "Cas pratiques", detail: "Des expériences psychologiques et des cas réels commentés." },
  { label: "Exercices", detail: "Des exercices courts pour appliquer ce qui vient d'être lu." },
  { label: "Questions de réflexion", detail: "De quoi prendre du recul sur ses propres réactions." },
  { label: "Outils pratiques", detail: "Une boîte à outils psychologique réutilisable au quotidien." },
  { label: "Synthèses", detail: "L'essentiel de chaque partie, condensé en fin de chapitre." }
];

export const forWho = [
  "Pour ceux qui veulent mieux comprendre les autres.",
  "Pour ceux qui souhaitent mieux comprendre leurs propres réactions.",
  "Pour ceux qui veulent développer leur confiance en eux.",
  "Pour ceux qui souhaitent mieux reconnaître certaines dynamiques relationnelles."
];

export const excerpt = {
  title: "Introduction — Comprendre l'être humain",
  paragraphs: [
    "Comprendre les autres commence souvent par une question simple : pourquoi cette personne agit-elle ainsi ? Pourtant, une seconde question est tout aussi importante : pourquoi est-ce que moi, je réagis comme cela face à elle ?",
    "Notre perception est filtrée par l'attention, les attentes, la mémoire, les émotions et les expériences précédentes. Nous pouvons donc observer correctement un événement et l'interpréter de manière inexacte. Toute psychologie pratique sérieuse doit accepter cette limite.",
    "Ce livre propose une progression : comprendre les mécanismes fondamentaux, observer les autres avec prudence, reconnaître certaines formes d'influence, protéger ses limites, renforcer sa confiance, améliorer ses conversations et enfin examiner ses propres biais.",
    "Le fil conducteur est la lucidité. Il ne s'agit pas d'apprendre à contrôler les autres, mais de mieux comprendre les mécanismes qui peuvent influencer nos choix et nos relations."
  ]
};

export const process = [
  { number: "01", title: "Choisissez l'e-book", detail: "Un seul format, un seul prix, aucune option cachée." },
  { number: "02", title: "Effectuez votre paiement", detail: "Paiement sécurisé par carte, traité par Stripe." },
  { number: "03", title: "Recevez immédiatement votre accès", detail: "Un lien de téléchargement protégé vous est envoyé aussitôt." },
  { number: "04", title: "Commencez votre lecture", detail: "Sur téléphone, tablette ou ordinateur, dès la confirmation." }
];

export const faq = [
  {
    question: "Quel format est utilisé ?",
    answer: "Le livre est livré au format PDF, optimisé pour une lecture confortable sur tous les écrans."
  },
  {
    question: "Quand puis-je accéder au livre ?",
    answer: "Immédiatement après votre paiement, vous recevez un lien de téléchargement sécurisé."
  },
  {
    question: "Puis-je lire le livre sur téléphone ?",
    answer: "Oui, la mise en page a été pensée pour rester lisible sur mobile comme sur grand écran."
  },
  {
    question: "Puis-je le lire sur tablette ?",
    answer: "Oui, le format PDF s'adapte parfaitement aux liseuses et tablettes."
  },
  {
    question: "Puis-je le lire sur ordinateur ?",
    answer: "Oui, avec n'importe quel lecteur PDF standard, sur Mac comme sur Windows."
  },
  {
    question: "Combien de chapitres contient le livre ?",
    answer: "Le livre comporte 35 chapitres, répartis en 11 parties thématiques."
  },
  {
    question: "Le paiement est-il sécurisé ?",
    answer: "Oui, l'ensemble des paiements est traité par Stripe, un prestataire certifié PCI-DSS."
  },
  {
    question: "Comment vais-je recevoir le livre ?",
    answer: "Par un lien de téléchargement protégé, envoyé par e-mail juste après la confirmation du paiement."
  }
];
