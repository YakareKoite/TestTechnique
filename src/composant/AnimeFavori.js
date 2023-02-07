import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const AnimeFavori= (animeFav) => {
  const [favorites, setFavorites] = useState([]);
  const location = useLocation();
  const {b} = location.state.favorites;
  console.log(b)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://kitsu.io/api/edge/anime/${b}`);
      setFavorites(result.data.data.attributes.posterImage.small);

    };
    fetchData();
    
  },[b]
  )
 

return(
 <div>
<img src = {favorites}  className="post"/>
 
  </div>
      
    );
  };


export default AnimeFavori