import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import Article from './src/models/Article.js';

async function testerArticle() {
    try {
// Connexion à MongoDB
await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connecté à MongoDB');

const article1 = new Article({
        titre: "Qu'est-ce que la bioinformatique ?",
        contenu: "La bioinformatique (ou bio-informatique), est un champ scientifique multidisciplinaire auquel collaborent notamment des biologistes, informaticiens, mathématiciens, physiciens, médecins, agronomes et bioinformaticiens, dans le but de résoudre un problème scientifique posé par la biologie. Plus généralement, la bio-informatique est l'application de l'informatique, des mathématiques et de la statistique à la science biologique. Le spécialiste qui travaille à mi-chemin entre ces sciences et l'informatique est appelé bioinformaticien. Le terme bio-informatique peut également décrire, par abus de langage, toutes les applications informatiques résultant de ces recherches. L'utilisation du terme bio-informatique est documentée pour la première fois en 1970 dans une publication de Paulien Hogeweg et Ben Hesper (université d'Utrecht, Pays-Bas), en référence à l'étude des processus d'information dans les systèmes biotiques. Ce domaine s'étend de l'analyse du génome à la modélisation de l'évolution d'une population animale dans un environnement donné, en passant par la modélisation moléculaire, l'analyse d'image, l'assemblage de génome et la reconstruction d'arbres phylogénétiques (phylogénie). Cette discipline constitue la « biologie in silico », par analogie avec in vitro ou in vivo. (Wikipédia)",
        auteur: 'John Doe',
        categorie: 'Général'
});

const article2 = new Article({
        titre: "Qu'est-ce que la génomique ?",
        contenu: "La génomique est une discipline de la biologie moderne. Elle étudie le fonctionnement d'un organisme, d'un organe, d'une cellule, etc. à l'échelle du génome, au lieu de se limiter à l'échelle d'un seul gène. La génomique se divise en deux branches : La génomique structurale, qui se charge du séquençage du génome entier ; La génomique fonctionnelle, qui vise à déterminer la fonction et l'expression des gènes séquencés en caractérisant le transcriptome et le protéome. La génomique est l'équivalent de la protéomique pour le protéome (ensemble des protéine d'une cellule) ou de la métabolomique pour les métabolites, par exemple.",
        auteur: 'John Doe',
        categorie: 'Génomique'
});

const article3 = new Article({
        titre: "Qu'est-ce que la transcriptomique ?",
        contenu: `La transcriptomique est l'étude de l'ensemble des ARN produits lors du processus de transcription d'un génome, c'est-à-dire lors de la production passage de la molécule d'ADN à celle d'ARN. Les ARN peuvent être codant ou non codant. Un transcriptome capture un instantané dans le temps de l'ensemble des transcrits présents dans une cellule. La transcriptomique permet de savoir quels processus cellulaires sont potentiellement actifs et lesquels sont dormants. En particulier, la transcriptomique permet de savoir quels gènes sont exprimés et lesquels ne le sont pas.
        Les premières tentatives d'étude des transcriptomes entiers ont commencé au début des années 1990. Les avancées technologiques qui ont suivi depuis la fin des années 1990 ont transformé le domaine à plusieurs reprises et ont fait de la transcriptomique une discipline très répandue dans les sciences biologiques. Il existe deux techniques contemporaines clés dans ce domaine : les puces à ADN, qui quantifient un ensemble de séquences prédéterminées, et le séquençage de l'ARN, qui utilise le séquençage à haut débit pour enregistrer tous les transcrits. Au fur et à mesure que la technologie s'est améliorée, le volume de données produites par chaque expérience sur le transcriptome a augmenté. En conséquence, les méthodes d'analyse des données ont été régulièrement adaptées pour analyser de manière plus précise et plus efficace des volumes de données de plus en plus importants. Les bases de données transcriptomiques se sont donc enrichies et sont devenues de plus en plus utiles au fur et à mesure que les chercheurs continuaient à collecter et à partager des transcriptomes. Il serait presque impossible d'interpréter les informations contenues dans un transcriptome sans la connaissance des expériences précédentes.
        La mesure de l'expression des gènes d'un organisme dans différents tissus ou conditions, ou à différents moments, fournit des informations sur la manière dont les gènes sont régulés et révèle des détails de la biologie d'un organisme. Elle peut également être utilisée pour déduire les fonctions de gènes qui n'avaient pas été annotés (en) auparavant. L'analyse du transcriptome a permis d'étudier la façon dont l'expression des gènes change dans différents organismes et a joué un rôle déterminant dans la compréhension des maladies humaines. L'analyse de l'expression des gènes dans son intégralité permet de détecter des tendances générales coordonnées qui ne peuvent être discernées par des tests plus ciblés.`,
        auteur: 'John Doe',
        categorie: 'Transcriptomique'
});

const article4 = new Article({
        titre: "Qu'est-ce que la protéomique ?",
        contenu: `La protéomique désigne la science qui étudie les protéomes, c'est-à-dire l'ensemble des protéines d'une cellule, d'un organite, d'un tissu, d'un organe ou d'un organisme à un moment donné et sous des conditions données.
        Dans la pratique, la protéomique s'attache à identifier de manière globale les protéines extraites d'une culture cellulaire, d'un tissu ou d'un fluide biologique, leur localisation dans les compartiments cellulaires, leurs éventuelles modifications post-traductionnelles ainsi que leur quantité.
        Elle permet de quantifier les variations de leur taux d'expression en fonction du temps, de leur environnement, de leur état de développement, de leur état physiologique et pathologique, de l'espèce d'origine. Elle étudie aussi les interactions que les protéines ont avec d'autres protéines, avec l'ADN ou l'ARN, ou d'autres substances.
        La protéomique fonctionnelle étudie les fonctions de chaque protéine.
        La protéomique étudie enfin la structure primaire, secondaire et tertiaire des protéines.`,
        auteur: 'John Doe',
        categorie: 'Protéomique'
});

const article5 = new Article({
        titre: "Ingénieur biologiste",
        contenu: `Missions principales

        Conception et réalisation de protocoles expérimentaux

        Proposer et formuler de nouvelles hypothèses de recherche, à confirmer ou infirmer par l’expérimentation, pour tenter de comprendre et expliquer un phénomène observé.
        Élaborer et rédiger les protocoles méthodologiques en définissant les techniques biologiques à mettre en œuvre : techniques électrophorétiques, techniques de dosages (dosages biologiques, immunologiques), techniques histologiques, génotypage, clonage, séquençage, PCR, cytométrie en flux, etc.
        Déterminer les ressources humaines, financières et matérielles nécessaires pour mener à bien le projet de recherche scientifique.
        Réaliser les expériences, évaluer les techniques et technologies mises en œuvre et les réajuster si besoin en proposant des analyses complémentaires jusqu’à l’obtention de données cohérentes reflétant la réalité observée.
        Traiter les données issues des expérimentations, analyser, interpréter puis établir des conclusions et développer de nouveaux savoirs.

        Communication, diffusion et valorisation des résultats

        Rédiger et publier des rapports techniques, articles et notes de synthèse sur les travaux menés et les résultats des recherches.
        Participer à des colloques aux niveaux national et international pour partager, échanger et valoriser les résultats de ses recherches auprès de chercheurs du monde entier, dans le but de faire progresser la recherche en biologie.

        Gestion de projet et coordination des équipes

        Piloter et suivre l’avancement du projet, s’assurer de sa bonne conduite, garantir la traçabilité des expériences menées et veiller au respect des contraintes en termes de budget et de délais.
        Coordonner et animer les équipes durant les activités techniques et administratives.
        Accompagner les chercheurs doctorants tout au long du projet en les conseillant sur les techniques à mettre en œuvre : évaluer les différentes possibilités d’expérimentation et valider les choix techniques à opérer.
        Faire respecter les procédures d’hygiène, de sécurité et d’environnement et s’assurer des opérations de désinfection et de stérilisation des surfaces du laboratoire.

        Veille technologique

        Assurer une veille scientifique, technique et réglementaire dans son domaine d’activité.
        Rechercher des publications scientifiques et réaliser des synthèses bibliographiques pour répondre aux problématiques rencontrées et étoffer ses connaissances.
        `,
        auteur: 'John Doe',
        categorie: 'Métier'
});

const article6 = new Article({
        titre: "Le métier de Généticien",
        contenu: `
        Analyser les gènes

        Le généticien est un chercheur qui étudie et analyse les caractères héréditaires des êtres vivants (micro-organismes, animaux, végétaux, êtres humains) à travers leur génome (ensemble du matériel génétique d'un être vivant) qui est codé dans leur ADN (acide désoxyribonucléique), une très longue molécule constituée de 4 éléments de base nommés A, T, C et G.
        Expérimenter

        Ce scientifique réalise des expérimentations pour repérer les points communs et les différences pouvant exister entre espèces (animales ou végétales), afin les améliorer. Par exemple, il peut modifier les gènes de certaines plantes pour les rendre plus résistantes (les rendant transgéniques). Il peut aussi agir sur les gènes des animaux : par exemple, pour augmenter la production de lait des vaches. Ses recherches trouvent des applications dans de nombreux domaines. Par exemple, dans l'identification de criminels, via leurs empreintes génétiques.
        Faire avancer la science

        Le généticien dispose d'un immense terrain de recherche pour combattre les maladies héréditaires graves, entre autres. En effet, l'identification des gènes qui leur sont associés rend possible la mise au point de tests de dépistage. Le généticien participe ainsi aux progrès de la médecine. C'est aussi grâce à ses recherches que la PMA (procréation médicalement assistée) est devenue possible.`,
        auteur: 'John Doe',
        categorie: 'Métier'
});

const article7 = new Article({
        titre: "Le métier de Radiopharmacien",
        contenu: `
        Quelles sont les missions d’un Radiopharmacien ?

        Gérer la préparation, la dispensation, le contrôle et l’approvisionnement des médicaments radioactifs nommés radiopharmaceutiques (MRP) à visées diagnostic et thérapeutique en Scintigraphie et en Tomographie par Emission de Positons (TEP), avec et grâce à la compétence des manipulateurs en électroradiologie (MERM).
        Maintenir et développer l’assurance qualité dans le service en élaborant des protocoles et en veillant à leur respect.
        Former le personnel paramédical (MERM et préparateurs en pharmacie) aux préparations des MRP conformément aux Bonnes Pratiques de Préparation de 2007 afin de garantir la qualité de la préparation.
        Assurer la continuité de formation du personnel par des habilitations annuelles et par des tests de remplissage aseptique pour garantir une manipulation aseptique.
        Encadrer les techniques de marquages cellulaires (polynucléaires marqués, volémies, durée de vie des plaquettes à l’indium-111 etc.).
        Déployer de nouvelles activités, la plus récente : mise en place d’un nouveau marquage avec un nouveau traceur : le Dotatoc-Gallium-68, rendant ce service incontournable au niveau régional dans le diagnostic de tumeurs neuroendocrines, principalement.  

        Ce nouvel examen améliore la qualité d’examen du patient (facilité d’interprétation des images) ainsi que sa prise en charge (moins d’irradiation).

        

        Le métier de Radiopharmacien, au-delà de la technique, est très intéressant de par sa collaboration pluridisciplinaire avec les différents acteurs du service de médecine nucléaire.`,
        auteur: 'John Doe',
        categorie: 'Métier'
});

const article8 = new Article({
        titre: "Le métier de Radiopharmacien",
        contenu: `
        Quelles sont les missions d’un Radiopharmacien ?

        Gérer la préparation, la dispensation, le contrôle et l’approvisionnement des médicaments radioactifs nommés radiopharmaceutiques (MRP) à visées diagnostic et thérapeutique en Scintigraphie et en Tomographie par Emission de Positons (TEP), avec et grâce à la compétence des manipulateurs en électroradiologie (MERM).
        Maintenir et développer l’assurance qualité dans le service en élaborant des protocoles et en veillant à leur respect.
        Former le personnel paramédical (MERM et préparateurs en pharmacie) aux préparations des MRP conformément aux Bonnes Pratiques de Préparation de 2007 afin de garantir la qualité de la préparation.
        Assurer la continuité de formation du personnel par des habilitations annuelles et par des tests de remplissage aseptique pour garantir une manipulation aseptique.
        Encadrer les techniques de marquages cellulaires (polynucléaires marqués, volémies, durée de vie des plaquettes à l’indium-111 etc.).
        Déployer de nouvelles activités, la plus récente : mise en place d’un nouveau marquage avec un nouveau traceur : le Dotatoc-Gallium-68, rendant ce service incontournable au niveau régional dans le diagnostic de tumeurs neuroendocrines, principalement.  

        Ce nouvel examen améliore la qualité d’examen du patient (facilité d’interprétation des images) ainsi que sa prise en charge (moins d’irradiation).

        

        Le métier de Radiopharmacien, au-delà de la technique, est très intéressant de par sa collaboration pluridisciplinaire avec les différents acteurs du service de médecine nucléaire.`,
        auteur: 'John Doe',
        categorie: 'Métier'
});


const article9 = new Article({
        titre: "Le métier de Radiopharmacien",
        contenu: `
        Descriptif

        L'ingénieur en imagerie médicale développe des logiciels permettant aux appareils d'imagerie (scanners, échographes, Doppler, IRM, etc.), d'apporter une aide essentielle au diagnostic médical. Grâce à lui, les médecins utilisant l'outil informatique peuvent visualiser les organes, les os, les flux sanguins... sur des images reconstruites en 3D. Il travaille dans la recherche publique ou dans l'industrie, en ESN (entreprise de services du numérique) ou chez un fabricant d'appareils.
        Activités
        Concevoir et développer des logiciels

        Il développe des logiciels pour permettre aux appareils d'imagerie de traiter des informations de manière intelligente. Il crée des algorithmes de reconnaissance des formes, de reconstruction, de rendu, afin de permettre aux médecins qui les utilisent de visualiser les organes, les os, les flux sanguins...
        À partir de l'expérience

        Pour concevoir un appareil de détection des veines, sur des images de la rétine par exemple, sa méthode est très expérimentale. Après avoir acquis avec un médecin spécialiste une expertise dans la détection visuelle de ces structures, il combine les différentes méthodes d'échantillonnage et de seuillage par ordinateur, afin d'obtenir sur un ensemble d'images des résultats probants.
        Reconstruire en 3D

        La plupart des techniques d'imagerie recueillent des images en 2D correspondant à des coupes qui intéressent le médecin. Se représenter un organe dans sa globalité à partir de ces coupes n'est pas aisé. Grâce aux techniques de modélisation, il lui est possible de reconstruire des modèles en 3D.
        Compétences
        Avoir une double compétence

        Le métier exige des compétences techniques en biologie humaine, anatomie et physiologie afin de mieux prendre en compte les spécificités du domaine médical. Et, évidemment en informatique et traitement de l'image, imagerie cellulaire, imagerie biomédicale...
        Être à l'écoute des médecins

        Dialoguer avec des spécialistes du secteur médical fait partie du métier. Des qualités d'écoute et de dialogue sont donc essentielles, de même que de bonnes aptitudes pédagogiques, pour faire comprendre des domaines techniques complexes à des non-initiés. Dans une démarche commerciale, il lui faut savoir se positionner dans le secteur hospitalier.
        Savoir gérer un projet

        Maîtriser les différentes techniques de l'imagerie (du traitement à la visualisation) suppose une mise à jour constante, dans un domaine technique qui évolue vite. Il est aussi essentiel de savoir répondre à un cahier des charges, de maîtriser la gestion de projet et l'anglais technique.
        Vie professionnelle
        Dans la recherche

        L'ingénieur en imagerie médicale peut exercer dans les établissements de santé (hôpitaux et cliniques), les laboratoires universitaires ou les grands organismes de recherche (Inserm-Institut national de la santé et de la recherche médicale, CEA-Commissariat à l'énergie atomique et aux énergies alternatives...) et de la santé. Il peut aussi travailler en tant qu'enseignant-chercheur à l'université ou en école d'ingénieurs.
        Dans l'industrie

        Dans le secteur privé, il peut travailler chez les grands éditeurs de solutions d'imagerie médicale comme General Electrics, Phillips... Il peut aussi intégrer une PME (petite et moyenne entreprise) spécialisée en imagerie ou une ESN (entreprise de services du numérique). Il exerce dans les bureaux d'études ou de R & D (recherche et développement), dans les départements marketing et commercial, parfois dans les services de maintenance.
        Accès au métier

        Le niveau de formation se situe à bac + 5 dans le domaine de la biologie humaine, doublé d'une formation solide en informatique et en électronique appliquée à l'image.`,
        auteur: 'John Doe',
        categorie: 'Métier'
});

const article10 = new Article({
        titre: "Le métier d'ingénieur en imagerie médicale",
        contenu:
        `Descriptif

        L'ingénieur en imagerie médicale développe des logiciels permettant aux appareils d'imagerie (scanners, échographes, Doppler, IRM, etc.), d'apporter une aide essentielle au diagnostic médical. Grâce à lui, les médecins utilisant l'outil informatique peuvent visualiser les organes, les os, les flux sanguins... sur des images reconstruites en 3D. Il travaille dans la recherche publique ou dans l'industrie, en ESN (entreprise de services du numérique) ou chez un fabricant d'appareils.
        Activités
        Concevoir et développer des logiciels

        Il développe des logiciels pour permettre aux appareils d'imagerie de traiter des informations de manière intelligente. Il crée des algorithmes de reconnaissance des formes, de reconstruction, de rendu, afin de permettre aux médecins qui les utilisent de visualiser les organes, les os, les flux sanguins...
        À partir de l'expérience

        Pour concevoir un appareil de détection des veines, sur des images de la rétine par exemple, sa méthode est très expérimentale. Après avoir acquis avec un médecin spécialiste une expertise dans la détection visuelle de ces structures, il combine les différentes méthodes d'échantillonnage et de seuillage par ordinateur, afin d'obtenir sur un ensemble d'images des résultats probants.
        Reconstruire en 3D

        La plupart des techniques d'imagerie recueillent des images en 2D correspondant à des coupes qui intéressent le médecin. Se représenter un organe dans sa globalité à partir de ces coupes n'est pas aisé. Grâce aux techniques de modélisation, il lui est possible de reconstruire des modèles en 3D.
        Compétences
        Avoir une double compétence

        Le métier exige des compétences techniques en biologie humaine, anatomie et physiologie afin de mieux prendre en compte les spécificités du domaine médical. Et, évidemment en informatique et traitement de l'image, imagerie cellulaire, imagerie biomédicale...
        Être à l'écoute des médecins

        Dialoguer avec des spécialistes du secteur médical fait partie du métier. Des qualités d'écoute et de dialogue sont donc essentielles, de même que de bonnes aptitudes pédagogiques, pour faire comprendre des domaines techniques complexes à des non-initiés. Dans une démarche commerciale, il lui faut savoir se positionner dans le secteur hospitalier.
        Savoir gérer un projet

        Maîtriser les différentes techniques de l'imagerie (du traitement à la visualisation) suppose une mise à jour constante, dans un domaine technique qui évolue vite. Il est aussi essentiel de savoir répondre à un cahier des charges, de maîtriser la gestion de projet et l'anglais technique.
        Vie professionnelle
        Dans la recherche

        L'ingénieur en imagerie médicale peut exercer dans les établissements de santé (hôpitaux et cliniques), les laboratoires universitaires ou les grands organismes de recherche (Inserm-Institut national de la santé et de la recherche médicale, CEA-Commissariat à l'énergie atomique et aux énergies alternatives...) et de la santé. Il peut aussi travailler en tant qu'enseignant-chercheur à l'université ou en école d'ingénieurs.
        Dans l'industrie

        Dans le secteur privé, il peut travailler chez les grands éditeurs de solutions d'imagerie médicale comme General Electrics, Phillips... Il peut aussi intégrer une PME (petite et moyenne entreprise) spécialisée en imagerie ou une ESN (entreprise de services du numérique). Il exerce dans les bureaux d'études ou de R & D (recherche et développement), dans les départements marketing et commercial, parfois dans les services de maintenance.
        Accès au métier

        Le niveau de formation se situe à bac + 5 dans le domaine de la biologie humaine, doublé d'une formation solide en informatique et en électronique appliquée à l'image.`,
        auteur: 'John Doe',
        categorie: 'Métier'
});

const article11 = new Article({
        titre: "Le métier de Technicien biologiste",
        contenu:
        `
        Le technicien ou la technicienne biologiste réalise, à partir de protocoles préalablement définis, des analyses qui utilisent un ensemble de techniques propre à un domaine (cultures, dosages biologiques, techniques histologiques, immunologiques, biochimiques, biologie moléculaire).

        Il ou elle contrôle, dans un premier temps, la qualité des matières premières à analyser, met les échantillons en culture et procède aux analyses conformément aux protocoles définis.

        Puis il ou elle rassemble les résultats, les met en forme, rédige les comptes-rendus puis les saisit au sein d'un LIMS (laboratory information management system), système de gestion de l'information spécifique de laboratoire.

        Le technicien biologiste est également chargé de la maintenance de 1er niveau et de l'étalonnage des appareils de mesure.

        Il applique, en situation de travail, des règles d’hygiène et de sécurité spécifiques à la manipulation de certains produits.

        Le technicien biologiste doit savoir consulter et exploiter une documentation technique, parfois complexe, et lire l’anglais technique du domaine.

        Dans un laboratoire de recherche et développement, le technicien biologiste est encadré par un ingénieur biologiste, un médecin ou un docteur en pharmacie qui ont la responsabilité des résultats.

        Par exemple, créer un nouveau médicament ou un nouveau yaourt demande de nombreuses manipulations : il faut réaliser des analyses biologiques pour s'assurer que le produit répond aux normes, contrôler l'acidité, la texture, bref, l'analyser à chaque étape de sa fabrication.

        Le technicien biologiste doit posséder une connaissance opérationnelle des technologies mises en œuvre dans l’appareillage (optique, automatisme, micro-informatique, mécanique). Il doit situer son intervention dans une procédure plus large et collaborer avec les autres intervenants. Il doit aussi connaître les risques chimiques, biologiques liés aux produits, matériels et techniques utilisés ainsi que les réglementations de sécurité adaptées aux produits à risque et les transposer aux situations de travail.
        Ou travailler ?

        Les techniciens biologistes travaillent surtout pour la biologie médicale, l’industrie agroalimentaire, pharmaceutique ou cosmétique et la recherche liée à ces domaines industriels et scientifiques. Il intervient enfin dans le contrôle qualité des eaux et la valorisation de certains déchets.
        Quel salaire ?

        Salaire brut mensuel débutant : à partir de smic
        Comment devenir Technicien / Technicienne biologiste ?

        La profession est très hétérogène et il n'est pas rare de trouver à un poste de technicien des diplômés d'origine assez diverse. Les formations les plus prisées sont les BTS et BUT.

        Exemples de formations :
        niveau bac + 2

        BTS biologie médicale
        BTSA analyses biologiques, biotechnologiques, agricoles et environnementales
        BTSA qualité, alimentation, innovation et maîtrise sanitaire
        DEUST biotechnologies
        DEUST ABM - analyses des milieux biologiques
        DEUST santé, environnement : techniques de laboratoire (Université de Lille)
        BTS bioanalyses en laboratoire de contrôle
        BTS biotechnologie en recherche et en production
        BTS métiers de la chimie
        BTS bioqualité 

        D’autres BTS peuvent également être pris en compte dans des domaines industriels comme les labos des industries alimentaires.
        niveau bac + 3

        BUT génie biologique
        BUT génie chimique - génie des procédés
        Licence professionnelle biologie analytique et expérimentale
        Différents parcours : animal, végétal, microbiologie
        Licence professionnelle chimie analytique contrôle qualité environnement
        Différents parcours : MTACB - méthodes et techniques d'analyses chimiques et biologiques (Aix Marseille Université), bioanalyse et qualité pour les laboratoires d'analyses médicales,
        Licence professionnelle bio-industries et biotechnologies
        Différents parcours : métiers de la biotechnologie, génie biologique, microscopique et qualité, culture de tissus et de cellules et biologie moléculaires, microbiologie industrielle et biotech
        Licence professionnelle métiers de la qualité
        Différents parcours : laboratoires de biologie médicale et établissements de santé
        Licence professionnelle métiers de la mer
        Différents parcours : Aquaval - valorisation des produits de la mer
        Licence professionnelle industries agroalimentaires : gestion, production et valorisation
        Différents parcours : qualité et sécurité des aliments, analyses des aliments substances naturelles (Lyon 1)
        DE de technicien de laboratoire médical (pour exercer dans le milieu médical)
        Licence sciences de la vie
        Licence sciences et technologie
        Différents parcours : biologie et biotechnologies (Cnam)
        Bachelor assistant ingénieur en biologie, biochimie, biotechnologies.

        Quelles sont les évolutions de carrières ?

        Avec plusieurs années d’expérience, le technicien biologiste peut devenir responsable d’une équipe puis (plus rarement) d’un laboratoire. Par le biais de la formation continue, il peut entreprendre une formation d’ingénieur.

        Il peut également se tourner vers des fonctions technico-commerciales.`,
        auteur: 'John Doe',
        categorie: 'Métier'
});

const article12 = new Article({
        titre: "Le métier de Data scientist en santé",
        contenu: `
        Qu'est-ce qu'un data scientist en santé ?

        Une personne envisageant des études en sciences de l'information, en informatique de la santé, en santé publique ou dans un domaine connexe peut se demander : « Qu'est-ce qu'un data scientist en santé ? » Ce professionnel collecte et analyse des données sur la santé humaine. Il utilise ces données à des fins de recherche, de planification et d'administration, et les présente à un public non spécialisé de manière à les rendre compréhensibles.

        Ressource associée :  Les 20 meilleurs diplômes en sciences des données de santé
        Qu'est-ce qu'un data scientist en santé ?

        Un spécialiste des données de santé est un professionnel qui collecte, organise et analyse des informations sur la santé humaine afin de résoudre des problèmes concrets. Par exemple, il pourrait travailler sur un projet visant à réduire de 20 % le taux d'infarctus du myocarde chez les hommes hispaniques âgés de 40 à 60 ans sur une période de 10 ans. Pour ce faire, il doit analyser les facteurs de risque au sein de cette population et évaluer l'efficacité de différentes solutions, telles que l'exercice physique, les médicaments hypolipémiants et antihypertenseurs, une alimentation saine et la réduction du stress.

        Qu'est-ce qu'un data scientist en santé ?
        Types de scientifiques des données de santé

        Il existe plusieurs types de spécialistes des données de santé. Certains sont classés comme épidémiologistes. Un épidémiologiste étudie les schémas et les causes des maladies, affections et blessures humaines. Un spécialiste des données de santé peut également être classé comme biostatisticien. Il s'agit d'une sous-spécialité des statistiques qui consiste à analyser les informations de santé. D'autres spécialistes des données de santé peuvent être classés comme chercheurs médicaux s'ils voient des patients ou recueillent personnellement des données de santé.
        Que fait un data scientist en santé ?

        Les spécialistes des données de santé consacrent une grande partie de leur temps à l'informatique pour nettoyer, organiser et analyser les données de santé. Certains conçoivent et réalisent des enquêtes pour recueillir ces données. Une fois les données préparées, ils déterminent l'outil d'analyse le plus adapté. Certains spécialistes des données de santé peuvent interroger des patients ou des participants à une étude. Ils peuvent également observer des personnes afin de collecter des données de santé. Dans certains cas, ils collaborent étroitement avec des professionnels de laboratoire. Ils peuvent analyser les données issues des analyses de sang ou de tissus prélevés chez des patients atteints de pathologies spécifiques.
        Comment devenir un scientifique des données en santé

        Pour devenir data scientist en santé, il faut au minimum un master. En épidémiologie, le Bureau des statistiques du travail indique qu'un master en santé publique est le diplôme le plus courant. Un doctorat en santé publique est également possible. Les data scientists en santé peuvent aussi être titulaires d'un master ou d'un doctorat en statistiques, en informatique de la santé ou en mathématiques. Certains possèdent un diplôme de médecine et suivent des cours complémentaires en statistiques et en méthodologie de la recherche. Nombre d'entre eux cumulent deux diplômes, voire plus, comme un diplôme de médecine et un master en santé publique.

        Les emplois de data scientists en santé connaissent une croissance supérieure à la moyenne, le Bureau des statistiques du travail (BLS) prévoyant une augmentation de 31 % pour les postes de statisticiens entre mai 2018 et mai 2028. Toute personne intéressée par les mathématiques, la santé et les sciences devrait envisager une carrière de data scientist en santé. Comprendre ce qu'est un data scientist en santé peut aider à choisir une spécialisation universitaire facilitant l'accès à cette profession.`,
        auteur: 'John Doe',
        categorie: 'Métier'
});`
`
const articles = [article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12]

// Sauvegarder, publier et incrémenter le compteur de vue des articles
await Promise.all(
        articles.map(async article => {
                await article.save();
                console.log('📝 Article créé :', article);
                console.log('📖 Résumé :', article.resume);
                //console.log('⏱️  Durée de lecture :', article.dureeIecture, 'min');
                await article.publier();
                console.log('📢 Articles publiés');
                await article.incrementerVues();
                console.log('👁️  Vues:', article.vues);
        })
);

// Trouver tous les articles publiés
const articlesPublies = await Article.findPublies();
        console.log('📚 Articles publiés:', articlesPublies.length);

// Fermer la connexion
await mongoose.connection.close();
        console.log('🔌 Connexion fermée');

    } catch (error) {
        console.error('❌ Erreur:', error.message);
        process.exit(1);
    }
}

testerArticle();
