/*import express from 'express';
import { createComment, deleteComment, getAllComments, getCommentsByArticle } from '../controllers/commentController.js';

const commentRoutes = express.Router({ mergeParams: true });

commentRoutes.get('/', getAllComments);
commentRoutes.post('/', createComment);
commentRoutes.get('/:id', getCommentsByArticle);
commentRoutes.delete('/:id', deleteComment);

export default commentRoutes; */

import express from 'express';
// mergeParams: true permet d'accéder à articleId du parent
const commentRoutes = express.Router({ mergeParams: true });

import {
    createComment,
    getCommentsByArticle,
    getApprovedComments
} from '../controllers/commentController.js';

// /api/articles/:articleId/comments
commentRoutes.route('/')
    .get(getCommentsByArticle)
    .post(createComment);

// /api/articles/:articleId/comments/approuves
commentRoutes.get('/approuves', getApprovedComments);

export default commentRoutes;
