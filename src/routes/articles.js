import express from 'express';
const router = express.Router();
import {createArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle} from '../controllers/articleController.js'

// Routes CRUD
router.get('/', getAllArticles);// Liste
router.post('/', createArticle);// Création
router.get('/:id', getArticleById);// Un article
router.put('/:id', updateArticle);// Mise à jour
router.delete('/:id', deleteArticle);// Suppression

export default router;
