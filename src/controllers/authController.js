import protect from "../middleware/auth.js";
import User from "../models/User.js";
import { catchAsync } from "../middleware/errorHandler.js";

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
    const { email, password } = req.body;

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
    const token = protect.token;
    // Vérifer que l'utilisateur est connecté, sinon le lui demander
    if (!protect.token) {
        login();
    }

    // Afficher ses informations
    res.status(200).json({
        success: true,
        token,
        data: { token }
    });
})

const updateMe = catchAsync(async(req, res, next) => {
    //const {user} = req.params;
    // Vérifer que l'utilisateur est connecté, sinon le lui demander
    if (!protect.user) {
        login();
    }

    //await user.

    res.status(200).json({
        success: true,
        token,
        data: { user }
    });

    /* Peut être un modèle
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
    });*/
})

const updatePassword = catchAsync(async(req, res, next) => {
    

    res.status(200).json({
        success: true,
        token,
        data: { user }
    });
})

export {register, login, getMe};