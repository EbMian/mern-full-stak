import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import CommentForm from '../components/comments/CommentForm';


export const Home = () => {
  // Récupération de l'utilisateur enregistré
  const storedUserJSON = localStorage.getItem('user');
  console.log(storedUserJSON);
  const storedUser = JSON.parse(storedUserJSON);
  console.log(storedUser);
  let token;  
  storedUser ? token = storedUser.token : null;
  console.log(token);
  const [articles, setArticles] = useState([]);

  let wantToComment = false;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/articles")
        //const data = await res.json();
        console.log(res.data.data);
        setArticles(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchArticles();
  },[]);

  async function displayTextArea(e) {
    // Passe la variable wantToComment à true -> à pour effet d'afficher le textarea et bouton du commentaire
    wantToComment = true;
    e.preventDefault();
  }
  
  return (
    <div style={{backgroundColor:"#DCD2D2"}}>
      {/* <div>
        <label htmlFor="gsearch">Rechercher un article </label>
        <input type="search" id="gsearch" name="gsearch" />
      </div> */}
      <h2>Accueil</h2>
      <p>La connexion est nécessaire pour commenter ou créer un article</p>
      <div className='container-fluid'>
        <div className='row' style={{rowGap: "20px"}}>
          
            {articles.map(article =>
              <div key={article._id} className='col-12 col-md-6 col-xl-4'>
                <div className='card w-100'>
                  <img src="/images/biologie.jpg" className="card-img-top" alt="Illustration"/>
                    <div className='card-body'>
                    <h3 className="card-title mb-4">{article.titre}</h3>
                      <p>{article.auteur}</p>
                      <p>{article.createdAt.slice(0, 10)}</p>
                      <p>{article.resume}</p>
                      <a href={"/articles/"+article._id} className="btn" style={{backgroundColor: "#FFE100", borderRadius: "15px", color: "black", fontWeight: "bold", border: "none"}}>Voir plus</a>
                      {/* <p>{article.vues}</p> */}
                      { token ? <button type="button" onClick={displayTextArea}>Commenter</button> : null}
                      {wantToComment ? <CommentForm/> : null}
                    </div>

                </div>
              </div>              

            )}
          </div>
        </div>
      </div>
      

  )
}
