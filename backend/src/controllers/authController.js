import protect from "../middleware/auth.js";
import User from "../models/User.js";
import { catchAsync } from "../middleware/errorHandler.js";
import AppError from "../utils/AppError.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );
};

const register = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        nom: req.body.nom,
        email: req.body.email,
        password: req.body.password
    });

    const token = signToken(newUser._id);

    res.status(201).json({
        success: true,
        token,
        data: { user: newUser }
    });
});

const login = catchAsync(async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return next(new AppError('Email et mot de passe requis', 400));
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
        return next(new AppError('Email ou mot de passe incorrect', 401));
    }

    const token = signToken(user._id);

    res.status(200).json({
        success: true,
        token,
        data: { user }
    });
});

const getMe = catchAsync(async(req, res, next) => {
    // Vérifer que l'utilisateur est connecté
    const user = req.user;
    if (!user) {
        return next(new AppError('Connexion requise', 401));
    }
    const token = signToken(user._id);
    // Afficher ses informations
    res.status(200).json({
        success: true,
        token,
        data: { user }
    });
})

const updateMe = catchAsync(async(req, res, next) => {
    // Vérifer que l'utilisateur est connecté
    const updateName = req.body.nom;
    const user = req.user;
    const id = user._id;
    if (!user) {
        return next(new AppError('Connexion requise', 401));
    }

    const updatedUser = await User.findOneAndUpdate(
        id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );

    /* Modifie seulement le nom
    const updatedUser = await User.findOneAndUpdate(
        id,
        {$set:{nom: updateName}},
        {
            new: true,
            runValidators: true
        }
    );*/

    // Récupère le token pour l'afficher
    const token = signToken(user._id);

    res.status(200).json({
        success: true,
        token,
        data: { updatedUser }
    });
    
})

const updatePassword = catchAsync(async(req, res, next) => {
    const updatedPassword = req.body.password;
    const userToUpdate = req.user;
    const id = userToUpdate._id;
    // Vérifer que l'utilisateur est connecté
    if (!userToUpdate) {
        return next(new AppError('Connexion requise', 401));
    }
    const updatedUserPwd = await userToUpdate.modifierMotDePasse(updatedPassword);
    const user = await User.findById(id);
    if (!updatedUserPwd) {
        return next(new AppError('Erreur lors de la modification', 400));
    }
    //const userSave = await userToUpdate.save();
    const userSave = await user.save();
    // Récupère le token de l'utilisateur connecté
    const token = signToken(userToUpdate._id);

    res.status(200).json({
        success: true,
        token,
        data: { updatedUserPwd }
    });
})

export {register, login, getMe, updateMe, updatePassword};