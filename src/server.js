import express from 'express';
import {connectDB, closeDB} from './config/database.js';

// Création de l'application

const app = express();

// Configuration du port

const PORT = process.env.PORT || 3000;

// Route pour tester le serveur

app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenue cher voyageur !',
        version: '1.0.0',
        status: 'Le serveur fonctionne à merveille'
    })
});


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