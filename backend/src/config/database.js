import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connectDB() {
    try {

        // Option de connection
        const options = {}
        const conn = await mongoose.connect((process.env.MONGODB_URI), options);
        console.log(`✅ MongoDB connecté : ${conn.connection.host}`);
        console.log(`📊 Base de données : ${conn.connection.name}`);

        // retourne une sorte de promesse ?
        return conn;
    } 

    catch (error) {
        // En cas d'erreur de connexion
        console.error('❌ Erreur de connexion à MongoDB : ');
        console.error.message;

        // Arrêter l'application
        process.exit(1);
    }
}

// Fermeture gracieuse de l'application

async function closeDB() {
    try { 
        await mongoose.connection.close();
        console.log("🔌 Connexion à MongoDB fermée gracieusement");
    }

    catch (error) {
        console.error('❌ Erreur lors de la fermeture de la connexion à MongoDB');
        console.error.message

        process.exit(1);
    }
}

// Évènement de connexion Mongoose
mongoose.connection.on('error', (err) => {
    console.error('Erreur de connexion à Mongo', err);

});

mongoose.connection.on('disconnected', () => {
    console.log('⚠️ MongoDB déconnecté');
});

// Gestion du Ctrl+C
process.on('SIGINT', async () => {
    await closeDB();
    process.exit();
});

export {connectDB, closeDB};