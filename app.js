
// ============================================================
// BASE DE CONNAISSANCES ENRICHIE
// ============================================================
const NOTIONS = [
    // ================= MARKETING =================
    { id: "m01", cat: "Marketing", terme: "Mix Marketing (4P)", def: "Les 4 leviers pour agir sur un marché : Produit (Product), Prix (Price), Place/Distribution (Place), Promotion/Communication (Promotion).", diff: "facile" },
    { id: "m02", cat: "Marketing", terme: "SWOT (Strengths, Weaknesses, Opportunities, Threats)", def: "Matrice d'analyse stratégique : Strengths (forces) et Weaknesses (faiblesses) sont internes à l'entreprise ; Opportunities (opportunités) et Threats (menaces) sont externes (environnement).[reference:15]", diff: "facile" },
    { id: "m03", cat: "Marketing", terme: "PESTEL (Politique, Économique, Socioculturel, Technologique, Environnemental, Légal)", def: "Outil d'analyse de l'environnement macro. Chaque lettre correspond à une catégorie de facteurs externes pouvant influencer positivement ou négativement l'entreprise.[reference:16]", diff: "moyen" },
    { id: "m04", cat: "Marketing", terme: "STP (Segmentation, Targeting, Positioning)", def: "Stratégie en 3 étapes : Segmentation (découper le marché en groupes homogènes), Targeting/Ciblage (choisir les segments à viser), Positioning/Positionnement (définir la place que le produit doit occuper dans l'esprit du consommateur).[reference:17]", diff: "moyen" },
    { id: "m05", cat: "Marketing", terme: "Nudge Marketing", def: "Technique d'influence douce qui modifie le comportement sans interdire ni changer les prix, en s'appuyant sur les biais cognitifs (ex : option par défaut).", diff: "moyen" },
    { id: "m06", cat: "Marketing", terme: "SEO (Search Engine Optimization)", def: "Référencement naturel : ensemble des techniques pour optimiser un site web afin qu'il apparaisse en tête des résultats organiques (non payants) des moteurs de recherche comme Google.", diff: "facile" },
    { id: "m07", cat: "Marketing", terme: "SEA (Search Engine Advertising)", def: "Référencement payant : achat de liens sponsorisés (annonces) sur les moteurs de recherche pour apparaître immédiatement sur des mots-clés ciblés (ex : Google Ads).[reference:18]", diff: "facile" },
    { id: "m08", cat: "Marketing", terme: "CTR (Click-Through Rate)", def: "Taux de clic. Formule : (Nombre de clics / Nombre d'impressions) × 100. Mesure l'attractivité d'une annonce, d'un lien ou d'un e-mail. Un CTR élevé indique un contenu pertinent pour la cible.[reference:19]", diff: "facile" },
    { id: "m09", cat: "Marketing", terme: "Taux de conversion", def: "Pourcentage de visiteurs qui réalisent l'action souhaitée (achat, inscription, téléchargement) par rapport au nombre total de visiteurs.", diff: "facile" },
    { id: "m10", cat: "Marketing", terme: "KPI (Key Performance Indicator)", def: "Indicateur clé de performance. Une valeur mesurable, liée à un objectif business, avec une cible, une échéance et un responsable. Un KPI doit guider une décision, pas seulement décrire une tendance.[reference:20][reference:21]", diff: "facile" },
    { id: "m11", cat: "Marketing", terme: "Persona", def: "Portrait fictif et détaillé du client idéal, construit à partir de données réelles (démographie, comportements, motivations, freins).", diff: "facile" },
    { id: "m12", cat: "Marketing", terme: "Customer Journey", def: "Parcours client : l'ensemble des étapes et points de contact qu'un client traverse, de la prise de conscience d'un besoin jusqu'à l'achat et la fidélisation.", diff: "moyen" },
    { id: "m13", cat: "Marketing", terme: "Branding", def: "Ensemble des actions visant à construire et gérer l'identité et l'image d'une marque (nom, logo, valeurs, ton de voix, expérience).", diff: "facile" },
    { id: "m14", cat: "Marketing", terme: "Copywriting", def: "L'art d'écrire des textes persuasifs (publicités, pages de vente, e-mails) pour inciter à l'action (achat, clic, inscription).", diff: "moyen" },
    { id: "m15", cat: "Marketing", terme: "Lead", def: "Un prospect : un contact (e-mail, téléphone) qui a manifesté un intérêt pour un produit ou service et qui peut être qualifié pour devenir client.", diff: "facile" },
    { id: "m16", cat: "Marketing", terme: "Tunnel de conversion (Funnel)", def: "Représentation des étapes que suit un prospect jusqu'à l'achat (ex : visiteur → lead → client). Chaque étape perd des individus ; l'objectif est d'optimiser le taux de passage.", diff: "moyen" },
    { id: "m17", cat: "Marketing", terme: "Marketing d'influence", def: "Stratégie qui consiste à s'appuyer sur des créateurs de contenu (influenceurs) pour promouvoir un produit auprès de leur audience.", diff: "facile" },
    { id: "m18", cat: "Marketing", terme: "Content Marketing", def: "Création et diffusion de contenus utiles (articles, vidéos, guides) pour attirer et fidéliser une audience, sans vendre directement.", diff: "moyen" },
    { id: "m19", cat: "Marketing", terme: "A/B Testing", def: "Test qui compare deux versions d'une page, d'une publicité ou d'un e-mail (version A vs version B) pour déterminer laquelle performe le mieux.", diff: "moyen" },
    { id: "m20", cat: "Marketing", terme: "ROI (Return on Investment)", def: "Retour sur investissement. Formule : [(Gain de l'investissement – Coût de l'investissement) / Coût de l'investissement] × 100. Mesure la rentabilité d'une action marketing.[reference:22]", diff: "facile" },

    // ================= MANAGEMENT =================
    { id: "mg01", cat: "Management", terme: "Parties prenantes (Stakeholders)", def: "Individus ou groupes qui ont un intérêt dans les décisions de l'entreprise : salariés, clients, actionnaires, fournisseurs, État, syndicats, etc.", diff: "facile" },
    { id: "mg02", cat: "Management", terme: "RSE (Responsabilité Sociétale des Entreprises)", def: "Démarche volontaire par laquelle une entreprise intègre les préoccupations sociales, sociétales et environnementales dans sa stratégie et ses activités, au-delà de ses obligations légales.[reference:23]", diff: "moyen" },
    { id: "mg03", cat: "Management", terme: "Kaizen", def: "Philosophie japonaise d'amélioration continue par petits pas. Chaque petit progrès compte et est intégré durablement.", diff: "facile" },
    { id: "mg04", cat: "Management", terme: "MBO (Management by Objectives)", def: "Management par objectifs : méthode où manager et collaborateur fixent ensemble des objectifs mesurables, et où l'évaluation se fait sur leur atteinte. Popularisée par Peter Drucker.[reference:24]", diff: "moyen" },
    { id: "mg05", cat: "Management", terme: "Lean Management", def: "Approche qui vise à éliminer les gaspillages (surproduction, attentes, stocks inutiles, défauts, transports) pour maximiser la valeur délivrée au client.", diff: "moyen" },
    { id: "mg06", cat: "Management", terme: "Six Sigma", def: "Méthode de management de la qualité qui vise à réduire drastiquement les défauts et la variabilité des processus (objectif : 3,4 défauts par million d'opportunités).", diff: "moyen" },
    { id: "mg07", cat: "Management", terme: "Chaîne de valeur (Porter)", def: "Modèle qui décompose l'entreprise en activités stratégiques (logistique, production, marketing, service...) pour identifier les sources d'avantage concurrentiel.", diff: "moyen" },
    { id: "mg08", cat: "Management", terme: "Benchmarking", def: "Comparaison des pratiques et performances de l'entreprise avec celles des leaders du marché ou d'autres secteurs, pour identifier des pistes d'amélioration.", diff: "moyen" },
    { id: "mg09", cat: "Management", terme: "Délégation", def: "Action de confier une tâche ou une responsabilité à un collaborateur, avec l'autorité et les moyens nécessaires pour l'accomplir.", diff: "facile" },
    { id: "mg10", cat: "Management", terme: "Feedback", def: "Retour constructif sur une action ou un comportement, visant à améliorer la performance ou les relations de travail.", diff: "facile" },
    { id: "mg11", cat: "Management", terme: "Management situationnel", def: "Adaptation du style de management (directif, persuasif, participatif, délégatif) en fonction du niveau de maturité et d'autonomie du collaborateur sur une tâche donnée.", diff: "moyen" },
    { id: "mg12", cat: "Management", terme: "Conduite du changement", def: "Ensemble des méthodes et outils pour accompagner les collaborateurs lors d'une transformation (nouvelle organisation, outil, stratégie).", diff: "moyen" },
    { id: "mg13", cat: "Management", terme: "Intelligence collective", def: "Capacité d'un groupe à réfléchir et produire ensemble des résultats supérieurs à la somme des contributions individuelles.", diff: "moyen" },
    { id: "mg14", cat: "Management", terme: "Burnout", def: "Syndrome d'épuisement physique, émotionnel et mental lié à une exposition prolongée à un stress professionnel intense.", diff: "facile" },

    // ================= GESTION =================
    { id: "g01", cat: "Gestion", terme: "Seuil de rentabilité", def: "Niveau de chiffre d'affaires à partir duquel l'entreprise couvre toutes ses charges (fixes et variables) et commence à dégager du profit. Formule : Charges fixes / Taux de marge sur coûts variables.", diff: "moyen" },
    { id: "g02", cat: "Gestion", terme: "Marge sur coûts variables (MCV)", def: "Différence entre le chiffre d'affaires et les charges variables. MCV = CA – Charges variables. Elle sert à couvrir les charges fixes puis à générer du résultat.", diff: "moyen" },
    { id: "g03", cat: "Gestion", terme: "VAN (Valeur Actuelle Nette)", def: "Somme des flux de trésorerie futurs actualisés, moins l'investissement initial. Si VAN > 0, le projet est rentable et crée de la valeur.", diff: "moyen" },
    { id: "g04", cat: "Gestion", terme: "TRI (Taux de Rentabilité Interne)", def: "Taux d'actualisation qui annule la VAN. C'est le rendement propre du projet. On le compare au taux d'actualisation exigé pour décider d'investir.[reference:25]", diff: "moyen" },
    { id: "g05", cat: "Gestion", terme: "Bilan comptable", def: "Photographie du patrimoine de l'entreprise à un instant donné : Actif (ce qu'elle possède) et Passif (ce qu'elle doit : capitaux propres + dettes).", diff: "facile" },
    { id: "g06", cat: "Gestion", terme: "Compte de résultat", def: "Document qui mesure la performance sur une période : Produits (recettes) – Charges (coûts) = Résultat (bénéfice ou perte).", diff: "facile" },
    { id: "g07", cat: "Gestion", terme: "Loi de Pareto (20/80)", def: "80% des effets proviennent de 20% des causes. En gestion, cela invite à concentrer ses efforts sur les 20% d'actions, de clients ou de produits qui génèrent 80% du résultat.", diff: "facile" },
    { id: "g08", cat: "Gestion", terme: "Méthode ABC", def: "Technique de classification (souvent des stocks) en 3 catégories : A (forte valeur, faible quantité), B (valeur moyenne), C (faible valeur, forte quantité). Le contrôle est adapté à chaque catégorie.", diff: "moyen" },
    { id: "g09", cat: "Gestion", terme: "Fonds de roulement (FR)", def: "Ressources stables qui financent le cycle d'exploitation. FR = Ressources stables – Emplois stables. Il doit être positif pour financer le besoin en fonds de roulement (BFR).", diff: "moyen" },
    { id: "g10", cat: "Gestion", terme: "BFR (Besoin en Fonds de Roulement)", def: "Besoin de financement lié au décalage entre les encaissements clients et les décaissements fournisseurs/salaires. Formule : Stocks + Créances clients – Dettes fournisseurs. Il représente l'argent nécessaire pour financer l'activité courante.[reference:26]", diff: "moyen" },
    { id: "g11", cat: "Gestion", terme: "CAF (Capacité d'Autofinancement)", def: "Ressources internes générées par l'activité de l'entreprise, avant distribution des dividendes. Elle mesure la capacité de l'entreprise à financer elle-même son développement et ses investissements.[reference:27]", diff: "moyen" },
    { id: "g12", cat: "Gestion", terme: "Amortissement", def: "Constatation comptable de la perte de valeur d'un actif (machine, véhicule, logiciel) due à l'usure ou au temps, étalée sur sa durée d'utilisation.", diff: "facile" },
    { id: "g13", cat: "Gestion", terme: "Trésorerie", def: "Solde disponible sur les comptes bancaires. Une trésorerie positive est vitale, même si l'entreprise est rentable, car les décalages de paiement existent.", diff: "facile" },
    { id: "g14", cat: "Gestion", terme: "Ratio de liquidité", def: "Indicateur de la capacité de l'entreprise à payer ses dettes à court terme avec ses actifs liquides (disponibilités, créances à court terme). Un ratio > 1 est généralement souhaitable.", diff: "moyen" },
    { id: "g15", cat: "Gestion", terme: "Coût de revient", def: "Somme de tous les coûts supportés pour produire et vendre un bien ou un service (coûts directs + coûts indirects répartis).", diff: "moyen" },

    // ================= NÉGOCIATION =================
    { id: "n01", cat: "Négociation", terme: "BATNA / MESORE (Best Alternative To a Negotiated Agreement / Meilleure Solution de Rechange)", def: "Concept clé de la négociation raisonnée (Harvard) : c'est l'option la plus avantageuse dont tu disposes si la négociation échoue. Plus ton BATNA est solide, plus ton pouvoir de négociation est grand.[reference:28][reference:29]", diff: "facile" },
    { id: "n02", cat: "Négociation", terme: "Ancrage", def: "Fixer un point de référence (par exemple, un prix élevé) en début de négociation pour orienter la discussion et les estimations de l'autre partie.", diff: "moyen" },
    { id: "n03", cat: "Négociation", terme: "Mirroring (Miroir)", def: "Technique de Chris Voss : répéter les 3 à 5 derniers mots de son interlocuteur pour créer du lien, gagner du temps et l'encourager à s'exprimer davantage.", diff: "facile" },
    { id: "n04", cat: "Négociation", terme: "Labeling (Étiquetage)", def: "Technique de Chris Voss : nommer l'émotion perçue chez l'autre ('On dirait que tu es frustré...') pour montrer de l'empathie tactique et faire baisser la tension.", diff: "moyen" },
    { id: "n05", cat: "Négociation", terme: "Empathie tactique", def: "Capacité à comprendre les émotions et le point de vue de l'autre pour mieux orienter la négociation, sans forcément être d'accord avec lui.", diff: "moyen" },
    { id: "n06", cat: "Négociation", terme: "Biais de confirmation", def: "Tendance à ne chercher et retenir que les informations qui confirment nos croyances initiales, en ignorant les informations contraires.", diff: "moyen" },
    { id: "n07", cat: "Négociation", terme: "Aversion à la perte", def: "Les pertes pèsent psychologiquement plus lourd que les gains équivalents. En négociation, on peut l'utiliser en présentant une concession comme une perte évitée.", diff: "moyen" },
    { id: "n08", cat: "Négociation", terme: "Effet de dotation", def: "Tendance à attribuer plus de valeur à un objet simplement parce qu'on le possède. Explique pourquoi il est difficile de faire baisser le prix d'un vendeur.", diff: "moyen" },
    { id: "n09", cat: "Négociation", terme: "Cadrage (Framing)", def: "Le fait de présenter une information d'une certaine manière (verre à moitié plein vs à moitié vide) influence la décision. Arme redoutable en négociation.", diff: "moyen" },
    { id: "n10", cat: "Négociation", terme: "Réciprocité (Cialdini)", def: "Principe de persuasion : nous nous sentons obligés de rendre une faveur ou une concession reçue.", diff: "facile" },
    { id: "n11", cat: "Négociation", terme: "Preuve sociale (Cialdini)", def: "Principe de persuasion : nous sommes influencés par ce que font les autres (avis, nombre de ventes, témoignages).", diff: "facile" },
    { id: "n12", cat: "Négociation", terme: "Rareté (Cialdini)", def: "Principe de persuasion : les choses paraissent plus désirables lorsqu'elles sont rares ou sur le point de disparaître (offre limitée).", diff: "facile" },
    { id: "n13", cat: "Négociation", terme: "Autorité (Cialdini)", def: "Principe de persuasion : nous avons tendance à suivre les conseils ou ordres de figures d'autorité (experts, titres, uniformes).", diff: "facile" },
    { id: "n14", cat: "Négociation", terme: "Sympathie (Cialdini)", def: "Principe de persuasion : nous disons plus facilement oui à ceux que nous connaissons ou apprécions (similarité, compliments, coopération).", diff: "facile" },
    { id: "n15", cat: "Négociation", terme: "Engagement et cohérence (Cialdini)", def: "Principe de persuasion : une fois qu'une personne s'est engagée (même par un petit acte), elle a tendance à rester cohérente avec cet engagement.", diff: "facile" },
    { id: "n16", cat: "Négociation", terme: "Position basse", def: "Adopter une posture humble et ouverte pour pousser l'autre à se dévoiler et à argumenter, plutôt que de dominer.", diff: "moyen" },
    { id: "n17", cat: "Négociation", terme: "Négociation distributive (somme nulle)", def: "Négociation gagnant-perdant : ce que l'un gagne, l'autre le perd (ex : prix d'une voiture).", diff: "moyen" },
    { id: "n18", cat: "Négociation", terme: "Négociation intégrative (raisonnée)", def: "Négociation qui cherche à créer de la valeur en explorant les intérêts communs et les échanges de concessions (ex : partenariat long terme).", diff: "moyen" },
    { id: "n19", cat: "Négociation", terme: "Le 'Non' stratégique", def: "Dans la méthode Voss, dire non (ou faire dire non à l'autre) peut être une étape pour clarifier les besoins et avancer vers un oui profond.", diff: "moyen" },
    { id: "n20", cat: "Négociation", terme: "Questions calibrées", def: "Questions ouvertes commençant par 'Comment' ou 'Qu'est-ce que', qui poussent l'autre à réfléchir et à proposer des solutions (ex : 'Comment puis-je faire pour...?').", diff: "moyen" },
    { id: "mg15", cat: "Management", terme: "Objectif SMART", def: "Un objectif est Spécifique, Mesurable, Atteignable, Réaliste/Pertinent et Temporellement défini. Il facilite le suivi et l'évaluation du travail.", diff: "facile" },
    { id: "mg16", cat: "Management", terme: "Fonctions du management", def: "Planifier, organiser, diriger/animer et contrôler : quatre fonctions complémentaires pour coordonner les ressources et atteindre les objectifs.", diff: "facile" },
    { id: "mg17", cat: "Management", terme: "Styles de leadership", def: "Le leadership directif donne un cadre précis ; le participatif implique l'équipe ; le délégatif laisse une autonomie adaptée. Le style dépend du contexte et des personnes.", diff: "moyen" },
    { id: "mg18", cat: "Management", terme: "Motivation intrinsèque et extrinsèque", def: "La motivation intrinsèque vient de l'intérêt ou du plaisir de l'activité ; l'extrinsèque dépend d'une conséquence externe, comme une prime ou une note.", diff: "facile" },
    { id: "mg19", cat: "Management", terme: "Diagramme d'Ishikawa", def: "Outil d'analyse des causes d'un problème, souvent structuré en 5M : Main-d'œuvre, Méthodes, Matières, Matériel et Milieu (parfois Mesure).", diff: "moyen" },
    { id: "mg20", cat: "Management", terme: "PDCA", def: "Cycle d'amélioration continue : Plan (préparer), Do (réaliser), Check (vérifier les résultats), Act (corriger et standardiser).", diff: "facile" },
    { id: "mg21", cat: "Management", terme: "Matrice RACI", def: "Outil de clarification des rôles : Responsible (réalise), Accountable (assume la responsabilité finale), Consulted (consulté), Informed (informé).", diff: "moyen" },
    { id: "g16", cat: "Gestion", terme: "Charges fixes et variables", def: "Les charges fixes restent globalement stables à court terme dans une plage d'activité donnée ; les charges variables évoluent avec le volume d'activité.", diff: "facile" },
    { id: "g17", cat: "Gestion", terme: "Taux de marge et taux de marque", def: "Taux de marge = marge commerciale / coût d'achat HT × 100. Taux de marque = marge commerciale / prix de vente HT × 100. Les dénominateurs sont différents.", diff: "moyen" },
    { id: "g18", cat: "Gestion", terme: "Marge commerciale", def: "Pour une activité de négoce : ventes de marchandises moins coût d'achat des marchandises vendues. Elle mesure la marge dégagée avant les autres charges.", diff: "facile" },
    { id: "g19", cat: "Gestion", terme: "TVA collectée et déductible", def: "La TVA collectée est facturée aux clients ; la TVA déductible est récupérable sur les achats éligibles. TVA à décaisser = TVA collectée − TVA déductible, sous réserve des règles applicables.", diff: "moyen" },
    { id: "g20", cat: "Gestion", terme: "Plan de trésorerie", def: "Prévision périodique des encaissements et décaissements pour anticiper les excédents ou besoins de financement et éviter les tensions de liquidité.", diff: "facile" },
    { id: "g21", cat: "Gestion", terme: "Coût fixe unitaire", def: "Le coût fixe unitaire correspond aux charges fixes divisées par le volume produit ou vendu ; il diminue lorsque le volume augmente, à charges fixes constantes.", diff: "moyen" },
    { id: "n21", cat: "Négociation", terme: "Écoute active", def: "Écouter sans interrompre, questionner, reformuler et vérifier sa compréhension. L'objectif est de comprendre les intérêts et contraintes avant de proposer une solution.", diff: "facile" },
    { id: "n22", cat: "Négociation", terme: "Intérêts vs positions", def: "La position est ce que la personne demande ; l'intérêt est la raison ou le besoin qui explique cette demande. Explorer les intérêts ouvre davantage d'options d'accord.", diff: "facile" },
    { id: "n23", cat: "Négociation", terme: "ZOPA (zone d'accord possible)", def: "Zone où les conditions acceptables par les deux parties se chevauchent. Elle dépend notamment des limites de chacun et de leurs solutions de rechange.", diff: "moyen" },
    { id: "n24", cat: "Négociation", terme: "Prix de réserve", def: "Limite au-delà de laquelle une partie préfère sa solution de rechange à l'accord proposé. Il se prépare avant la négociation et n'est pas forcément révélé.", diff: "moyen" },
    { id: "n25", cat: "Négociation", terme: "Concession conditionnelle", def: "Concession formulée en échange d'une contrepartie explicite : « Si vous pouvez confirmer le volume, alors nous pouvons étudier ce délai ». Elle évite les concessions unilatérales.", diff: "moyen" },
    { id: "n26", cat: "Négociation", terme: "Reformulation", def: "Redire avec ses propres mots ce que l'interlocuteur exprime, puis vérifier : cela clarifie les besoins et limite les malentendus.", diff: "facile" },
    { id: "n27", cat: "Négociation", terme: "Biais d'ancrage", def: "La première valeur évoquée peut influencer les estimations suivantes, même si elle est arbitraire. Il faut préparer ses critères objectifs et éviter de s'y fier aveuglément.", diff: "moyen" },
];

// ============================================================
// GÉNÉRATION DE LA BANQUE DE QUIZ
// ============================================================
function generateQuizBank() {
    const bank = [];
    NOTIONS.forEach(notion => {
        let leurres = NOTIONS.filter(n => n.id !== notion.id && n.cat === notion.cat)
                             .map(n => n.def)
                             .filter(d => d !== notion.def);
        if (leurres.length < 3) {
            const autres = NOTIONS.filter(n => n.id !== notion.id && !leurres.includes(n.def))
                                   .map(n => n.def);
            leurres = leurres.concat(autres).slice(0, 3);
        } else {
            leurres = leurres.slice(0, 3);
        }
        const options = shuffleArray([notion.def, ...leurres]);
        bank.push({
            id: notion.id,
            categorie: notion.cat,
            difficulte: notion.diff,
            question: `Que signifie « ${notion.terme} » ?`,
            options: options,
            bonneReponse: notion.def,
            explication: `**${notion.terme}** : ${notion.def}`
        });
    });
    return bank;
}

// ============================================================
// ÉTAT GLOBAL
// ============================================================
let QUIZ_BANK = generateQuizBank();
QUIZ_BANK = QUIZ_BANK.concat([
 {id:"case-mg-01",categorie:"Management",difficulte:"moyen",question:"Une équipe ne respecte pas les délais. Quelle est la première démarche managériale la plus pertinente ?",options:["Sanctionner immédiatement toute l'équipe","Analyser les causes avec l'équipe et clarifier les priorités","Augmenter systématiquement les horaires","Supprimer les objectifs"],bonneReponse:"Analyser les causes avec l'équipe et clarifier les priorités",explication:"Un diagnostic factuel permet d'identifier les obstacles avant de choisir une action adaptée."},
 {id:"case-mg-02",categorie:"Management",difficulte:"facile",question:"Lequel de ces objectifs est le plus SMART ?",options:["Améliorer les ventes bientôt","Faire mieux que les concurrents","Augmenter de 8 % les ventes du produit A d'ici la fin du trimestre","Être plus performant"],bonneReponse:"Augmenter de 8 % les ventes du produit A d'ici la fin du trimestre",explication:"L'objectif est précis, mesurable et assorti d'une échéance."},
 {id:"case-g-01",categorie:"Gestion",difficulte:"moyen",question:"Les charges fixes sont de 12 000 € et le taux de MCV de 30 %. Quel est le seuil de rentabilité en chiffre d'affaires ?",options:["3 600 €","40 000 €","12 300 €","36 000 €"],bonneReponse:"40 000 €",explication:"Seuil de rentabilité = charges fixes / taux de MCV = 12 000 / 0,30 = 40 000 €."},
 {id:"case-g-02",categorie:"Gestion",difficulte:"facile",question:"Une entreprise est rentable mais ses clients paient tard. Quel risque doit-elle surveiller en priorité ?",options:["Le manque de trésorerie","La hausse automatique du capital","La disparition des charges fixes","Un taux de marque nul"],bonneReponse:"Le manque de trésorerie",explication:"Le décalage entre encaissements et décaissements peut créer un besoin de financement même en présence d'un bénéfice."},
 {id:"case-n-01",categorie:"Négociation",difficulte:"moyen",question:"Un fournisseur refuse votre demande de remise. Quelle question favorise une négociation constructive ?",options:["Pourquoi êtes-vous aussi fermé ?","Comment pourrions-nous ajuster le volume ou les délais pour trouver un accord ?","Je pars immédiatement chez un concurrent","Vous devez accepter"],bonneReponse:"Comment pourrions-nous ajuster le volume ou les délais pour trouver un accord ?",explication:"Une question ouverte explore les variables négociables et recherche une solution mutuellement acceptable."},
 {id:"case-n-02",categorie:"Négociation",difficulte:"facile",question:"À quoi sert principalement la MESORE (BATNA) ?",options:["À forcer l'autre partie à accepter","À connaître sa meilleure solution si aucun accord n'est trouvé","À fixer obligatoirement le premier prix","À éviter toute préparation"],bonneReponse:"À connaître sa meilleure solution si aucun accord n'est trouvé",explication:"Une alternative réaliste permet de comparer l'accord proposé à l'option de ne pas conclure."},
 {id:"case-n-03",categorie:"Négociation",difficulte:"moyen",question:"Votre interlocuteur dit : « Le délai de livraison est notre principal souci. » Quelle réponse est la plus utile ?",options:["Le prix est pourtant excellent","Si je comprends bien, la priorité est de sécuriser la date de livraison ?","Ce n'est pas notre problème","Vous avez tort"],bonneReponse:"Si je comprends bien, la priorité est de sécuriser la date de livraison ?",explication:"La reformulation vérifie le besoin réel avant de chercher des options."},
 {id:"case-n-04",categorie:"Négociation",difficulte:"moyen",question:"Pourquoi préparer son prix de réserve avant une négociation ?",options:["Pour révéler sa limite dès le début","Pour savoir à partir de quel point sa solution de rechange devient préférable","Pour empêcher l'autre de parler","Pour éviter d'étudier les intérêts"],bonneReponse:"Pour savoir à partir de quel point sa solution de rechange devient préférable",explication:"Le prix de réserve aide à décider rationnellement quand accepter, contre-proposer ou se retirer."},
 {id:"case-mg-03",categorie:"Management",difficulte:"facile",question:"Dans le cycle PDCA, quelle étape consiste à comparer les résultats aux objectifs ?",options:["Plan","Do","Check","Act"],bonneReponse:"Check",explication:"Check consiste à mesurer et analyser les résultats ; Act sert à corriger et améliorer."},
 {id:"case-g-03",categorie:"Gestion",difficulte:"moyen",question:"Quel document présente les charges et les produits sur une période ?",options:["Le bilan comptable","Le compte de résultat","Le plan de trésorerie uniquement","Le registre des immobilisations uniquement"],bonneReponse:"Le compte de résultat",explication:"Le compte de résultat récapitule les produits et les charges de la période et fait apparaître le bénéfice ou la perte."}
]);
const STORAGE_KEY_PROGRESS = "academie_premium_but_progress_v6";
const STORAGE_KEY_THEME = "academie_nego_theme";
let progress = JSON.parse(localStorage.getItem(STORAGE_KEY_PROGRESS)) || { reussis: [], resultats: [] };
if (!progress.resultats) progress.resultats = [];
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// ============================================================
// UTILITAIRES
// ============================================================
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}

document.addEventListener('click', event => {
    const option = event.target.closest('#quiz-options button[data-option-index]');
    if (!option) return;
    const q = currentQuizQuestions[currentQuestionIndex];
    if (q && q.options[Number(option.dataset.optionIndex)] !== undefined) selectAnswer(q.options[Number(option.dataset.optionIndex)], option);
});

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function saveProgress() {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
    updateGlobalProgress();
    renderProgressBars();
}

function updateGlobalProgress() {
    const statNotions = document.getElementById('stat-notions'); if (statNotions) statNotions.textContent = NOTIONS.length;
    const statQuestions = document.getElementById('stat-questions'); if (statQuestions) statQuestions.textContent = QUIZ_BANK.length;
    const total = QUIZ_BANK.length;
    const reussis = progress.reussis.length;
    document.getElementById('global-progress').textContent = `${reussis} / ${total}`;
}

// ============================================================
// THÈME
// ============================================================
function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === "system") {
        html.removeAttribute("data-theme");
    } else {
        html.setAttribute("data-theme", theme);
    }
    localStorage.setItem(STORAGE_KEY_THEME, theme);
    document.querySelectorAll('.theme-options button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.themeValue === theme);
    });
}

function setTheme(theme) { applyTheme(theme); }
function initTheme() { applyTheme(localStorage.getItem(STORAGE_KEY_THEME) || "system"); }

// ============================================================
// LOGIN & INIT
// ============================================================
const MOT_DE_PASSE = "0";

function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-msg');
    if (input === MOT_DE_PASSE) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app-screen').style.display = 'block';
        sessionStorage.setItem('isLoggedIn', 'true');
        initApp();
    } else {
        errorMsg.style.display = 'block';
        document.getElementById('password-input').value = '';
    }
}
if (sessionStorage.getItem('isLoggedIn') === 'true') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app-screen').style.display = 'block';
    window.addEventListener('DOMContentLoaded', initApp);
}
function logout() { sessionStorage.removeItem('isLoggedIn'); location.reload(); }

function initApp() {
    initTheme();
    const cats = [...new Set(NOTIONS.map(n => n.cat))];
    const notionsFilter = document.getElementById('notions-category-filter');
    const quizFilter = document.getElementById('quiz-category-filter');

    notionsFilter.querySelectorAll('option:not([value="all"])').forEach(o => o.remove());
    quizFilter.querySelectorAll('option:not([value="all"])').forEach(o => o.remove());

    cats.forEach(cat => {
        [notionsFilter, quizFilter].forEach(sel => {
            const opt = document.createElement('option');
            opt.value = cat; opt.textContent = cat;
            sel.appendChild(opt);
        });
    });
    renderNotions();
    startQuiz();
    updateGlobalProgress();
    renderProgressBars();
    renderQuizResults();
}

// ============================================================
// NAVIGATION
// ============================================================
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');
    const btn = document.getElementById('hamburger-btn');
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
    btn.classList.toggle('active');
}

function openTab(tabId, evt) {
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    document.querySelectorAll('.tab-bar-desktop .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.mobile-menu .menu-btn').forEach(btn => btn.classList.remove('active'));
    if (evt && evt.closest('.mobile-menu')) evt.classList.add('active');
    document.querySelectorAll('.mobile-menu .menu-btn').forEach(btn => {
        if ((btn.getAttribute('onclick') || '').includes(`'${tabId}'`)) btn.classList.add('active');
    });

    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('open')) toggleMobileMenu();

    if (tabId === 'toutes-notions') renderNotions();
    if (tabId === 'progression') renderProgressBars();
    if (tabId === 'resultats') renderQuizResults();
}

// ============================================================
// NOTIONS (glossaire pur)
// ============================================================
function renderNotions() {
    const search = (document.getElementById('notions-search')?.value || "").toLowerCase().trim();
    const catFilter = document.getElementById('notions-category-filter')?.value || "all";
    const container = document.getElementById('notions-list');
    if (!container) return;

    let filtered = NOTIONS.filter(n => {
        const matchSearch = n.terme.toLowerCase().includes(search) || n.def.toLowerCase().includes(search);
        const matchCat = catFilter === "all" || n.cat === catFilter;
        return matchSearch && matchCat;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<p class="empty-state">Aucune notion trouvée.</p>`;
        return;
    }

    container.innerHTML = filtered.map(n => `
        <div class="glass notion-item">
            <div class="notion-header">
                <h4>${escapeHTML(n.terme)}</h4>
                <span class="cat-tag">${escapeHTML(n.cat)}</span>
            </div>
            <p>${escapeHTML(n.def)}</p>
        </div>
    `).join('');
}

// ============================================================
// QUIZ
// ============================================================
function getFilteredQuestions() {
    const search = (document.getElementById('quiz-search')?.value || "").toLowerCase().trim();
    const cat = document.getElementById('quiz-category-filter')?.value || "all";

    return QUIZ_BANK.filter(q => {
        const matchCat = cat === "all" || q.categorie === cat;
        const matchSearch = search === "" ||
            q.question.toLowerCase().includes(search) ||
            q.categorie.toLowerCase().includes(search);
        return matchCat && matchSearch;
    });
}

function startQuiz() {
    const filtered = getFilteredQuestions();
    if (filtered.length === 0) {
        document.getElementById('quiz-container').innerHTML = `<p class="empty-state">Aucune question ne correspond.</p>`;
        return;
    }
    currentQuizQuestions = shuffleArray(filtered).slice(0, 20);
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById('quiz-container');
    if (currentQuestionIndex >= currentQuizQuestions.length) {
        const pourcentage = Math.round((score / currentQuizQuestions.length) * 100);
        container.innerHTML = `
            <div class="glass score-summary">
                <h2>Quiz terminé !</h2>
                <p>Score : ${score} / ${currentQuizQuestions.length} (${pourcentage}%)</p>
            </div>
            <div class="glass glass-card" style="text-align:center;">
                <p style="margin-bottom:14px; font-size:0.9rem; color:var(--text-secondary);">Continue comme ça !</p>
                <button class="btn btn-primary" onclick="startQuiz()">Nouvelle session</button>
            </div>
        `;
        return;
    }

    const q = currentQuizQuestions[currentQuestionIndex];
    answered = false;
    container.innerHTML = `
        <div class="glass quiz-card">
            <div class="quiz-meta">
                <span>${q.categorie} · ${q.difficulte}</span>
                <span>Question ${currentQuestionIndex + 1} / ${currentQuizQuestions.length}</span>
            </div>
            <div class="quiz-question">${q.question}</div>
            <div class="quiz-options" id="quiz-options">
                ${q.options.map((opt, i) => `<button type="button" data-option-index="${i}">${escapeHTML(opt)}</button>`).join('')}
            </div>
            <div class="quiz-feedback" id="quiz-feedback"></div>
            <div class="quiz-nav">
                <span style="font-size:0.85rem; color:var(--text-tertiary);">Score : ${score}</span>
                <button class="btn btn-primary" id="next-btn" onclick="nextQuestion()" style="display:none;">Suivant →</button>
            </div>
        </div>
    `;
}

function selectAnswer(choice, btn) {
    if (answered) return;
    answered = true;
    const q = currentQuizQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('#quiz-options button');
    buttons.forEach(b => b.disabled = true);

    const feedback = document.getElementById('quiz-feedback');
    const isCorrect = choice === q.bonneReponse;

    progress.resultats.push({
        id: q.id, question: q.question, categorie: q.categorie,
        votreReponse: choice, bonneReponse: q.bonneReponse, correct: isCorrect
    });

    if (isCorrect) {
        btn.classList.add('correct');
        score++;
        feedback.className = 'quiz-feedback show success';
        feedback.innerHTML = `✅ <strong>Correct !</strong><br>${q.explication}`;
        if (!progress.reussis.includes(q.id)) progress.reussis.push(q.id);
    } else {
        btn.classList.add('incorrect');
        buttons.forEach(b => { if (b.textContent === q.bonneReponse) b.classList.add('correct'); });
        feedback.className = 'quiz-feedback show error';
        feedback.innerHTML = `❌ <strong>La bonne réponse était :</strong> ${q.bonneReponse}<br><br>${q.explication}`;
    }

    saveProgress();
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() { currentQuestionIndex++; renderQuestion(); }

// ============================================================
// PROGRESSION
// ============================================================
function renderProgressBars() {
    const container = document.getElementById('progress-list');
    if (!container) return;

    const categories = ["Marketing", "Management", "Gestion", "Négociation"];
    let html = '';

    const totalGlobal = QUIZ_BANK.length;
    const reussisGlobal = progress.reussis.length;
    const pctGlobal = totalGlobal > 0 ? Math.round((reussisGlobal / totalGlobal) * 100) : 0;

    html += `
        <div class="glass progress-item">
            <div class="progress-item-header"><span>🌍 Global</span><span>${reussisGlobal} / ${totalGlobal} (${pctGlobal}%)</span></div>
            <div class="progress-track"><div class="progress-fill global" style="width: ${pctGlobal}%;"></div></div>
        </div>
    `;

    categories.forEach(cat => {
        const questionsCat = QUIZ_BANK.filter(q => q.categorie === cat);
        const totalCat = questionsCat.length;
        const reussisCat = questionsCat.filter(q => progress.reussis.includes(q.id)).length;
        const pctCat = totalCat > 0 ? Math.round((reussisCat / totalCat) * 100) : 0;

        html += `
            <div class="glass progress-item">
                <div class="progress-item-header"><span>${cat}</span><span>${reussisCat} / ${totalCat} (${pctCat}%)</span></div>
                <div class="progress-track"><div class="progress-fill" style="width: ${pctCat}%;"></div></div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ============================================================
// RÉSULTATS DÉTAILLÉS
// ============================================================
function renderQuizResults() {
    const container = document.getElementById('quiz-results-list');
    if (!container) return;

    if (progress.resultats.length === 0) {
        container.innerHTML = `<p class="empty-state">Aucun résultat pour le moment. Lance un quiz !</p>`;
        return;
    }

    const recents = [...progress.resultats].reverse().slice(0, 50);
    container.innerHTML = recents.map(r => `
        <div class="glass result-item">
            <div class="result-item-header">
                <span class="result-question">${r.question}</span>
                <span class="result-status ${r.correct ? 'correct' : 'incorrect'}">${r.correct ? '✅' : '❌'}</span>
            </div>
            <div class="result-details">
                ${r.correct
                    ? `<span class="good-answer">Bonne réponse : ${r.bonneReponse}</span>`
                    : `<span class="your-answer">Ta réponse : ${r.votreReponse}</span><br><span class="good-answer">Bonne réponse : ${r.bonneReponse}</span>`
                }
            </div>
        </div>
    `).join('');
}

// ============================================================
// RÉINITIALISATION
// ============================================================
function resetProgress() {
    if (confirm("Effacer toute la progression et les résultats ? Action irréversible.")) {
        progress = { reussis: [], resultats: [] };
        saveProgress();
        updateGlobalProgress();
        renderProgressBars();
        renderQuizResults();
        startQuiz();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('isLoggedIn') === 'true') initApp();
});
