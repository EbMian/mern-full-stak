import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import Article from './src/models/Article.js';

async function testerArticle() {
    try {
// Connexion à MongoDB
await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connecté à MongoDB');

// Créer un nouvel article
const article = new Article({
        titre: 'Mon premier article',
        contenu: 'Ceci est le contenu de mon premier article sur le blog MERN. Il contient du texte intéressant.',
        auteur: 'John Doe',
        categorie: 'Technologie'
});

// Sauvegarder l'article
await article.save();
        console.log('📝 Article créé:', article);

// Afficher les champs virtuels
console.log('📖 Résumé:', article.resume);
        console.log('⏱️  Durée de lecture:', article.dureeIecture, 'min');

// Publier l'article
await article.publier();
        console.log('📢 Article publié');

// Incrémenter les vues
await article.incrementerVues();
        console.log('👁️  Vues:', article.vues);

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
