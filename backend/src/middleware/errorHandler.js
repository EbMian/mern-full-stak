/**
 * MIDDLEWARE DE GESTION D'ERREURS CENTRALISÉ
 * 
 * Ce middleware capture toutes les erreurs de l'application
 * et les formate de manière cohérente avant de les renvoyer au client
 * 
 * Il doit être déclaré EN DERNIER dans server.js
 * après toutes les routes
 */

import AppError from '../utils/AppError.js';

/**
 * Handler pour les erreurs de validation Mongoose
 * Exemple : champ requis manquant, valeur trop courte, etc.
 */
const handleValidationError = (err) => {
    // Extraire les messages d'erreur de chaque champ
    const errors = Object.values(err.errors).map(el => el.message);
    
    const message = `Données invalides : ${errors.join('. ')}`;
    return new AppError(message, 400);
};

/**
 * Handler pour les erreurs de duplication MongoDB
 * Exemple : email déjà utilisé (champ unique)
 */
const handleDuplicateFieldsError = (err) => {
    // Extraire le champ en double depuis le message d'erreur
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    
    const message = `La valeur ${value} existe déjà. Veuillez utiliser une autre valeur.`;
    return new AppError(message, 400);
};

/**
 * Handler pour les erreurs de cast MongoDB
 * Exemple : ID MongoDB invalide
 */
const handleCastError = (err) => {
    const message = `${err.path} invalide : ${err.value}`;
    return new AppError(message, 400);
};

/**
 * Handler pour les erreurs JWT (JSON Web Token)
 * Sera utilisé dans les modules d'authentification
 */
const handleJWTError = () => 
    new AppError('Token invalide. Veuillez vous reconnecter.', 401);

/**
 * Handler pour les tokens JWT expirés
 */
const handleJWTExpiredError = () => 
    new AppError('Votre session a expiré. Veuillez vous reconnecter.', 401);

/**
 * Envoyer les erreurs en mode développement
 * Inclut toutes les informations pour le debugging
 */
const sendErrorDev = (err, res) => {
    // Transformer les erreurs Mongoose en AppError
    if (err.name === 'CastError') {
        err = handleCastError(err);
    }
    
    if (err.code === 11000) {
        err = handleDuplicateFieldsError(err);
    }
    
    if (err.name === 'ValidationError') {
        err = handleValidationError(err);
    }
    
    if (err.name === 'JsonWebTokenError') {
        err = handleJWTError();
    }
    
    if (err.name === 'TokenExpiredError') {
        err = handleJWTExpiredError();
    }
    res.status(err.statusCode).json({
        success: false,
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,  // Stack trace complète
        details: err.errors || null
    });
};

/**
 * Envoyer les erreurs en mode production
 * Cache les détails internes pour la sécurité
 */
const sendErrorProd = (err, res) => {
    // Erreur opérationnelle (connue) : envoyer le message au client
    if (err.isOperational) {
        res.status(err.statusCode).json({
            success: false,
            status: err.status,
            message: err.message
        });
    } 
    // Erreur de programmation (inconnue) : ne pas exposer les détails
    else {
        // Logger l'erreur pour les développeurs
        console.error('❌ ERREUR:', err);
        
        // Envoyer un message générique
        res.status(500).json({
            success: false,
            status: 'error',
            message: 'Une erreur est survenue. Veuillez réessayer plus tard.'
        });
    }
};

/**
 * MIDDLEWARE PRINCIPAL DE GESTION D'ERREURS
 * 
 * Signature spéciale : 4 paramètres (err, req, res, next)
 * Express reconnaît automatiquement qu'il s'agit d'un error handler
 */
const errorHandler = (err, req, res, next) => {
    // Définir les valeurs par défaut si non définies
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    // Environnement de développement
    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } 
    // Environnement de production
    else {
        let error = { ...err };
        error.message = err.message;
        error.name = err.name;

        // Transformer les erreurs Mongoose en AppError
        if (error.name === 'CastError') {
            error = handleCastError(error);
        }
        
        if (error.code === 11000) {
            error = handleDuplicateFieldsError(error);
        }
        
        if (error.name === 'ValidationError') {
            error = handleValidationError(error);
        }
        
        if (error.name === 'JsonWebTokenError') {
            error = handleJWTError();
        }
        
        if (error.name === 'TokenExpiredError') {
            error = handleJWTExpiredError();
        }

        sendErrorProd(error, res);
    }
};

/**
 * Middleware pour les routes non trouvées (404)
 * À placer APRÈS toutes les routes définies
 */
const notFound = (req, res, next) => {
    const message = `Route non trouvée : ${req.method} ${req.originalUrl}`;
    next(new AppError(message, 404));
};

/**
 * Wrapper pour les fonctions async
 * Permet d'éviter les try/catch dans chaque controller
 * 
 * Utilisation :
 * exports.getArticles = catchAsync(async (req, res) => {
 *     const articles = await Article.find();
 *     res.json(articles);
 * });
 */
const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

export {
    errorHandler,
    notFound,
    catchAsync
};
