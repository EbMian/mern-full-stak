import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"


export const Home = () => {
  const [articles, setArticles] = useState([]);
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
  },[])
  
  return (
    <div>
      {/* <div>Home</div> */}
        <div>
          {articles.map(article =>
            <a href={"/articles/"+article._id}>
              <div>
                <label for="gsearch">Rechercher un article </label>
                <input type="search" id="gsearch" name="gsearch" />
                <p>{article.titre}</p>
                <p>{article.auteur}</p>
                <p>{article.createdAt}</p>
                <p>{article.resume}</p>
              </div>
            </a>
          )}
        </div>
    </div>

  )
}
