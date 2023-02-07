import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../style.scss';
import { useLocation } from "react-router-dom";



const AnimeInf = ({anime, AddToFavorites}) => {
const [verif, setVerif] = useState(false);
 const [favorites, setFavorites] = useState([]);
const [animeData, setAnimeData] = useState([]);
const id = useParams().id
const [theArray, setTheArray] = useState([]);
const [titre, settitre] = useState() 
const [synop, setsynop] = useState() 
const [cov, setcov] = useState() 
const [post, setpost] = useState() 
const [rang, setrang] = useState() 

//récuperation des données envoyé par le composant AnimList en se basant sur l'id et en utilisant Axios
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

  //fonction d'ajout de l'animé aux favoris
  const addrmFavorite = (post,id) => {
    let itemsString = localStorage.getItem('cle');
    let cle = itemsString ? JSON.parse(itemsString) : [];
    let a = JSON.parse(itemsString)
    localStorage.setItem('cle', JSON.stringify(cle));
    let exist =  itemsString.includes(id)
    console.log(exist);
    console.log(id)
    //tester si l'animé existe dans les favoris, sinon l'ajouter
    if(!exist){
        var array = {
            post: post,
            id: id
        };
        setTheArray([...theArray, array])
        a.push(array);
        localStorage.setItem('cle', JSON.stringify(a)) 
        console.log(localStorage.getItem('cle'))
    }
    //si l'animé existe alors le supprimer
    else{  
       let updatedList = itemsString.filter((item) => item.id !== id)
       console.log(updatedList)
       localStorage.setItem('cle', JSON.stringify(updatedList));
    }
  };
 
return(
   <div>
        <img src = {cov} className="cov" />
        <img src = {post}  className="post"/>
        <div class="form-row">
        <div>
        {verif?
            <button className='butta' onClick={() =>  addrmFavorite (post,id)} > Ajouter aux favoris </button>
                :
            <button className='buttr' onClick={() =>  addrmFavorite (post,id)} > Retirer des favoris </button>
        } 
        </div>
        
        <button ><Link to={`/Test`}  state= {{ favorites: favorites }} className='buttb'>voir les favoris</Link></button>
    
        <div className="tit" >{titre}</div>


        <div className='ran'> Rangs {rang}</div>
        <p className="syn">{synop}</p>
        <button ><Link to={`/`}  className='buttc' >Retourner au Catalogue </Link></button>
 
   </div>
   </div>
  

)

}

export default AnimeInf