import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

export const MyArticles = () => {
  const [articles, setArticles] = useState([]);
  // Requette avec l'utilisateur dans le corps /auth/getArticles
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Récupération de l'utilisateur enregistré
        const storedUserJSON = localStorage.getItem('user');
        console.log(storedUserJSON);
        const storedUser = JSON.parse(storedUserJSON);
        console.log(storedUser);
        token = storedUser.token;
        // Récupération des articles de l'utilisateur
        const {data} = await axios.post('http://localhost:3000/api/auth/getArticles', {
          headers: {
            'Content-Type': 'application/json',
            'Bearer': token
          }
        })
        console.log(data);
        setArticles(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchArticles();
  },[])

  return (
    <div>
      <div>
        <label htmlFor="gsearch">Rechercher un article </label>
        <input type="search" id="gsearch" name="gsearch" />
      </div>
      {articles.map(article =>
        <a href={"/articles/"+article._id}>
          <div>
            <p>{article.titre}</p>
            <p>{article.auteur}</p>
            <p>{article.createdAt}</p>
            <p>{article.resume}</p>
          </div>
        </a>
      )}

      <div>
        <h2>Mes articles</h2>
        <a href="/articles/new"><button type="button">Créer un article</button></a>
      </div>
    </div>
  )
}
