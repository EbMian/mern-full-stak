import Comment from '../models/Comment.js';
import Article from '../models/Article.js';
import QueryFeatures from '../utils/queryFeatures.js';
import { catchAsync } from '../middleware/errorHandler.js';
import AppError from '../utils/AppError.js';

/**
 * CREATE - Créer un nouvel article
 */
const createComment = catchAsync (async (req, res, next) => {
    const {articleId} = req.params;
    const article = await Article.findById(articleId);
    if (!article) {
        return next(new AppError('Article non trouvé', 404));
    }
    
    /*const { contenu, auteur, article } = req.body;

    const comment = new Comment({
        contenu,
        auteur,
        article,
    });

    const commentSave = await comment.save();

    if (!commentSave) {
        return next(new AppError("Erreur lors de la création du commentaire", 404))
    }

    res.status(201).json({
        success: true,
        message: 'Commentaire créé avec succès',
        data: commentSave
    });*/

    // Créer le commentaire
    const comment = await Comment.create({
        contenu: req.body.contenu,
        auteur: req.body.auteur,
        email: req.body.email,
        article: articleId// Lier à l'article
    });

    res.status(201).json({
        success: true,
        data: comment
    });
});

/**
 * READ ALL - Récupérer tous les commentaire
 */const getAllComments = catchAsync (async(req, res, next) => {
    // Compter le total des commentaires
    const totalCount = await Comment.countDocuments();
    
    // Construire la query avec toutes les fonctionnalités
    const features = new QueryFeatures(Comment.find(), req.query)
        .filter()
        .search()
        .sort()
        .limitFields()
        .paginate();
    
    // Exécuter la query
    const comments = await features.query;
    
    // Obtenir les infos de pagination
    const paginationInfo = features.getPaginationInfo(totalCount);
    
    // Construire la réponse
    const response = {
        success: true,
        count: comments.length,
        totalCount: totalCount,
        data: comments
    };

    if (paginationInfo) {
        response.pagination = paginationInfo;
    }

    res.status(200).json(response);
});
    

/**
 * READ ONE - Récupérer un article par ID
 */
/*const getCommentById = catchAsync(async (req, res, next) => {
const comment = await Comment.findById(req.params.id);

if (!comment) {
    return next(new AppError('Article non trouvé', 404));
}

// Incrémenter le nombre de likes
await article.incrementerLikes();

res.status(200).json({ success: true, data: comment });

});*/

// Récupérer les commentaires d'un article
const getCommentsByArticle = catchAsync(async (req, res, next) => {
    const { articleId } = req.params;

    // Vérifier l'article
    const article = await Article.findById(articleId);
    if (!article) {
        return next(new AppError('Article non trouvé', 404));
    }

    // Récupérer les commentaires
    const comments = await Comment.find({ article: articleId }).sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        count: comments.length,
        data: comments
    });
});


const getApprovedComments = catchAsync(async (req, res, next) => {
    const comments = await Comment.find({approuve: true}).sort({createdAt: -1});

    res.status(200).json({
        success: true,
        count: comments.length,
        data: comments
    })
}); 

/**
 * UPDATE - Mettre à jour un commentaire
 */const updateComment = catchAsync (async (req, res) => {
    const { id } = req.params;

    const comment = await Comment.findByIdAndUpdate(
        id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );

    if (!comment) {
        return next(new AppError('Commentaire non trouvé', 404));
    }

    res.status(200).json({
        success: true,
        message: 'Commentaire mis à jour',
        data: comment
    });

    
});

/**
 * DELETE - Supprimer un commentaire
 */const deleteComment = catchAsync (async (req, res, next) => {
    const { id } = req.params;
    const comment = await Comment.findByIdAndDelete(id);

    if (!comment) {
        next(new AppError('Commentaire non trouvé', 404));
    }

    res.status(200).json({
        success: true,
        message: 'Commentaire supprimé',
        data: comment
    });
});

export  {
    createComment,
    getAllComments,
    //getCommentById,
    getApprovedComments,
    getCommentsByArticle,
    updateComment,
    deleteComment,
};
