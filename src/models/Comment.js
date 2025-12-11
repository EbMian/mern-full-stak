import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        contenu: {
            type: String,
            required: [true, "Le contenu est obligatoire"],
            trim: true,
            min: [10, 'Minimum 2 charactères'],
            max: [100, 'Maximum 100 charactères'],
        },

        auteur: {
            type: String,
            required: [true, "Auteur obligatoire"],
            trim: true,
            min: [1, "Le nom de l'auteur doit contenir au moins 1 charactère"],
            maxlength: [100, 'Maximum 100 caractères']
        },

        email: {
            type: String,
            trim: true,
            lowercase: true,
            //match: ["/^\w+[\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", 'Email invalide']
        },

        likes: {
            type: Number,
            default: 0,
            min: [0, "Le nombre de likes ne peut pas être inférieur à 0"],
        },

        article: {
            type: mongoose.ObjectId,
            ref: 'Article',
            required: [true, "Article obligatoire"],
        },

        // Modération
        approuve: {
            type: Boolean,
            default: false
        },

        signale: {
            type: Boolean,
            default: false
        },
    },

    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);

// INDEX pour optimiser les requêtes
commentSchema.index({ article: 1, createdAt: -1 });

// Méthodes d'instance
commentSchema.methods.approuver = function() {
    this.approuve = true;
    return this.save();
};

// Méthodes statiques
commentSchema.statics.findApprouvesByArticle = function(articleId) {
    return this.find({ article: articleId, approuve: true }).sort({ createdAt: -1 });
};

// Populate automatique
commentSchema.pre(/^find/, function(next) {
    this.populate({
        path: 'article',
        select: 'titre auteur'
    });
    //next();
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
