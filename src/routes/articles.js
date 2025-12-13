import express from 'express';
import { getArticles, getArticleById, createArticle, updateArticle, deleteArticle } from '../controllers/articlesController.js';
const articlesRouter = express.Router();

articlesRouter.get('/', getArticles);
articlesRouter.post('/', createArticle);
articlesRouter.get('/:id', getArticleById);
articlesRouter.put('/:id', updateArticle);
articlesRouter.delete('/:id', deleteArticle);

export default articlesRouter;