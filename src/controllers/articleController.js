import Article from '../models/Article.js';
import QueryFeatures from '../utils/queryFeatures.js';

/**
 * CREATE - Créer un nouvel article
 */const createArticle = async (req, res) => {
    try {
        const { titre, contenu, auteur, categorie } = req.body;

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

    } catch (error) {
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
};

/**
 * READ ALL - Récupérer tous les articles
 */const getAllArticles = async (req, res) => {
    try {
        // Compter le total d'articles
        const totalCount = await Article.countDocuments();
        
        // Construire la query avec toutes les fonctionnalités
        const features = new QueryFeatures(Article.find(), req.query)
                    .filter()
                    .search()
                    .sort()
                    .limitFields()
                    .paginate();
        
        // Exécuter la query
        const articles = await features.query;
        
        // Obtenir les infos de pagination
        const paginationInfo = features.getPaginationInfo(totalCount);
        
        // Construire la réponse
        const response = {
                    success: true,
                    count: articles.length,
                    totalCount: totalCount,
                    data: articles
                };
        
                if (paginationInfo) {
                    response.pagination = paginationInfo;
                }
        
                res.status(200).json(response);
        
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Erreur lors de la récupération des articles',
                    error: error.message
                });
            }
        };

/**
 * READ ONE - Récupérer un article par ID
 */const getArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id);

        if (!article) {
            return res.status(404).json({
                success: false,
                message: 'Article non trouvé'
            });
        }

        await article.incrementerVues();

        res.status(200).json({
            success: true,
            data: article
        });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                message: 'ID invalide'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Erreur serveur',
            error: error.message
        });
    }
};

/**
 * UPDATE - Mettre à jour un article
 */const updateArticle = async (req, res) => {
    try {
        const { id } = req.params;

        const article = await Article.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!article) {
            return res.status(404).json({
                success: false,
                message: 'Article non trouvé'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Article mis à jour',
            data: article
        });
    } catch (error) {
// Gestion d'erreurs...
    }
};

/**
 * DELETE - Supprimer un article
 */const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findByIdAndDelete(id);

        if (!article) {
            return res.status(404).json({
                success: false,
                message: 'Article non trouvé'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Article supprimé',
            data: article
        });
    } catch (error) {
// Gestion d'erreurs...
    }
};

export  {
    createArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle
};
