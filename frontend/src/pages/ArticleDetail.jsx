import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"


export const ArticleDetail = () => {
  const [article, setArticle] = useState([]);
  console.log(window.location.href);
  console.log(location.pathname)
  const url = window.location.href;

  console.log(url)
  const parts = url.split("/");
  const articleId = parts[parts.length-1];

  //const articleId = url.substring(url.lastIndexOf("/") + 1);
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/articles/"+articleId);
        //const data = await res.json();
        console.log(res.data.data[0]);
        setArticle(res.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    }

    
    
    fetchArticle();
  },[])

  return (
    <div>
      <p>{article.titre}</p>
      <p>{article.auteur}</p>
      <p>{article.createdAt}</p>
      <p>{article.resume}</p>
    </div>
  )
}
