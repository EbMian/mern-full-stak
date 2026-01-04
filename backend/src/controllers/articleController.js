import Article from '../models/Article.js';
import QueryFeatures from '../utils/queryFeatures.js';
import { catchAsync } from '../middleware/errorHandler.js';
import AppError from '../utils/AppError.js';

/**
 * CREATE - Créer un nouvel article
 */
const createArticle = catchAsync (async (req, res, next) => {
    //const { titre, contenu, auteur, categorie } = req.body;

    const article = await Article.create({
        titre: req.body.titre,
        contenu: req.body.contenu,
        auteur: req.body.auteur,
        categorie: req.body.categorie,
    });

    const articleSauvegarde = await article.save();

    if (!articleSauvegarde) {
        return next(new AppError("Erreur lors de la création de l'article", 404))
    }

    res.status(201).json({
        success: true,
        message: 'Article créé avec succès',
        data: articleSauvegarde
    });

});

/**
 * READ ALL - Récupérer tous les articles
 */const getAllArticles = catchAsync (async(req, res, next) => {
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

        return res.status(200).json(response);

        res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération des articles',
            error: error.message
        });
});
    

/**
 * READ ONE - Récupérer un article par ID
 */const getArticleById = catchAsync(async (req, res, next) => {
    const article = await Article.findById(req.params.id);

    if (!article) {
        return next(new AppError('Article non trouvé', 404));
    }
    
    // Incrémenter le nombre de vues
    await article.incrementerVues();

    res.status(200).json({ success: true, data: article });
});

/**
 * READ - Récupérer les articles d'un utilisateur
 */const getArticleByUser = catchAsync(async (req, res, next) => {

    const user = req.body.user;
    const userName = user.nom;
    const articles = await Article.find({autheur: userName});

    if (!articles) {
        return next(new AppError('Article non trouvé', 404));
    }
    
    // Incrémenter le nombre de vues
    await articles.incrementerVues();

    res.status(200).json({ success: true, data: articles });
});

/**
 * UPDATE - Mettre à jour un article
 */const updateArticle = catchAsync (async (req, res) => {
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
        return next(new AppError('Article non trouvé', 404));
    }

    res.status(200).json({
        success: true,
        message: 'Article mis à jour',
        data: article
    });

    
});

/**
 * UPDATE - Publier l'article (publie = true)
 */const publishArticle = catchAsync (async (req, res) => {
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
        return next(new AppError('Article non trouvé', 404));
    }

    res.status(200).json({
        success: true,
        message: 'Article mis à jour',
        data: article
    });

    
});

/**
 * DELETE - Supprimer un article
 */const deleteArticle = catchAsync (async (req, res, next) => {
        const { id } = req.params;
        const article = await Article.findByIdAndDelete(id);

        if (!article) {
            next(new AppError('Article non trouvé', 404));
        }

        res.status(200).json({
            success: true,
            message: 'Article supprimé',
            data: article
        });
        if (error.kind === 'ObjectId') { // Puisqu'on donne un id on peut avoir une erreur au niveau de l'id
            return next(new AppError('Identifiant invalide', 400));
        }
        if (error.name === 'ValidationError') { // Puisqu'on teste la validation on peut avoir une erreur de validation
            return next(new AppError('Erreur de validation', 400))
        }
    
        res.status(500).json({ 
            success: false,
            message: 'Erreur lors de la suppression',
            error: error.message
        })
});

export  {
    createArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
    getArticleByUser,
};
