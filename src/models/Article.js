import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
    {
        // ensemble des attributs de votre entité
        titre: {
            type: String,
            required: [true, "Le titre est obligatoire"],
            trim: true,
            minlength: [3, "Le titre doit contenir au moins 3 caractères"],
            maxlength: [200, "Données invalides : Le titre ne peut pas dépasser 200 caractères"]

        },
        contenu: {
            type: String,
            required: [true, "Le contenu est obligatoire"],
            trim: true,
            minlength: [10, "Données invalides : Le contenu doit contenir au moins 10 caractères."],
            maxlength: [200, "Le contenu ne peut pas dépasser 200 caractères"]

        },
        auteur : {
            type: String,
            required: true

        },
        publie: {
            type: Boolean,
            default: false
        },
        categorie: {
            type: String,

            enum: {
                values: ['Technologie', 'Lifestyle', 'Voyage', 'Cuisine', 'Autre'],

            }
        },
        vues: {
            type: Number,
            default: 0,
            min: 0
        }
    },
    {
        // Options générales sur l'entité
        // createdAt 
        timestamps: true,
        toJSON: {
            virtuals: true

        }
    }
)


articleSchema.methods.publier = function() {
    this.publie = true;
    return this.save();
}


articleSchema.methods.depublier = function() {
    this.publie = false;
    return this.save();
}

articleSchema.methods.incrementerVues = function() {
    this.vues += 1;
    return this.save();
}


articleSchema.statics.findPublies = function() {
    return this.find({publie: true}).sort({ createdAt: -1})
}


articleSchema.virtual('resume').get(function() {
    const content = this.contenu;
    /*const contentLength = content.length;
    if (contentLength <= 150) {
        return this.contenu;
    }
    return this.contenu.substring(0,150) + '...';*/
    return this.contenu;

})

articleSchema.pre('save', function(next) {
    console.log("Sauvegarde de l'article : " + this.titre)
    //next();

});


articleSchema.post('save', function(doc) {
    console.log(`Article sauvegardé: ${doc._id}` )
})



const Article = mongoose.model('Article', articleSchema)
export default Article;

