import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";


export const ArticleDetail = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const url = window.location.href;
  const parts = url.split("/");
  const articleId = parts[parts.length-1];
  const articleURL = "http://localhost:3000/api/articles/"+articleId;
  const commentURL = "http://localhost:3000/api/articles/"+articleId+"/comments";
  //const dateFR = article.createdAt.toLocaleDateString();
  const date = new Date(article.createdAt);
  const dateFR = date.toLocaleDateString();
  console.log("a", articleURL)
  console.log("b", articleId)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(articleURL);
        console.log("res", res);
        //const data = await res.json();
        console.log(res.data.data.id);
        setArticle(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    const fetchComments = async () => {
      try {
        const res = await axios.get(commentURL);
        console.log("res", res);
        //const data = await res.json();
        console.log(res.data.data.id);
        setComments(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchArticle();

  },[])

  return (
    <div className="my-5" style={{maxWidth: "50%", textAlign: "justify", marginLeft: "auto", marginRight: "auto"}}>
      <h3 className='fw-bold'>{article.titre}</h3>
      <p>{"Par : " + article.auteur}</p>
      <p>{"Catégorie : " + article.categorie}</p>
      <p>{"Date : " + dateFR}</p>
      <p>{article.vues > 1 ? "vues : " + article.vues : " vue : " + article.vues}</p>
      <p>{article.contenu}</p>
      
      {comments ? <h4>Commentaires : </h4> : <p>Pas de commentaire pour le moment</p>}
      {comments.map(comment => {
        <div>
          <p>{comment.contenu}</p>
          <p>{comment.auteur}</p>
          <p>{comment.likes}</p>
        </div>
        
      }

      )}
    </div>
  )
}
