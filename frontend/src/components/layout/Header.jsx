import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src="/images/bioinformatics.png" alt="Logo du blog" className="logo" width={50}/>
            <h1>Le Blog Bioinformatique </h1>
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/">Connexion</a></li>
                    <li><a href="/about">Mes articles</a></li>
                    <li><a href="/services">Profil</a></li>
                    <li><a href="/contact">Déconnexion</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;



