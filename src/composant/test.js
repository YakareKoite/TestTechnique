import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../style.scss';
import { useLocation } from "react-router-dom";

const Test = (post) => {
  const [favorites, setFavorites] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.setFavorites) {
      setFavorites(location.state.favorites);
    }
  }, [location.state]);
  console.log(location.state)
  return (
    <div>
    <h2>My Favorite Anime Shows</h2>
    <ul>
      {favorites.map(( index, post ) => (
        <img key={index} src={post}/>
      ))}
      <button ><Link to={`/`}  className='but' >Retourner au Catalogue </Link></button>
    </ul>
  </div>
    )
}

export default Test

