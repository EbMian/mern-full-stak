import React from 'react';
import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [userToken, setUserToken] = useState();
    // Récupération de l'utilisateur enregistré
    const storedUserJSON = localStorage.getItem('user');
    console.log(storedUserJSON);
    const storedUser = JSON.parse(storedUserJSON);
    console.log(storedUser);
    let token;  

    useEffect(() => {
        storedUser ? setUserToken(token) : null;
    })
    
    return (
        <header className="header">
            <a href="/">
                <img src="/images/logo.svg" alt="Logo du blog" className="logo" width={50}/>
            </a>
            <h1>Le Blog de biologie</h1>
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/login">Connexion</a></li>
                    <li><a href="/register">Inscription</a></li>
                    { userToken ? <li><a href="/my-articles">Mes articles</a></li> : null }
                    { userToken ? <li><a href="/profile">Profil</a></li> : null }
                    {/* <li><a href="">Déconnexion</a></li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;



