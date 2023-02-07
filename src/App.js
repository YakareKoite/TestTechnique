import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimeList from './composant/AnimeList';
import AnimeFav from './composant/AnimeFav';
import AnimeInf from './composant/AnimeInf';
import Test from  './composant/test';


const App = () => {
  /*const [favorites, setFavorites] = useState([]);

  const AddToFavorites = id => {
    setFavorites(prevFavorites => [...prevFavorites, id]);
  };*/
  //<Route exact path="/" element={<AnimeList/>} />
  return (
    <div>
    <Router>
    <Routes>
    <Route exact path="/" element={<AnimeList/>} />
       <Route path="/AnimeFav/:id" element={<AnimeFav/>} />
       <Route path="/AnimeInf/:id" element={<AnimeInf/>} />
       <Route path="/Test" element={<Test/>} />
       </Routes>
    </Router>

    </div>
  )
}
export default App