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
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchArticles();
  },[])
  
  return (
    <div>Home</div>
  )
}
