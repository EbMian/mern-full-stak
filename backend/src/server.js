import express from 'express';
import {connectDB, closeDB} from './config/database.js';
import cors from 'cors';

// Création de l'application

const app = express();

// Configuration du port

const PORT = process.env.PORT || 3000;

// Applique le middleware cors
app.use(cors({
    origin: 'http://localhost:5173',
}));

// Parser JSON (OBLIGATOIRE pour POST/PUT)
app.use(express.json());

// Middleware pour parser les données URL-encodées (formulaires)
app.use(express.urlencoded({ extended: true }));

// Parser les données de formulaires
app.use(express.urlencoded({ extended: true }));

// Route pour tester le serveur

app.get('/', (req, res) => {
    res.json({
        message: "Bienvenue sur l'API du blog !",
        version: '1.0.0',
        endpoints: {
            articles: '/api/articles',
            auth: '/api/auth',
        }
    })
});

// Montage des routes articles
import router from './routes/articles.js';
app.use('/api/articles', router);

// Montage des routes protégées
import authRoutes from './routes/auth.js';
app.use('/api/auth', authRoutes);

import { errorHandler, notFound } from './middleware/errorHandler.js';

// 404 - APRÈS toutes les routes
app.use(notFound);

// Fonction assychrone qui démarre le serveur
const startServer = async () => {
    try {
        // 1 - Connexion à MongoDb
        await connectDB();
        // 2 - Démarre le serveur Express
        app.listen(PORT, () => {
            console.log(`Youpi ! Le serveur est démaré sur le port ${PORT}`);
            console.log(`URL : http://localhost:${PORT}`);
            console.log(`Environnement : ${process.env.NODE_ENV || 'development'}`);
        });
    }
    catch(error) {
        console.error(`❌ Erreur lors du démarage du serveur :`, error);
        process.exit(1);
    }

} 

startServer();

// Error handler - EN DERNIER
// Import du middleware
app.use(errorHandler);