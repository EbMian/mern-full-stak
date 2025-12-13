import Article from "../models/Article.js";

// CREATE
const createArticle = async (req, res, next) => {
    try {

        /* Fait par moi

        const {titre, contenu, auteur, categorie} = req.body;
        const article = new Article(
            this.titre = titre,
            this.contenu = contenu,
            this.auteur = auteur,
            this.categorie = categorie,
        );
        res.json = {
            status: 201,
            data: article
        } */

        const {titre, contenu, auteur, categorie} = req.body;

        const article = new Article({
            titre,
            contenu,
            auteur,
            categorie
        });

        const articleSauvegarde = await article.save();

        res.status(201).json({
            success: true,
            message: 'Article créé avec succès',
            data: articleSauvegarde
        });
    } 

    catch(error) {

        /* Fait par moi
        console.error.message;
        res.json {
            status: 500,
        }*/

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Erreur de validation',
                errors: Object.values(error.errors).map(err => err.message)
            });
        }

        res.status(500).json({
            success: false,
            message: 'Erreur serveur',
            error: error.message
        });
    }
}
// READ
const getArticles = async (req, res, next) => {
    try {
        const articles = await Article.find().sort({ createdAt: -1 });
        res.status(200).json({
            sucess: true,
            message: "Article(s) restourné(s) avec succès",
            data: articles,
        })
    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Erreur serveur lors de la récupération",
            error: error.message
        })
    }
    
}

// READ by ID
const getArticleById = async (req, res, next) => {
    const {id} = req.params;
    try {
        const article = await Article.findById(id);
        if (!article) {
            return res.status(404).json({
                sucess: false,
                message: "Article non trouvé",
            })
        }
        res.status(200).json({
            sucess: true,
            message: "Article restourné avec succès",
            data: article,
        });
        await article.incrementerVues();

    } catch(error) {
        if (error.kind === "ObjectId") {
            return res.status(400).json({
                sucess: false,
                message: "ID invalide",
                error: error.message,
            })
        }
        res.status(500).json({
            success: false,
            message: "Erreur serveur lors de la récupération",
            error: error.message
        })
    }
}

// UPDATE 
const updateArticle = async(req, res, next) => {
    try {
        const {id} = req.params;
        const articleUpdate = Article.findOneAndUpdate(
            id,
            req.body,
            {}
        );
        if (!articleUpdate) {
            return res.status(404).json({
                success: false,
                message: "Article non trouvé",
                error: error.message
            })
        }

        res.status(200).json({
            sucess: true,
            message: "Article modifié avec succès",
            error: error.message,
        })


    } catch(error) {
        if (error.kind === "ObjectId") {
            return res.status(400).json({
                sucess: false,
                message: "ID invalide",
                error: error.message,
            })
        }
        res.status(500).json({
            success: false,
            message: "Erreur serveur lors de la récupération",
            error: error.message
        })
    }
}

// DELETE
const deleteArticle = async (req, res, next) => {
    try {
        const {id} = req.params;
        const article = Article.findByIdAndDelete(id);
        if(!article) {
            return res.status(404).json({
                success: false,
                message: "Article non trouvé",
            });
        }
        res.status(200).json({
            success: true,
            message: "Article supprimé",
            data: article
        });
    } catch(error) {
        if (error.kind === "ObjectId") {
            return res.status(400).json({
                sucess: false,
                message: "ID invalide",
                error: error.message,
            })
        }
        res.status(500).json({
            success: false,
            message: "Erreur serveur lors de la suppression",
            error: error.message
        })
    }
}
export {createArticle, getArticles, getArticleById, deleteArticle, updateArticle}