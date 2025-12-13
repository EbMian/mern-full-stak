import express from 'express'
import { getMe, register, login } from "../controllers/authController.js";
import protect from '../middleware/auth.js';
const authRoutes = express.Router();
authRoutes.post('/register', register);
authRoutes.post('/login', login);

// Protéger toutes les routes suivantes
//authRoutes.use(protect);

//authRoutes.get('/me', getMe);
//authRoutes.patch('/updateMe', updateMe);
//authRoutes.patch('/updatePassword', updatePassword);

export default authRoutes;