import express from 'express'
import { getMe, updateMe, updatePassword, register, login } from "../controllers/authController.js";
import protect from '../middleware/auth.js';
import { getArticleByUser } from '../controllers/articleController.js';
const authRoutes = express.Router();
authRoutes.post('/register', register);
authRoutes.post('/login', login);

// Protéger toutes les routes suivantes
authRoutes.use(protect);

authRoutes.get('/me', getMe);
authRoutes.patch('/updateMe', updateMe);
authRoutes.patch('/updatePassword', updatePassword);
authRoutes.get('/getArticles', getArticleByUser);

export default authRoutes;