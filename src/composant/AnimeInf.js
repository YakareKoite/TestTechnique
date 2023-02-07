import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../style.scss';
import { useLocation } from "react-router-dom";



const AnimeInf = ({anime, AddToFavorites}) => {
 const [favorites, setFavorites] = useState([]);
const [animeData, setAnimeData] = useState([]);
const id = useParams().id
const [theArray, setTheArray] = useState([]);
const [titre, settitre] = useState() 
const [synop, setsynop] = useState() 
const [cov, setcov] = useState() 
const [post, setpost] = useState() 
const [rang, setrang] = useState() 

useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
      setAnimeData(result.data);
      setcov(result.data.data.attributes.coverImage.small)
      settitre(result.data.data.attributes.titles.en)
      setsynop(result.data.data.attributes.synopsis)
      setrang(result.data.data.attributes.ratingRank)
      setpost(result.data.data.attributes.posterImage.small)

    };
    fetchData();
    
  },[id]
  )


/*
  const Fav   = () =>{
   const handleClick = () => {
      this.props.onAddToFavorites(this.props.anime);
    };
}
const state= {  favorites: [] };
  const addToFavorites = (id) => {
    this.setState(prece => ( {
        favorites:[... prece.favorites, id]
    }));
    console.log(favorites);
  }; */

  const addToFavorites = (post) => {
    setFavorites([...favorites, post]);

    console.log(favorites[0]);
  }; 
  const obj = { ...favorites }
  console.log(obj);
  //const map = new Map(arr.map((obj) => [obj.key, obj.value]));
 // console.log(map);
return(
   <div>
    <img src = {cov} className="cov" />
    <img src = {post}  className="post"/>
    <div class="form-row">

     <div>
        <button className='butta' onClick={() => addToFavorites(post)}  state= {{ favorites: obj }} >
 Ajouter aux favoris
        </button>
      </div>
    
    <button ><Link to={`/Test`} className='buttb'>voir les favoris</Link></button>
    <div className="tit" >{titre}</div>


    <div className='ran'> Rangs {rang}</div>
   <p className="syn">{synop}</p>
   <button ><Link to={`/`}  className='buttc' >Retourner au Catalogue </Link></button>
 
   </div>
   </div>
  

)

}

export default AnimeInf