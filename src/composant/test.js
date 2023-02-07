import { Link } from "react-router-dom";
import '../style.scss';
import { useLocation } from "react-router-dom";


//Les favoris
const Test = (favorites) => {
  //recuperation de la donnée
  const location = useLocation();
  const a = JSON.parse(localStorage.getItem('cle'))
  console.log(a);
  return (
    <div>
  {a.map((anime) => (
  <d key={anime.id}>
  <img src={anime.post} className="fav"/>
  </d>
))}
<h3 className="mes">Mes favoris</h3>
<button ><Link to={`/`}  className='bute' >Retourner au Catalogue </Link></button>
  </div>


  )

}



export default Test

