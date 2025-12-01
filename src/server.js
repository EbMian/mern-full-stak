// Import d'express

const express = require('express');

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

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Youpi ! Le serveur est démaré sur le port ${PORT}`);
    console.log(`URL : http://localhost:${PORT}`);

});

