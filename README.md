# mern-full-stak

Blog avec la stack MERN
Il s'agit d'un projet pédagogique dont le but est de maitriser la stack MERN (mongodb, express.js, react et node) tout en mettant en oeuvre un blog utilisant une api, elle même créée au cours du projet.
Ce projet est réalisé dans le cadre de la première année du Mastère Lead Developer Front End de l'ECV Paris.
Le thème du blog étant libre, j'ai choisi la biologie. Ainsi, plusieurs catégories de publications sont possible sur ce blog. Les différentes catégories sont : la génomique, la transcriptomique, la protéomique et une catégorie "général" et une catégorie "métier".

# Prérequis
Node
Docker

# Etapes d'installation
1 - Cloner le dépot github
2 - Installer les dépendances backend : en lançant la commande npm i après être allé dans le dossier backend
3 - Installer les dépendances frontend : en lançant la commande npm i après être allé dans le dossier frontend
4 - Lancer mongoDB avec docker via la commande docker-compose up -d
5 - Lancer la commande node create-articles.js pour la création d'articles de base pour le blog
6 - Lancer le backend via npm run dev
7 - Lancer le frontend via npm run dev

# Structure du projet

Backend

backend/
├── src/
│   ├── config/
│   │   └── database.js          # Connexion MongoDB
│   ├── models/
│   │   ├── User.js              # Modèle User
│   │   ├── Article.js           # Modèle Article
│   │   └── Comment.js           # Modèle Comment
│   ├── controllers/
│   │   ├── authController.js    # Logique auth
│   │   ├── articleController.js # Logique articles
│   │   └── commentController.js # Logique commentaires
│   ├── routes/
│   │   ├── auth.js              # Routes auth
│   │   ├── articles.js          # Routes articles
│   │   └── comments.js          # Routes commentaires
│   ├── middleware/
│   │   ├── auth.js              # protect, restrictTo
│   │   ├── errorHandler.js      # Gestion erreurs
│   │   └── security.js          # Middlewares sécurité
│   ├── utils/
│   │   └── AppError.js          # Classe erreur personnalisée
│   └── server.js                # Point d'entrée
├── .env                         # Variables d'environnement
├── .gitignore
├── package.json
└── docker-compose.yml           # MongoDB


Frontend

frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx       # En-tête site
│   │   │   ├── Footer.jsx       # Pied de page
│   │   │   └── Navbar.jsx       # Navigation
│   │   ├── articles/
│   │   │   ├── ArticleCard.jsx  # Carte article
│   │   │   ├── ArticleForm.jsx  # Formulaire article
│   │   │   └── ArticleList.jsx  # Liste articles
│   │   ├── comments/
│   │   │   ├── CommentForm.jsx  # Formulaire commentaire
│   │   │   └── CommentList.jsx  # Liste commentaires
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx    # Formulaire connexion
│   │   │   └── RegisterForm.jsx # Formulaire inscription
│   │   └── common/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       └── Loader.jsx
│   ├── pages/
│   │   ├── Home.jsx             # Page d'accueil
│   │   ├── ArticleDetail.jsx   # Détail article
│   │   ├── CreateArticle.jsx   # Créer article
│   │   ├── MyArticles.jsx      # Mes articles
│   │   ├── Login.jsx           # Connexion
│   │   ├── Register.jsx        # Inscription
│   │   └── Profile.jsx         # Profil
│   ├── context/
│   │   └── AuthContext.jsx     # Context authentification
│   ├── services/
│   │   ├── api.js              # Configuration Axios
│   │   ├── authService.js      # Services auth
│   │   ├── articleService.js   # Services articles
│   │   └── commentService.js   # Services commentaires
│   ├── hooks/
│   │   └── useAuth.js          # Hook auth personnalisé
│   ├── utils/
│   │   └── helpers.js          # Fonctions utilitaires
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── .env
├── package.json
└── README.md
