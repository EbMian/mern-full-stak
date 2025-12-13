import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, 'Le nom est obligatoire'],
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email invalide']
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false// Ne pas retourner par défaut
    },
    role: {
        type: String,
        enum: ['user', 'moderator', 'admin'],
        default: 'user'
    }
}, { timestamps: true });

// Middleware pre-save : hasher le mot de passe
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Méthode pour comparer les mots de passe
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Méthode pour modifier le nom
userSchema.methods.modifierNom = function(newName) {
    this.nom = newNom;
    return this.save();
}

// Méthode pour modifier l'e-mail
userSchema.methods.modifierEmail = function(newEmail) {
    this.email = newEmail;
    return this.save();
}

// Méthode pour modifier le mot de passe
userSchema.methods.modifierMotDePasse = function(newPasswd) {
    this.password = newPasswd;
    return this.save();
}

// Méthode pour afficher l'utlisateur
userSchema.methods.afficherUtilisateur = function() {
    this.user;
    return this.nom;
}

const User = mongoose.model('User', userSchema);
export default User;