import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const UpdateArticle = () => {
  const url = window.location.href;
  const parts = url.split("/");
  const articleId = parts[parts.length-1];
  const articleURL = "http://localhost:3000/api/articles/"+articleId;
  const [article, setArticle] = useState({
    titre: "",
    auteur: "",
    contenu: "",
    categorie: "",
  });
  useEffect(() => {
    // Récupération de l'utilisateur enregistré
    const storedUserJSON = localStorage.getItem('user');
    console.log(storedUserJSON);
    const storedUser = JSON.parse(storedUserJSON);
    console.log(storedUser);
    token = storedUser.token;
  },[]);

  

  function handleChange(key, value) {
		setArticle(prev => ({
      ...prev,
      auteur: storedUser.nom,
      [key]: value,
    }));
	}

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const {data} = await axios.put(articleURL, article, {
        headers: {
          'Content-Type': 'application/json',
          'Bearer': token
        }
      })
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form id="createArticleFrom" onSubmit={handleSubmit}>
        <div>
          <h2>Créer un article</h2>
          <hr />

          <label htmlFor="titre"><b>Titre</b></label>
          <input type="text" name="titre" id="titre" value={values.nom} onChange={(e) => handleChange("titre", e.target.value)} required />

          <label htmlFor="contenu"><b>Contenu</b></label>
          <input type="text" name="contenu" id="contenu" value={values.email} onChange={(e) => handleChange("contenu", e.target.value)} required />

          <label htmlFor="categorie"><b>Catégorie</b></label>
          <input type="text" name="categorie" id="categorie" value={values.password} onChange={(e) => handleChange("categorie", e.target.value)} required />
          <hr />

          <button type="submit">Créer l'article</button>
        </div>
      </form>
    </div>
  )
}
