const MATIERES_INFORMATIQUE = [
  { nom: "Algorithme", couleur: "#6c63f2" },
  { nom: "Anglais", couleur: "#4caf7d" },
  { nom: "Langage C", couleur: "#f59e0b" },
  { nom: "JavaScript", couleur: "#e11d48" },
  { nom: "HTML", couleur: "#8b5cf6" },
  { nom: "CSS", couleur: "#06b6d4" },
  { nom: "Architecture des ordinateurs", couleur: "#84cc16" },
  { nom: "Economie numérique", couleur: "#ec4899" }
];

const CHAPITRES_INFORMATIQUE = {
  "Algorithme": ["Variables et types", "Structures conditionnelles", "Boucles", "Fonctions", "Tableaux"],
  "Anglais": ["Grammaire de base", "Vocabulaire", "Compréhension écrite", "Expression écrite", "Oral"],
  "Langage C": ["Pointeurs", "Structures", "Fichiers", "Allocation dynamique", "Boucles et conditions"],
  "JavaScript": ["Le DOM", "Les événements", "Les fonctions", "Les tableaux", "Les objets"],
  "HTML": ["Balises de base", "Formulaires", "Sémantique", "Accessibilité"],
  "CSS": ["Sélecteurs", "Flexbox", "Grid", "Responsive design"],
  "Architecture des ordinateurs": ["Le processeur", "La mémoire", "Les entrées/sorties", "Le binaire"],
  "Economie numérique": ["E-commerce", "Transformation digitale", "Cybersécurité", "Données et vie privée"]
};

const LECONS_INFORMATIQUE = {
  "Algorithme": {
    "Variables et types": "Une variable stocke une valeur en mémoire sous un nom choisi, pour pouvoir la réutiliser plus tard. Chaque valeur a un type (nombre, texte, booléen...) qui détermine les opérations possibles dessus : on ne peut pas additionner un texte comme on additionne des nombres. Exemple concret : dans une appli de notes, on stocke la moyenne d'un élève dans une variable de type nombre (ex. 14.5), et son nom dans une variable de type texte (ex. \"Awa\").",
    "Structures conditionnelles": "Le if/else permet d'exécuter un bloc de code seulement si une condition est vraie, et un autre bloc sinon. C'est la base de toute décision dans un programme : sans condition, un programme ferait toujours exactement la même chose. Exemple concret : si (note >= 10) alors afficher \"Admis\", sinon afficher \"Recalé\" — le programme choisit le message selon la valeur de la note.",
    "Boucles": "Une boucle (for, while) répète un bloc d'instructions tant qu'une condition est vraie, ou pour chaque élément d'une liste, ce qui évite de dupliquer le même code manuellement. Exemple concret : pour afficher les notes de 30 élèves, on écrit une seule boucle 'pour chaque élève dans la liste, afficher sa note' plutôt que 30 lignes de code identiques.",
    "Fonctions": "Une fonction regroupe des instructions réutilisables sous un nom, qu'on peut appeler autant de fois qu'on veut. Elle peut recevoir des paramètres (des valeurs d'entrée) et renvoyer un résultat avec 'return'. Exemple concret : une fonction calculerMoyenne(notes) prend une liste de notes en paramètre et renvoie leur moyenne, utilisable pour n'importe quel élève sans réécrire le calcul.",
    "Tableaux": "Un tableau stocke plusieurs valeurs ordonnées sous un seul nom, accessibles par leur position (index), en commençant à 0. C'est très pratique pour manipuler des listes de données similaires. Exemple concret : notes = [12, 15, 8, 17] ; notes[0] vaut 12 (le premier élément), notes[2] vaut 8 (le troisième)."
  },
  "Anglais": {
    "Grammaire de base": "Les temps verbaux (présent simple, prétérit, present perfect...) et l'ordre sujet-verbe-complément sont la base pour construire des phrases correctes en anglais. Une erreur fréquente de francophones est d'oublier le 's' à la troisième personne du présent simple. Exemple concret : 'She works every day' (correct) et non 'She work every day'.",
    "Vocabulaire": "Apprendre du vocabulaire par thème (informatique, quotidien, travail) est plus efficace que d'apprendre des listes de mots isolés, car le cerveau retient mieux les associations logiques. Exemple concret : pour l'informatique, regrouper directement 'keyboard' (clavier), 'screen' (écran), 'mouse' (souris) plutôt que les mélanger avec du vocabulaire de cuisine.",
    "Compréhension écrite": "Lire régulièrement des textes variés (articles techniques, extraits de livres) améliore la vitesse de lecture et la compréhension globale, même sans connaître tous les mots. Exemple concret : lire la documentation officielle d'un langage de programmation en anglais aide à la fois l'anglais technique et la compréhension du code.",
    "Expression écrite": "Structurer ses idées avec une introduction, un développement et une conclusion rend un texte plus clair, même en langue étrangère, et aide le lecteur à suivre le raisonnement. Exemple concret : pour un email professionnel en anglais, commencer par le sujet ('I am writing to...'), développer le point principal, puis conclure par une action attendue ('Please let me know...').",
    "Oral": "S'entraîner à parler à voix haute, même seul(e), aide à gagner en aisance et à mieux prononcer les mots difficiles, car la mémoire musculaire de la bouche se développe avec la répétition. Exemple concret : s'enregistrer en train de présenter son projet en anglais, puis se réécouter pour repérer les mots mal prononcés."
  },
  "Langage C": {
    "Pointeurs": "Un pointeur est une variable qui stocke l'adresse mémoire d'une autre variable, plutôt que sa valeur directement. C'est une notion clé du C qui permet de manipuler la mémoire finement. Exemple concret : int x = 5; int *p = &x; — 'p' contient l'adresse de 'x', et *p permet d'accéder ou modifier la valeur de 'x' indirectement.",
    "Structures": "Une struct regroupe plusieurs variables de types différents sous un seul type personnalisé, pratique pour représenter un objet complexe comme une personne ou un produit. Exemple concret : struct Etudiant { char nom[50]; int age; float moyenne; }; regroupe le nom, l'âge et la moyenne d'un étudiant en une seule structure.",
    "Fichiers": "Le C permet de lire et écrire dans des fichiers avec fopen, fread, fwrite et fclose, pour faire persister des données entre deux exécutions du programme. Exemple concret : sauvegarder la liste des étudiants dans un fichier 'etudiants.txt' pour la retrouver même après avoir fermé le programme.",
    "Allocation dynamique": "malloc et free permettent de réserver et libérer de la mémoire pendant l'exécution du programme, plutôt qu'à l'avance, ce qui est utile quand on ne connaît pas la taille des données au départ. Exemple concret : int *tab = malloc(n * sizeof(int)); réserve de la mémoire pour un tableau de taille 'n' connue seulement à l'exécution.",
    "Boucles et conditions": "Comme dans la plupart des langages, for, while et if structurent la logique du programme en C, avec une syntaxe proche du JavaScript vu en cours. Exemple concret : for (int i = 0; i < 10; i++) { printf(\"%d\\n\", i); } affiche les nombres de 0 à 9."
  },
  "JavaScript": {
    "Le DOM": "Le DOM (Document Object Model) est la représentation de la page HTML que JavaScript peut lire et modifier en temps réel, sans recharger la page. C'est ce qui rend un site vraiment interactif. Exemple concret : document.getElementById('titre').textContent = 'Nouveau titre' change instantanément le texte affiché à l'écran.",
    "Les événements": "Un événement (clic, saisie, soumission de formulaire) déclenche une fonction via addEventListener, rendant la page réactive aux actions de l'utilisateur. Exemple concret : bouton.addEventListener('click', function() { alert('Merci !'); }) affiche une alerte chaque fois qu'on clique sur le bouton.",
    "Les fonctions": "Les fonctions organisent le code en blocs réutilisables. Elles peuvent être déclarées classiquement (function nom() {}) ou en fonctions fléchées (() => {}), une syntaxe plus courte apparue récemment. Exemple concret : const doubler = (n) => n * 2; renvoie le double d'un nombre passé en paramètre.",
    "Les tableaux": "Les tableaux JavaScript ont des méthodes puissantes (push, filter, map, forEach) pour manipuler des listes de données sans écrire de boucles manuelles à chaque fois. Exemple concret : [12, 15, 8].filter(note => note >= 10) renvoie uniquement les notes supérieures ou égales à 10, soit [12, 15].",
    "Les objets": "Un objet regroupe des paires clé-valeur. C'est la structure idéale pour représenter une entité avec plusieurs propriétés, comme un article ou un utilisateur. Exemple concret : const etudiant = { nom: 'Awa', age: 20 }; etudiant.nom vaut 'Awa'."
  },
  "HTML": {
    "Balises de base": "HTML structure une page avec des balises comme <h1>, <p>, <div> ou <a>, chacune ayant un rôle sémantique précis pour organiser le contenu. Exemple concret : <h1>Titre principal</h1><p>Un paragraphe de texte.</p> crée un gros titre suivi d'un paragraphe normal.",
    "Formulaires": "Les balises <form>, <input>, <select> et <button> permettent de récupérer des informations saisies par l'utilisateur, essentielles pour toute interaction (inscription, contact, recherche). Exemple concret : <input type=\"email\" required> crée un champ qui vérifie automatiquement que la saisie ressemble à une adresse e-mail.",
    "Sémantique": "Utiliser <header>, <main>, <section>, <footer> plutôt que des <div> partout rend le code plus lisible et accessible, car chaque balise indique clairement son rôle dans la page. Exemple concret : <footer> pour le pied de page est immédiatement compréhensible, contrairement à <div class=\"bas-de-page\">.",
    "Accessibilité": "Des attributs comme alt, aria-label ou l'usage correct des labels rendent un site utilisable par tous, y compris avec un lecteur d'écran pour les personnes malvoyantes. Exemple concret : <img src=\"chat.jpg\" alt=\"Un chat noir assis sur un canapé\"> permet à un lecteur d'écran de décrire l'image."
  },
  "CSS": {
    "Sélecteurs": "Les sélecteurs (classe, id, balise, descendant) ciblent précisément les éléments HTML à styliser, du plus général au plus spécifique. Exemple concret : .carte cible tous les éléments avec class=\"carte\", tandis que #titre-principal ne cible que l'unique élément avec id=\"titre-principal\".",
    "Flexbox": "Flexbox aligne des éléments sur une ligne ou une colonne facilement, avec justify-content (alignement horizontal) et align-items (alignement vertical). Exemple concret : display: flex; justify-content: center; centre horizontalement tous les enfants d'un conteneur.",
    "Grid": "CSS Grid organise une mise en page en lignes ET colonnes en même temps, idéal pour des structures complexes comme un tableau de bord. Exemple concret : grid-template-columns: repeat(3, 1fr); crée 3 colonnes de largeur égale automatiquement.",
    "Responsive design": "Les media queries adaptent l'affichage selon la taille de l'écran, pour un rendu correct sur mobile comme sur desktop, sans créer deux sites différents. Exemple concret : @media (max-width: 600px) { .menu { display: none; } } cache le menu uniquement sur petit écran."
  },
  "Architecture des ordinateurs": {
    "Le processeur": "Le processeur (CPU) exécute les instructions des programmes, à une vitesse mesurée en gigahertz (GHz) qui indique combien d'opérations il peut faire par seconde. Exemple concret : un CPU à 3 GHz peut théoriquement exécuter environ 3 milliards de cycles d'horloge chaque seconde.",
    "La mémoire": "La RAM stocke temporairement les données en cours d'utilisation ; elle est très rapide mais perd tout son contenu à l'extinction de l'ordinateur, contrairement au disque dur. Exemple concret : quand un logiciel plante et qu'on n'a pas sauvegardé, on perd les données car elles n'étaient que dans la RAM.",
    "Les entrées/sorties": "Les périphériques (clavier, écran, disque, souris) communiquent avec l'ordinateur via des interfaces d'entrée/sortie qui traduisent leurs signaux en données exploitables. Exemple concret : quand tu appuies sur une touche du clavier, un signal électrique est converti en code numérique que le processeur peut traiter.",
    "Le binaire": "Toute information est finalement stockée en binaire (uniquement des 0 et des 1), la seule 'langue' que comprend directement le matériel électronique. Exemple concret : la lettre 'A' est stockée en mémoire sous la forme du nombre binaire 01000001 (soit 65 en décimal, son code ASCII)."
  },
  "Economie numérique": {
    "E-commerce": "Le commerce en ligne repose sur des plateformes qui gèrent catalogue, paiement et logistique, souvent à grande échelle et avec une forte concurrence internationale. Exemple concret : une boutique en ligne utilise un site comme Shopify pour gérer ses produits, encaisser les paiements par carte et suivre les livraisons.",
    "Transformation digitale": "C'est le processus par lequel une organisation intègre les technologies numériques dans tous ses processus, du service client à la production. Exemple concret : une banque qui remplace ses guichets physiques par une application mobile permettant virements et consultations en quelques clics.",
    "Cybersécurité": "Protéger les données et systèmes contre les attaques (piratage, vol de données, rançongiciels) est un enjeu central de l'économie numérique moderne, aussi bien pour les entreprises que les particuliers. Exemple concret : utiliser un mot de passe différent pour chaque site et activer la double authentification limite les risques en cas de fuite de données.",
    "Données et vie privée": "Les entreprises collectent énormément de données utilisateurs (navigation, achats, localisation), encadrées par des lois comme le RGPD en Europe qui imposent transparence et consentement. Exemple concret : un site doit désormais demander explicitement l'accord avant de déposer des cookies de suivi publicitaire."
  }
};

const MATIERES_GESTION = [
  { nom: "Comptabilité générale", couleur: "#3b82c4" },
  { nom: "Marketing", couleur: "#4caf7d" },
  { nom: "Management", couleur: "#f59e0b" },
  { nom: "Droit des affaires", couleur: "#e11d48" }
];

const CHAPITRES_GESTION = {
  "Comptabilité générale": ["Le bilan comptable", "Le compte de résultat", "L'amortissement"],
  "Marketing": ["Le mix marketing (4P)", "L'étude de marché", "Le comportement du consommateur"],
  "Management": ["Les styles de management", "La gestion d'équipe", "La prise de décision"],
  "Droit des affaires": ["Le contrat commercial", "Les sociétés commerciales", "La concurrence"]
};

const LECONS_GESTION = {
  "Comptabilité générale": {
    "Le bilan comptable": "Le bilan présente à un instant T ce que possède l'entreprise (actif : locaux, stocks, argent en banque) et comment elle l'a financé (passif : capitaux propres, dettes). Exemple concret : une boutique qui possède 50 000 € de stock financés à 30 000 € par un prêt bancaire et 20 000 € de fonds propres verra ces montants équilibrés au bilan.",
    "Le compte de résultat": "Il récapitule tous les produits (ventes, revenus) et charges (achats, salaires, loyers) d'un exercice pour déterminer si l'entreprise a fait un bénéfice ou une perte. Exemple concret : une entreprise qui vend 100 000 € de produits mais dépense 90 000 € en charges dégage un bénéfice de 10 000 €.",
    "L'amortissement": "L'amortissement répartit la perte de valeur d'un bien durable (machine, véhicule, ordinateur) sur plusieurs années comptables, plutôt que de la constater d'un coup. Exemple concret : un ordinateur acheté 1 200 € et amorti sur 3 ans génère une charge de 400 € par an dans les comptes."
  },
  "Marketing": {
    "Le mix marketing (4P)": "Produit, Prix, Place (distribution) et Promotion : les 4 leviers pour construire une offre cohérente sur un marché. Exemple concret : pour un nouveau soda, il faut décider sa recette (Produit), son prix par rapport aux concurrents (Prix), où il sera vendu (Place : supermarchés, en ligne...) et comment le faire connaître (Promotion : publicité, réseaux sociaux).",
    "L'étude de marché": "Elle permet de comprendre les besoins des clients et la position des concurrents avant de lancer un produit, pour limiter les risques d'échec commercial. Exemple concret : avant d'ouvrir un fast-food, on interroge des habitants du quartier sur leurs habitudes alimentaires et on observe les restaurants déjà présents.",
    "Le comportement du consommateur": "Étudier pourquoi et comment les clients achètent (émotion, besoin, influence sociale, prix) aide à mieux cibler ses actions marketing. Exemple concret : un client peut acheter une marque plus chère simplement parce qu'elle est recommandée par un influenceur qu'il suit."
  },
  "Management": {
    "Les styles de management": "Directif, participatif, délégatif, persuasif... chaque style adapte la façon de diriger selon le contexte, l'équipe et l'urgence de la situation. Exemple concret : en situation d'urgence (incendie, crise), un management directif (donner des ordres clairs et rapides) est plus efficace qu'un management participatif qui prendrait trop de temps.",
    "La gestion d'équipe": "Motiver, répartir les tâches selon les compétences et communiquer clairement sont clés pour qu'une équipe travaille efficacement ensemble. Exemple concret : confier la partie technique d'un projet à la personne la plus à l'aise avec les outils, et la présentation orale à celle qui communique le mieux.",
    "La prise de décision": "Une bonne décision s'appuie sur des données fiables (chiffres, retours clients) et une analyse des risques, plutôt que sur la seule intuition. Exemple concret : avant d'investir dans un nouveau produit, analyser les ventes des produits similaires des 2 dernières années plutôt que de se fier uniquement à un « bon feeling »."
  },
  "Droit des affaires": {
    "Le contrat commercial": "Un contrat engage juridiquement les parties qui le signent ; il doit préciser clairement les obligations de chacun (prix, délais, qualité) pour éviter les litiges. Exemple concret : un contrat de fourniture précise que le fournisseur livre 1000 unités par mois, sous peine de pénalités de retard.",
    "Les sociétés commerciales": "SARL, SA, SAS, entreprise individuelle... chaque forme juridique a ses propres règles de fonctionnement, de responsabilité et de fiscalité. Exemple concret : dans une SARL, la responsabilité des associés est limitée à leurs apports, contrairement à une entreprise individuelle où le patrimoine personnel peut être engagé.",
    "La concurrence": "Le droit encadre la concurrence pour éviter les abus de position dominante et les ententes illégales entre entreprises qui nuiraient aux consommateurs. Exemple concret : deux entreprises concurrentes qui s'entendent secrètement pour fixer le même prix élevé enfreignent le droit de la concurrence."
  }
};

const MATIERES_FINANCE = [
  { nom: "Analyse financière", couleur: "#3b82c4" },
  { nom: "Comptabilité", couleur: "#4caf7d" },
  { nom: "Fiscalité", couleur: "#f59e0b" },
  { nom: "Marchés financiers", couleur: "#e11d48" }
];

const CHAPITRES_FINANCE = {
  "Analyse financière": ["Les ratios financiers", "La rentabilité", "Le seuil de rentabilité"],
  "Comptabilité": ["Le plan comptable", "Les écritures comptables", "La clôture d'exercice"],
  "Fiscalité": ["La TVA", "L'impôt sur les sociétés", "Les régimes fiscaux"],
  "Marchés financiers": ["Les actions et obligations", "La bourse", "Le risque et le rendement"]
};

const LECONS_FINANCE = {
  "Analyse financière": {
    "Les ratios financiers": "Des indicateurs calculés à partir du bilan et du compte de résultat (ratio de liquidité, de solvabilité, d'endettement) qui résument la santé financière d'une entreprise en un coup d'œil. Exemple concret : un ratio de liquidité générale de 2 signifie que l'entreprise possède deux fois plus d'actifs court terme que de dettes court terme, signe de bonne santé.",
    "La rentabilité": "Elle mesure ce que rapporte un investissement par rapport à ce qu'il a coûté, exprimée en pourcentage pour pouvoir comparer différents projets. Exemple concret : un investissement de 10 000 € qui rapporte 1 500 € de bénéfice par an a une rentabilité de 15 %.",
    "Le seuil de rentabilité": "Le chiffre d'affaires à partir duquel l'entreprise ne perd plus d'argent, c'est-à-dire le point où les charges sont totalement couvertes par les ventes. Exemple concret : si les charges fixes sont de 20 000 € par mois et que chaque vente rapporte 50 € de marge, il faut vendre 400 unités pour atteindre le seuil de rentabilité."
  },
  "Comptabilité": {
    "Le plan comptable": "Une liste normalisée de comptes (numérotés) utilisée pour classer toutes les opérations de l'entreprise de façon standardisée, facilitant les comparaisons entre entreprises. Exemple concret : le compte 512 correspond toujours à la banque, quel que soit le pays ou le secteur d'activité dans un plan comptable normalisé.",
    "Les écritures comptables": "Chaque opération est enregistrée en partie double : un débit et un crédit qui s'équilibrent toujours, garantissant la cohérence des comptes. Exemple concret : un achat de fournitures de 100 € payé en espèces se traduit par un débit de 100 € sur le compte 'Fournitures' et un crédit de 100 € sur le compte 'Caisse'.",
    "La clôture d'exercice": "En fin d'année, on ajuste les comptes (amortissements, provisions, stocks) pour obtenir une image fidèle de la situation financière réelle de l'entreprise. Exemple concret : constater la dépréciation d'un stock invendable avant de clôturer les comptes de l'année pour ne pas surestimer la valeur de l'entreprise."
  },
  "Fiscalité": {
    "La TVA": "Un impôt sur la consommation collecté par les entreprises auprès de leurs clients, puis reversé à l'État, qui ne pèse finalement que sur le consommateur final. Exemple concret : un produit vendu 120 € TTC avec une TVA à 20 % inclut 20 € de TVA que l'entreprise reversera à l'État.",
    "L'impôt sur les sociétés": "Un impôt calculé sur le bénéfice réalisé par une entreprise durant l'exercice, avec un taux qui peut varier selon la taille de l'entreprise ou le pays. Exemple concret : une entreprise réalisant 50 000 € de bénéfice avec un taux d'IS à 25 % devra verser 12 500 € d'impôt à l'État.",
    "Les régimes fiscaux": "Selon sa taille et son chiffre d'affaires, une entreprise relève d'un régime fiscal simplifié (moins de formalités) ou réel (comptabilité plus détaillée). Exemple concret : une petite entreprise individuelle avec un faible chiffre d'affaires peut bénéficier du régime micro-entreprise, avec des démarches allégées."
  },
  "Marchés financiers": {
    "Les actions et obligations": "Une action donne une part de propriété de l'entreprise (avec droit de vote et dividendes potentiels), une obligation est simplement un prêt qu'on fait à l'entreprise ou à l'État, remboursé avec intérêts. Exemple concret : acheter une action Total rend actionnaire de l'entreprise, alors qu'acheter une obligation d'État française revient à prêter de l'argent à la France contre un taux d'intérêt fixe.",
    "La bourse": "Un marché organisé où s'échangent des titres financiers (actions, obligations) entre investisseurs, avec des prix qui varient selon l'offre et la demande. Exemple concret : le CAC 40 regroupe les 40 plus grandes entreprises françaises cotées en bourse, dont le cours varie chaque jour.",
    "Le risque et le rendement": "En général, plus un placement est risqué (actions, cryptomonnaies), plus son rendement potentiel est élevé ; à l'inverse, un placement sûr (livret bancaire) rapporte peu. Exemple concret : un livret d'épargne garanti rapporte environ 3 % par an sans risque, tandis que des actions peuvent rapporter 10 % certaines années... ou en perdre 20 % d'autres années."
  }
};

const MATIERES_TRANSPORT = [
  { nom: "Gestion des stocks", couleur: "#3b82c4" },
  { nom: "Transport international", couleur: "#4caf7d" },
  { nom: "Supply Chain", couleur: "#f59e0b" },
  { nom: "Douane et réglementation", couleur: "#e11d48" }
];

const CHAPITRES_TRANSPORT = {
  "Gestion des stocks": ["Les méthodes de stockage", "Le réapprovisionnement", "L'inventaire"],
  "Transport international": ["Les incoterms", "Le fret maritime", "Le fret aérien"],
  "Supply Chain": ["La chaîne logistique", "La planification", "La traçabilité"],
  "Douane et réglementation": ["Les formalités douanières", "Les documents de transport", "Les normes internationales"]
};

const LECONS_TRANSPORT = {
  "Gestion des stocks": {
    "Les méthodes de stockage": "FIFO (premier entré, premier sorti) et LIFO (dernier entré, premier sorti) sont deux méthodes différentes pour organiser la sortie des produits stockés selon leur date d'arrivée. Exemple concret : pour des produits alimentaires périssables, on utilise toujours le FIFO afin d'écouler d'abord les plus anciens et éviter le gaspillage.",
    "Le réapprovisionnement": "Anticiper les commandes auprès des fournisseurs pour éviter à la fois les ruptures de stock (perte de ventes) et le surstockage (coûts de stockage inutiles). Exemple concret : un magasin fixe un seuil d'alerte à 20 unités restantes pour déclencher automatiquement une nouvelle commande avant la rupture.",
    "L'inventaire": "Un comptage régulier (mensuel, annuel) permet de vérifier que le stock réel correspond bien au stock théorique enregistré dans le système informatique. Exemple concret : un inventaire révèle un écart de 5 unités manquantes, révélant une erreur de saisie ou un vol à identifier."
  },
  "Transport international": {
    "Les incoterms": "Des règles internationales standardisées (comme EXW, FOB, CIF) qui définissent précisément qui paie le transport et qui assume les risques à chaque étape du trajet. Exemple concret : avec l'incoterm FOB (Free On Board), le vendeur assume les risques jusqu'à ce que la marchandise soit chargée sur le bateau, puis c'est à l'acheteur de payer et d'assumer les risques ensuite.",
    "Le fret maritime": "Le transport par bateau est économique pour de gros volumes sur de longues distances, mais nettement plus lent que les autres modes de transport. Exemple concret : un conteneur de 20 pieds venant de Chine met généralement 4 à 6 semaines pour arriver en Afrique de l'Ouest par voie maritime.",
    "Le fret aérien": "Plus rapide (quelques jours au lieu de semaines) mais nettement plus coûteux, utilisé principalement pour les marchandises urgentes, périssables ou de haute valeur. Exemple concret : des médicaments urgents ou des pièces détachées critiques pour une usine à l'arrêt seront envoyés par avion malgré le coût élevé."
  },
  "Supply Chain": {
    "La chaîne logistique": "L'ensemble des étapes qui relient le fournisseur de matières premières jusqu'au client final : production, stockage, transport, distribution. Exemple concret : pour un téléphone, la chaîne logistique inclut l'extraction des minerais, la fabrication des composants, l'assemblage, puis le transport jusqu'au magasin.",
    "La planification": "Anticiper la demande future (grâce aux ventes passées et aux tendances) pour ajuster à l'avance la production et l'approvisionnement, évitant retards ou surproduction. Exemple concret : une entreprise de jouets planifie une production plus importante dès septembre pour être prête pour les fêtes de fin d'année.",
    "La traçabilité": "Suivre un produit à chaque étape de son parcours permet de garantir sa provenance, sa qualité, et de réagir rapidement en cas de problème (rappel produit). Exemple concret : grâce à un code-barres ou une puce RFID, on peut retracer exactement quel entrepôt et quel camion ont transporté un lot de produits défectueux."
  },
  "Douane et réglementation": {
    "Les formalités douanières": "Les démarches administratives obligatoires pour faire passer une marchandise d'un pays à un autre, incluant déclaration, taxes et contrôles éventuels. Exemple concret : importer des vêtements depuis l'Asie nécessite une déclaration en douane précisant la valeur, l'origine et la nature exacte des marchandises.",
    "Les documents de transport": "Facture commerciale, bon de livraison, connaissement (pour le maritime)... chaque document a un rôle précis et légal tout au long du trajet de la marchandise. Exemple concret : le connaissement maritime sert à la fois de preuve du contrat de transport, de reçu de la marchandise, et de titre de propriété que l'acheteur doit présenter pour récupérer sa cargaison.",
    "Les normes internationales": "Des standards communs (dimensions de conteneurs, symboles de sécurité, unités de mesure) qui facilitent grandement les échanges entre pays aux réglementations différentes. Exemple concret : la taille standardisée des conteneurs maritimes permet de les empiler et transférer facilement entre bateaux, trains et camions partout dans le monde."
  }
};

const MATIERES_RH = [
  { nom: "Droit du travail", couleur: "#3b82c4" },
  { nom: "Recrutement", couleur: "#4caf7d" },
  { nom: "Gestion des compétences", couleur: "#f59e0b" },
  { nom: "Paie et rémunération", couleur: "#e11d48" }
];

const CHAPITRES_RH = {
  "Droit du travail": ["Le contrat de travail", "La rupture du contrat", "Les congés"],
  "Recrutement": ["La définition du besoin", "L'entretien", "L'intégration"],
  "Gestion des compétences": ["La formation", "L'évaluation annuelle", "La mobilité interne"],
  "Paie et rémunération": ["Le bulletin de paie", "Les cotisations sociales", "Les avantages en nature"]
};

const LECONS_RH = {
  "Droit du travail": {
    "Le contrat de travail": "Un accord qui fixe les droits et devoirs entre employeur et salarié (durée, salaire, missions), sous différentes formes comme le CDI ou le CDD. Exemple concret : un CDI (contrat à durée indéterminée) n'a pas de date de fin prévue, alors qu'un CDD (contrat à durée déterminée) est limité dans le temps, souvent pour un remplacement ou un surcroît d'activité.",
    "La rupture du contrat": "Démission, licenciement, rupture conventionnelle : chaque mode de fin de contrat suit des règles précises concernant les préavis et indemnités. Exemple concret : lors d'une rupture conventionnelle, employeur et salarié se mettent d'accord à l'amiable, et le salarié touche des indemnités contrairement à une démission classique.",
    "Les congés": "Les salariés ont droit à des congés payés, dont la durée dépend du temps travaillé (généralement 2,5 jours par mois en France). Exemple concret : un salarié travaillant depuis un an complet a généralement acquis 30 jours ouvrables de congés payés à prendre dans l'année."
  },
  "Recrutement": {
    "La définition du besoin": "Avant de recruter, il faut clarifier précisément le poste à pourvoir, les missions attendues et les compétences réellement recherchées pour éviter une erreur de recrutement coûteuse. Exemple concret : rédiger une fiche de poste détaillée avant de publier une offre d'emploi, plutôt que de recruter dans l'urgence sans critères clairs.",
    "L'entretien": "Un moment clé pour évaluer non seulement les compétences techniques du candidat, mais aussi sa motivation et son adéquation avec la culture de l'entreprise. Exemple concret : poser des questions de mise en situation ('Comment géreriez-vous un conflit avec un collègue ?') plutôt que de simples questions théoriques.",
    "L'intégration": "Un bon accueil et accompagnement des nouveaux employés (onboarding) favorise leur engagement et réduit le risque qu'ils quittent l'entreprise rapidement. Exemple concret : prévoir un parcours d'intégration d'une semaine avec présentation de l'équipe, formation aux outils, et un point régulier avec le manager."
  },
  "Gestion des compétences": {
    "La formation": "Elle permet aux salariés de développer de nouvelles compétences tout au long de leur carrière, bénéfique à la fois pour l'employé et pour l'entreprise qui reste compétitive. Exemple concret : financer une formation en gestion de projet pour un salarié qui souhaite évoluer vers un poste de chef d'équipe.",
    "L'évaluation annuelle": "Un entretien régulier entre le salarié et son manager pour faire le point sur les objectifs atteints, les difficultés rencontrées et la progression souhaitée. Exemple concret : lors de l'entretien annuel, on compare les objectifs fixés en début d'année aux résultats réels, et on en fixe de nouveaux pour l'année suivante.",
    "La mobilité interne": "Changer de poste ou de service au sein de la même entreprise, souvent bénéfique pour les deux parties : le salarié évolue sans partir, l'entreprise garde son expérience. Exemple concret : un commercial performant qui souhaite se reconvertir peut être formé et transféré vers le service marketing plutôt que de démissionner."
  },
  "Paie et rémunération": {
    "Le bulletin de paie": "Un document obligatoire remis chaque mois détaillant le salaire brut, les différentes cotisations retenues, et le montant net réellement versé au salarié. Exemple concret : un salaire brut de 2 000 € peut donner environ 1 560 € net après déduction des cotisations sociales, la différence étant reversée aux organismes sociaux.",
    "Les cotisations sociales": "Des prélèvements obligatoires sur le salaire qui financent collectivement la sécurité sociale, les retraites, l'assurance chômage et d'autres protections sociales. Exemple concret : une partie des cotisations retraite prélevées aujourd'hui sert à payer les pensions des retraités actuels, selon le principe de répartition.",
    "Les avantages en nature": "Des avantages non monétaires (véhicule de fonction, logement, repas) qui s'ajoutent au salaire de base et sont généralement soumis à l'impôt comme un revenu. Exemple concret : un commercial disposant d'une voiture de fonction utilisable aussi le week-end voit la valeur de cet avantage ajoutée à son salaire imposable."
  }
};

MATIERES_INFORMATIQUE.push({ nom: "Électronique numérique", couleur: "#0ea5e9" });
CHAPITRES_INFORMATIQUE["Électronique numérique"] = ["Les portes logiques", "Le binaire et l'hexadécimal", "Les circuits combinatoires"];
LECONS_INFORMATIQUE["Électronique numérique"] = {
  "Les portes logiques": "Les portes AND, OR, NOT combinent des signaux binaires pour construire toute la logique des circuits numériques, de la calculatrice au processeur. Exemple concret : une porte AND (ET) ne laisse passer un signal '1' que si ses deux entrées sont à '1', comme un interrupteur qui a besoin de deux clés tournées en même temps.",
  "Le binaire et l'hexadécimal": "L'électronique numérique manipule uniquement des 0 et des 1 ; l'hexadécimal sert à représenter ces suites de bits de façon plus lisible pour les humains. Exemple concret : la couleur blanche en web design s'écrit #FFFFFF en hexadécimal, bien plus court que son équivalent en binaire.",
  "Les circuits combinatoires": "Un circuit combinatoire produit une sortie qui dépend uniquement des entrées actuelles, sans aucune mémoire de ce qui s'est passé avant, contrairement à un circuit séquentiel. Exemple concret : un additionneur binaire qui calcule 1+1 donne toujours le même résultat (10 en binaire) quelles que soient les additions précédentes."
};

const MATIERES_INFO_L2 = [
  { nom: "Python", couleur: "#3b82c4" },
  { nom: "PHP", couleur: "#8b5cf6" },
  { nom: "SQL", couleur: "#4caf7d" },
  { nom: "Bases de données", couleur: "#f59e0b" },
  { nom: "Anglais", couleur: "#4caf7d" }
];

const CHAPITRES_INFO_L2 = {
  "Python": ["Syntaxe de base", "Les structures de données", "La programmation orientée objet"],
  "PHP": ["Syntaxe et variables", "Les formulaires côté serveur", "La connexion à une base de données"],
  "SQL": ["Le langage de requête SELECT", "Les jointures", "L'insertion et la modification de données"],
  "Bases de données": ["Le modèle relationnel", "La normalisation", "Les clés primaires et étrangères"],
  "Anglais": CHAPITRES_INFORMATIQUE["Anglais"]
};

const LECONS_INFO_L2 = {
  "Python": {
    "Syntaxe de base": "Python utilise l'indentation (espaces en début de ligne) pour délimiter les blocs de code, sans accolades comme en JavaScript ou en C, ce qui le rend très lisible. Exemple concret : if note >= 10:\\n    print(\"Admis\") — l'indentation de la ligne print indique qu'elle appartient au bloc du 'if'.",
    "Les structures de données": "Listes, tuples, dictionnaires et sets permettent de stocker et organiser des données efficacement, chacun ayant ses propres avantages (modifiable ou non, ordonné ou non). Exemple concret : etudiant = {\"nom\": \"Awa\", \"age\": 20} est un dictionnaire ; etudiant[\"nom\"] renvoie \"Awa\", similaire aux objets JavaScript.",
    "La programmation orientée objet": "Les classes Python permettent de créer des objets combinant données (attributs) et comportements (méthodes), pour modéliser des concepts du monde réel. Exemple concret : class Etudiant: def __init__(self, nom): self.nom = nom — permet ensuite de créer autant d'objets Etudiant que nécessaire."
  },
  "PHP": {
    "Syntaxe et variables": "PHP s'exécute côté serveur (avant que la page n'arrive dans le navigateur) ; ses variables commencent toujours par le symbole $, contrairement à JavaScript. Exemple concret : $nom = \"Awa\"; echo \"Bonjour \" . $nom; affiche 'Bonjour Awa' généré côté serveur avant l'envoi de la page.",
    "Les formulaires côté serveur": "PHP récupère les données envoyées par un formulaire HTML via les superglobales $_GET (dans l'URL) et $_POST (données cachées), pour les traiter côté serveur. Exemple concret : $_POST['email'] récupère la valeur saisie dans un champ <input name=\"email\"> après soumission du formulaire.",
    "La connexion à une base de données": "PHP se connecte généralement à une base de données MySQL via l'extension PDO ou mysqli, pour lire ou écrire des données de façon persistante. Exemple concret : un site e-commerce en PHP interroge sa base MySQL pour afficher la liste des produits disponibles à chaque visite."
  },
  "SQL": {
    "Le langage de requête SELECT": "SELECT permet d'interroger une base de données pour récupérer des lignes précises selon des conditions, sans avoir à parcourir manuellement toutes les données. Exemple concret : SELECT nom, moyenne FROM etudiants WHERE moyenne >= 10; renvoie uniquement les étudiants admis.",
    "Les jointures": "Une jointure combine les données de plusieurs tables lorsqu'elles partagent une colonne commune (comme un identifiant), évitant de dupliquer l'information. Exemple concret : joindre une table 'commandes' et une table 'clients' via leur id_client commun permet d'afficher le nom du client à côté de chaque commande.",
    "L'insertion et la modification de données": "INSERT, UPDATE et DELETE permettent respectivement d'ajouter, modifier et supprimer des lignes dans une table de base de données. Exemple concret : UPDATE etudiants SET moyenne = 15 WHERE id = 3; modifie uniquement la moyenne de l'étudiant dont l'id vaut 3."
  },
  "Bases de données": {
    "Le modèle relationnel": "Les données sont organisées en tables liées entre elles par des relations, plutôt qu'en un seul gros fichier, ce qui évite la duplication et facilite les mises à jour. Exemple concret : plutôt que de répéter l'adresse d'un client dans chaque commande, on stocke l'adresse une seule fois dans une table 'clients' reliée aux commandes.",
    "La normalisation": "Un processus qui réduit la redondance des données en les répartissant intelligemment entre plusieurs tables selon des règles précises (formes normales). Exemple concret : séparer les informations 'produit' et 'catégorie' en deux tables distinctes plutôt que de répéter le nom de la catégorie sur chaque ligne de produit.",
    "Les clés primaires et étrangères": "La clé primaire identifie une ligne de façon unique dans une table (comme un numéro de sécurité sociale) ; la clé étrangère la relie à une ligne d'une autre table. Exemple concret : dans une table 'commandes', la colonne id_client est une clé étrangère qui pointe vers la clé primaire id de la table 'clients'."
  },
  "Anglais": LECONS_INFORMATIQUE["Anglais"]
};

function filtrerMatieres(matieresCompletes, nomsRetenus) {
  return matieresCompletes.filter(m => nomsRetenus.includes(m.nom));
}

function filtrerParCles(objetSource, cles) {
  const resultat = {};
  for (const cle of cles) {
    resultat[cle] = objetSource[cle];
  }
  return resultat;
}

const NOMS_GENIE_LOGICIEL = ["JavaScript", "Python", "PHP", "HTML", "Anglais"];
const NOMS_RESEAUX = ["Architecture des ordinateurs", "Langage C", "Anglais", "Economie numérique"];

const POOL_MATIERES_INFO = [...MATIERES_INFORMATIQUE, ...MATIERES_INFO_L2];
const POOL_CHAPITRES_INFO = { ...CHAPITRES_INFORMATIQUE, ...CHAPITRES_INFO_L2 };
const POOL_LECONS_INFO = { ...LECONS_INFORMATIQUE, ...LECONS_INFO_L2 };

const NOMS_MANAGEMENT_GENERAL = ["Comptabilité générale", "Marketing", "Management"];

const FILIERES = {
  "Informatique": {
    "L1": { matieres: MATIERES_INFORMATIQUE, chapitres: CHAPITRES_INFORMATIQUE, lecons: LECONS_INFORMATIQUE },
    "L2": { matieres: MATIERES_INFO_L2, chapitres: CHAPITRES_INFO_L2, lecons: LECONS_INFO_L2 },
    "L3": {
      specialites: {
        "Génie Logiciel": {
          matieres: filtrerMatieres(POOL_MATIERES_INFO, NOMS_GENIE_LOGICIEL),
          chapitres: filtrerParCles(POOL_CHAPITRES_INFO, NOMS_GENIE_LOGICIEL),
          lecons: filtrerParCles(POOL_LECONS_INFO, NOMS_GENIE_LOGICIEL)
        },
        "Réseaux et Systèmes": {
          matieres: filtrerMatieres(POOL_MATIERES_INFO, NOMS_RESEAUX),
          chapitres: filtrerParCles(POOL_CHAPITRES_INFO, NOMS_RESEAUX),
          lecons: filtrerParCles(POOL_LECONS_INFO, NOMS_RESEAUX)
        }
      }
    }
  },
  "Gestion": {
    "L1": { matieres: MATIERES_GESTION, chapitres: CHAPITRES_GESTION, lecons: LECONS_GESTION },
    "L2": { matieres: MATIERES_GESTION, chapitres: CHAPITRES_GESTION, lecons: LECONS_GESTION },
    "L3": {
      specialites: {
        "Finance": { matieres: MATIERES_FINANCE, chapitres: CHAPITRES_FINANCE, lecons: LECONS_FINANCE },
        "Management Général": {
          matieres: filtrerMatieres(MATIERES_GESTION, NOMS_MANAGEMENT_GENERAL),
          chapitres: filtrerParCles(CHAPITRES_GESTION, NOMS_MANAGEMENT_GENERAL),
          lecons: filtrerParCles(LECONS_GESTION, NOMS_MANAGEMENT_GENERAL)
        }
      }
    }
  },
  "Transport et Logistique": {
    "L1": { matieres: MATIERES_TRANSPORT, chapitres: CHAPITRES_TRANSPORT, lecons: LECONS_TRANSPORT },
    "L2": { matieres: MATIERES_TRANSPORT, chapitres: CHAPITRES_TRANSPORT, lecons: LECONS_TRANSPORT },
    "L3": { matieres: MATIERES_TRANSPORT, chapitres: CHAPITRES_TRANSPORT, lecons: LECONS_TRANSPORT }
  },
  "Ressources Humaines": {
    "L1": { matieres: MATIERES_RH, chapitres: CHAPITRES_RH, lecons: LECONS_RH },
    "L2": { matieres: MATIERES_RH, chapitres: CHAPITRES_RH, lecons: LECONS_RH },
    "L3": { matieres: MATIERES_RH, chapitres: CHAPITRES_RH, lecons: LECONS_RH }
  }
};

function obtenirContenuPedagogique(filiere, niveau, specialite) {
  const filiereData = FILIERES[filiere];
  if (!filiereData) return FILIERES["Informatique"]["L1"];

  const niveauData = filiereData[niveau];
  if (!niveauData) return filiereData["L1"];

  if (niveauData.specialites) {
    return niveauData.specialites[specialite] || Object.values(niveauData.specialites)[0];
  }

  return niveauData;
}

let contenuActuel = obtenirContenuPedagogique("Informatique", "L1");
let MATIERES = contenuActuel.matieres;
let CHAPITRES = contenuActuel.chapitres;
let LECONS = contenuActuel.lecons;

const CITATIONS = [
  "Un jour, tout ce travail fera sens. 💜",
  "Chaque session compte, même les courtes.",
  "La régularité bat l'intensité.",
  "Ton futur toi te remerciera.",
  "Petit à petit, l'oiseau fait son nid."
];

const CONSEILS = [
  "🔔 Essaie une session de 25 minutes suivie d'une pause de 5.",
  "🔔 Réviser un peu chaque jour vaut mieux qu'une grosse session isolée.",
  "🔔 Change de chapitre si tu sens ta concentration baisser."
];

function formaterDateISO(date) {
  return date.toISOString().slice(0, 10);
}

const SESSIONS_INITIALES = [
  { id: 1, matiere: "Algorithme", chapitre: "Boucles", duree: 25, date: formaterDateISO(new Date(Date.now() - 2 * 86400000)) },
  { id: 2, matiere: "Anglais", chapitre: "Vocabulaire", duree: 30, date: formaterDateISO(new Date(Date.now() - 1 * 86400000)) },
  { id: 3, matiere: "JavaScript", chapitre: "Le DOM", duree: 25, date: formaterDateISO(new Date()) }
];

let sessions = [...SESSIONS_INITIALES];
let prochainIdSession = sessions.length + 1;
let objectifMensuelHeures = 75;

const selectMatiere = document.getElementById('select-matiere');
const selectChapitre = document.getElementById('select-chapitre');
const inputDuree = document.getElementById('input-duree');
const affichageTemps = document.getElementById('affichage-temps');
const minuteurStatut = document.getElementById('minuteur-statut');
const boutonDemarrer = document.getElementById('bouton-demarrer');
const boutonPause = document.getElementById('bouton-pause');
const boutonReinitialiser = document.getElementById('bouton-reinitialiser');

const listeSessions = document.getElementById('liste-sessions');
const listeDernieresSessions = document.getElementById('liste-dernieres-sessions');
const tempsTotal = document.getElementById('temps-total');
const nombreSessions = document.getElementById('nombre-sessions');

const anneauObjectif = document.getElementById('anneau-objectif');
const pourcentageObjectif = document.getElementById('pourcentage-objectif');
const detailObjectif = document.getElementById('detail-objectif');

const anneauObjectifDetail = document.getElementById('anneau-objectif-detail');
const pourcentageObjectifDetail = document.getElementById('pourcentage-objectif-detail');
const detailObjectifComplet = document.getElementById('detail-objectif-complet');
const inputObjectif = document.getElementById('input-objectif');
const boutonEnregistrerObjectif = document.getElementById('bouton-enregistrer-objectif');

const nombreSerie = document.getElementById('nombre-serie');
const messageSerie = document.getElementById('message-serie');

const grilleRessources = document.getElementById('grille-ressources');
const citationDuJour = document.getElementById('citation-du-jour');

const avatarUtilisateur = document.getElementById('avatar-utilisateur');
const texteBonjour = document.getElementById('texte-bonjour');
const texteProfilSous = document.getElementById('texte-profil-sous');
const formulaireProfil = document.getElementById('formulaire-profil');
const selectFiliereProfil = document.getElementById('select-filiere');
const selectNiveauProfil = document.getElementById('select-niveau');
const champSpecialite = document.getElementById('champ-specialite');
const selectSpecialiteProfil = document.getElementById('select-specialite');
const bandeauBienvenue = document.getElementById('bandeau-bienvenue');
const bienvenuePrenom = document.getElementById('bienvenue-prenom');

const boutonNotifications = document.getElementById('bouton-notifications');
const panneauNotifications = document.getElementById('panneau-notifications');

const boutonModeSombre = document.getElementById('bouton-mode-sombre');
const boutonModeSombreParametres = document.getElementById('bouton-mode-sombre-parametres');
const boutonReinitialiserDonnees = document.getElementById('bouton-reinitialiser-donnees');

const boutonsNavigation = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

let secondesRestantes = 0;
let minuteurEnCours = null;
let matiereSelectionnee = '';
let chapitreSelectionne = '';

function trouverCouleurMatiere(nomMatiere) {
  const matiere = MATIERES.find(m => m.nom === nomMatiere);
  return matiere ? matiere.couleur : '#94a3b8';
}

function afficherPage(nomPage) {
  pages.forEach(page => {
    page.hidden = page.id !== 'page-' + nomPage;
  });

  boutonsNavigation.forEach(bouton => {
    bouton.classList.toggle('actif', bouton.getAttribute('data-page') === nomPage);
  });
}

boutonsNavigation.forEach(bouton => {
  bouton.addEventListener('click', () => {
    afficherPage(bouton.getAttribute('data-page'));
  });
});

function remplirSelectMatieres() {
  for (const matiere of MATIERES) {
    const option = document.createElement('option');
    option.value = matiere.nom;
    option.textContent = matiere.nom;
    selectMatiere.appendChild(option);
  }
}

function remplirSelectChapitres() {
  selectChapitre.innerHTML = '';

  const matiereChoisie = selectMatiere.value;
  const chapitresDisponibles = CHAPITRES[matiereChoisie] || [];

  for (const chapitre of chapitresDisponibles) {
    const option = document.createElement('option');
    option.value = chapitre;
    option.textContent = chapitre;
    selectChapitre.appendChild(option);
  }
}

selectMatiere.addEventListener('change', remplirSelectChapitres);

function afficherTempsRestant() {
  const minutes = Math.floor(secondesRestantes / 60);
  const secondes = secondesRestantes % 60;
  affichageTemps.textContent = String(minutes).padStart(2, '0') + ':' + String(secondes).padStart(2, '0');
}

function demarrerMinuteur() {
  if (minuteurEnCours !== null) {
    return;
  }

  if (secondesRestantes === 0) {
    const dureeMinutes = Number(inputDuree.value) || 25;
    secondesRestantes = dureeMinutes * 60;
    matiereSelectionnee = selectMatiere.value;
    chapitreSelectionne = selectChapitre.value;
  }

  minuteurStatut.textContent = 'Concentration en cours...';

  minuteurEnCours = setInterval(function () {
    secondesRestantes = secondesRestantes - 1;
    afficherTempsRestant();

    if (secondesRestantes <= 0) {
      terminerSession();
    }
  }, 1000);
}

function mettreEnPause() {
  clearInterval(minuteurEnCours);
  minuteurEnCours = null;
  minuteurStatut.textContent = 'En pause';
}

function reinitialiserMinuteur() {
  clearInterval(minuteurEnCours);
  minuteurEnCours = null;
  secondesRestantes = 0;
  affichageTemps.textContent = '00:00';
  minuteurStatut.textContent = "Prêt(e) ?";
}

function terminerSession() {
  clearInterval(minuteurEnCours);
  minuteurEnCours = null;

  const dureeMinutes = Number(inputDuree.value) || 25;

  const nouvelleSession = {
    id: prochainIdSession,
    matiere: matiereSelectionnee,
    chapitre: chapitreSelectionne,
    duree: dureeMinutes,
    date: formaterDateISO(new Date())
  };

  sessions.push(nouvelleSession);
  prochainIdSession++;

  secondesRestantes = 0;
  afficherTempsRestant();
  minuteurStatut.textContent = "Prêt(e) ?";

  rafraichirAffichage();

  alert('Session terminée : ' + dureeMinutes + ' min de ' + matiereSelectionnee + ' (' + chapitreSelectionne + ') !');
}

boutonDemarrer.addEventListener('click', demarrerMinuteur);
boutonPause.addEventListener('click', mettreEnPause);
boutonReinitialiser.addEventListener('click', reinitialiserMinuteur);

function creerLigneSession(session) {
  const item = document.createElement('li');

  const pastille = '<span class="session-pastille" style="background:' + trouverCouleurMatiere(session.matiere) + '"></span>';
  const texte = session.matiere + ' — ' + session.chapitre + ' (' + session.duree + ' min, ' + session.date + ')';
  item.innerHTML = pastille + texte;

  const boutonSupprimer = document.createElement('button');
  boutonSupprimer.textContent = 'Supprimer';
  boutonSupprimer.className = 'session-bouton-supprimer';
  boutonSupprimer.setAttribute('data-id', session.id);
  item.appendChild(boutonSupprimer);

  return item;
}

function afficherHistoriqueComplet() {
  listeSessions.innerHTML = '';

  if (sessions.length === 0) {
    const messageVide = document.createElement('li');
    messageVide.className = 'message-vide';
    messageVide.textContent = 'Aucune session enregistrée pour le moment.';
    listeSessions.appendChild(messageVide);
    return;
  }

  const sessionsTriees = [...sessions].reverse();
  for (const session of sessionsTriees) {
    listeSessions.appendChild(creerLigneSession(session));
  }
}

function afficherDernieresSessions() {
  listeDernieresSessions.innerHTML = '';

  const troisDernieres = [...sessions].reverse().slice(0, 3);

  if (troisDernieres.length === 0) {
    const item = document.createElement('li');
    item.textContent = 'Rien pour le moment.';
    listeDernieresSessions.appendChild(item);
    return;
  }

  for (const session of troisDernieres) {
    const item = document.createElement('li');
    item.innerHTML = '<strong>' + session.matiere + '</strong><br>' +
      '<span class="detail-mini">' + session.chapitre + ' · ' + session.duree + ' min</span>';
    listeDernieresSessions.appendChild(item);
  }
}

listeSessions.addEventListener('click', function (event) {
  if (event.target.classList.contains('session-bouton-supprimer')) {
    const id = Number(event.target.getAttribute('data-id'));
    sessions = sessions.filter(s => s.id !== id);
    rafraichirAffichage();
  }
});

function afficherStatsGlobales() {
  let total = 0;
  for (const session of sessions) {
    total = total + session.duree;
  }
  tempsTotal.textContent = total;
  nombreSessions.textContent = sessions.length;
}

function calculerMinutesDuMois() {
  const maintenant = new Date();
  const anneeMoisCourant = formaterDateISO(maintenant).slice(0, 7); // "AAAA-MM"

  let total = 0;
  for (const session of sessions) {
    if (session.date.slice(0, 7) === anneeMoisCourant) {
      total = total + session.duree;
    }
  }
  return total;
}

function afficherObjectif() {
  const minutesDuMois = calculerMinutesDuMois();
  const heuresDuMois = Math.round((minutesDuMois / 60) * 10) / 10;

  let pourcentage = Math.round((heuresDuMois / objectifMensuelHeures) * 100);
  if (pourcentage > 100) {
    pourcentage = 100;
  }

  anneauObjectif.style.setProperty('--pct', pourcentage);
  pourcentageObjectif.textContent = pourcentage + '%';
  detailObjectif.textContent = heuresDuMois + ' / ' + objectifMensuelHeures + ' heures';

  anneauObjectifDetail.style.setProperty('--pct', pourcentage);
  pourcentageObjectifDetail.textContent = pourcentage + '%';
  detailObjectifComplet.textContent = heuresDuMois + ' heure(s) sur ' + objectifMensuelHeures + ' ce mois-ci';
}

boutonEnregistrerObjectif.addEventListener('click', function () {
  const nouvelObjectif = Number(inputObjectif.value);

  if (nouvelObjectif > 0) {
    objectifMensuelHeures = nouvelObjectif;
    afficherObjectif();
  } else {
    alert("L'objectif doit être un nombre positif.");
  }
});

function calculerSerie() {
  const datesAvecSession = new Set(sessions.map(s => s.date));

  let serie = 0;
  let curseur = new Date();

  while (datesAvecSession.has(formaterDateISO(curseur))) {
    serie++;
    curseur.setDate(curseur.getDate() - 1);
  }

  return serie;
}

function afficherSerie() {
  const serie = calculerSerie();
  nombreSerie.textContent = serie;

  if (serie === 0) {
    messageSerie.textContent = 'Lance ta première session !';
  } else if (serie === 1) {
    messageSerie.textContent = 'Bien commencé, continue demain !';
  } else {
    messageSerie.textContent = 'Tu es sur la bonne voie ! 💜';
  }
}

function afficherRessources() {
  grilleRessources.innerHTML = '';

  for (const matiere of MATIERES) {
    const carte = document.createElement('div');
    carte.className = 'carte carte-ressource';

    const titre = document.createElement('h3');
    titre.style.color = matiere.couleur;
    titre.textContent = matiere.nom;
    carte.appendChild(titre);

    const chapitres = CHAPITRES[matiere.nom] || [];

    for (const chapitre of chapitres) {
      const blocChapitre = document.createElement('div');
      blocChapitre.className = 'bloc-chapitre';

      const boutonChapitre = document.createElement('button');
      boutonChapitre.className = 'bouton-chapitre';
      boutonChapitre.textContent = '📖 ' + chapitre;
      blocChapitre.appendChild(boutonChapitre);

      const texteLecon = document.createElement('p');
      texteLecon.className = 'texte-lecon';
      texteLecon.textContent = (LECONS[matiere.nom] && LECONS[matiere.nom][chapitre])
        ? LECONS[matiere.nom][chapitre]
        : "Leçon à venir pour ce chapitre.";
      texteLecon.hidden = true;
      blocChapitre.appendChild(texteLecon);

      boutonChapitre.addEventListener('click', function () {
        texteLecon.hidden = !texteLecon.hidden;
        boutonChapitre.classList.toggle('ouvert', !texteLecon.hidden);
      });

      carte.appendChild(blocChapitre);
    }

    grilleRessources.appendChild(carte);
  }
}

function genererAvatar(genre, teint, prenom, nom) {
  const couleursFond = { clair: '#f0c39a', marron: '#a86b3c', noir: '#5b3a29' };
  const couleurFond = couleursFond[teint] || couleursFond.clair;
  const couleurTexte = teint === 'clair' ? '#4a2f18' : '#fff8f0';

  const initiales = (prenom.charAt(0) + nom.charAt(0)).toUpperCase();

  let decoration;
  if (genre === 'femme') {
    decoration =
      '<g>' +
      '<circle cx="38" cy="10" r="3.2" fill="#f47c9c"/>' +
      '<circle cx="34.5" cy="8" r="3.2" fill="#f7a8c4"/>' +
      '<circle cx="41.5" cy="8" r="3.2" fill="#f7a8c4"/>' +
      '<circle cx="38" cy="6.5" r="3.2" fill="#fbcbdd"/>' +
      '<circle cx="38" cy="9" r="2" fill="#fff0f4"/>' +
      '</g>';
  } else {
    decoration =
      '<path d="M39 4 l1.6 3.6 l3.8 0.4 l-2.9 2.6 l0.8 3.8 l-3.3 -2 l-3.3 2 l0.8 -3.8 ' +
      'l-2.9 -2.6 l3.8 -0.4 Z" fill="#6c63f2"/>';
  }

  return (
    '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="24" cy="24" r="24" fill="' + couleurFond + '"/>' +
    '<text x="24" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="700" ' +
    'text-anchor="middle" fill="' + couleurTexte + '">' + initiales + '</text>' +
    decoration +
    '</svg>'
  );
}

function mettreAJourSpecialite() {
  const filiere = selectFiliereProfil.value;
  const niveau = selectNiveauProfil.value;
  const niveauData = FILIERES[filiere] && FILIERES[filiere][niveau];

  if (niveauData && niveauData.specialites) {
    champSpecialite.hidden = false;
    selectSpecialiteProfil.innerHTML = '';
    for (const nomSpecialite of Object.keys(niveauData.specialites)) {
      const option = document.createElement('option');
      option.value = nomSpecialite;
      option.textContent = nomSpecialite;
      selectSpecialiteProfil.appendChild(option);
    }
  } else {
    champSpecialite.hidden = true;
  }
}

selectFiliereProfil.addEventListener('change', mettreAJourSpecialite);
selectNiveauProfil.addEventListener('change', mettreAJourSpecialite);

formulaireProfil.addEventListener('submit', function (event) {
  event.preventDefault();

  const prenom = document.getElementById('input-prenom').value.trim();
  const nom = document.getElementById('input-nom').value.trim();
  const ecole = document.getElementById('input-ecole').value.trim() || 'Non précisée';
  const email = document.getElementById('input-email').value.trim();
  const genre = document.getElementById('select-genre').value;
  const teint = document.getElementById('select-teint').value;
  const filiere = selectFiliereProfil.value;
  const niveau = selectNiveauProfil.value;
  const specialite = champSpecialite.hidden ? null : selectSpecialiteProfil.value;

  if (prenom.length < 2 || nom.length < 2 || !email.includes('@')) {
    alert("Merci de remplir correctement le prénom, le nom et l'e-mail.");
    return;
  }

  contenuActuel = obtenirContenuPedagogique(filiere, niveau, specialite);
  MATIERES = contenuActuel.matieres;
  CHAPITRES = contenuActuel.chapitres;
  LECONS = contenuActuel.lecons;

  selectMatiere.innerHTML = '';
  remplirSelectMatieres();
  remplirSelectChapitres();
  afficherRessources();

  const classeAffichee = niveau + ' ' + filiere + (specialite ? ' — ' + specialite : '');

  avatarUtilisateur.innerHTML = genererAvatar(genre, teint, prenom, nom);
  texteBonjour.textContent = 'Bonjour ' + prenom + ' 💜';
  texteProfilSous.textContent = classeAffichee + ' · ' + ecole;

  bienvenuePrenom.textContent = prenom;
  bandeauBienvenue.hidden = false;
});

function afficherCitationDuJour() {
  const indexAleatoire = Math.floor(Math.random() * CITATIONS.length);
  citationDuJour.textContent = '« ' + CITATIONS[indexAleatoire] + ' »';
}

function afficherNotifications() {
  panneauNotifications.innerHTML = CONSEILS.map(c => '<p>' + c + '</p>').join('');
}

boutonNotifications.addEventListener('click', function () {
  panneauNotifications.hidden = !panneauNotifications.hidden;
});

function basculerModeSombre() {
  document.body.classList.toggle('mode-sombre');
  const actif = document.body.classList.contains('mode-sombre');

  boutonModeSombre.textContent = actif ? '☀️' : '🌙';
  boutonModeSombreParametres.textContent = actif ? '☀️ Désactiver le mode sombre' : '🌙 Activer le mode sombre';

  localStorage.setItem('studytime-mode-sombre', actif ? 'oui' : 'non');
}

function appliquerPreferenceModeSombre() {
  if (localStorage.getItem('studytime-mode-sombre') === 'oui') {
    document.body.classList.add('mode-sombre');
    boutonModeSombre.textContent = '☀️';
    boutonModeSombreParametres.textContent = '☀️ Désactiver le mode sombre';
  }
}

boutonModeSombre.addEventListener('click', basculerModeSombre);
boutonModeSombreParametres.addEventListener('click', basculerModeSombre);

boutonReinitialiserDonnees.addEventListener('click', function () {
  const confirmation = confirm('Supprimer toutes tes sessions enregistrées ? Cette action est irréversible.');
  if (confirmation) {
    sessions = [];
    rafraichirAffichage();
  }
});

function rafraichirAffichage() {
  afficherHistoriqueComplet();
  afficherDernieresSessions();
  afficherStatsGlobales();
  afficherObjectif();
  afficherSerie();
}

function initialiser() {
  appliquerPreferenceModeSombre();
  remplirSelectMatieres();
  remplirSelectChapitres();
  mettreAJourSpecialite();
  afficherTempsRestant();
  afficherCitationDuJour();
  afficherNotifications();
  afficherRessources();
  rafraichirAffichage();
}

initialiser();
