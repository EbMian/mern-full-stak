import React from 'react'
import { CreateArticle } from './pages/CreateArticle'
import { Home } from './pages/Home'
import {Routes, Route} from "react-router"
import { ArticleDetail } from './pages/ArticleDetail'
import { Register } from './pages/Register'
import { MyArticles } from './pages/MyArticles'
import { UpdateArticle } from './pages/UpdateArticle'
import { Profile } from './pages/Profile'
import { Login } from './pages/Login'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/articles/new" element={<CreateArticle />} />
        <Route path="/my-articles" element={<MyArticles />} />
        <Route path="/articles/:id/edit" element={<UpdateArticle />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App