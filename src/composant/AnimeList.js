
import  React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { borderLeft } from "@mui/system";
import '../style.scss';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontweight : theme.palette.common.bolder,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const AnimeList = () => {
  const [animeData, setAnimeData] = useState([]);
  const [filters, setFilters] = useState({
    seasonYear: "",
    ageRating: "",
    title: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://kitsu.io/api/edge/anime");
      setAnimeData(result.data.data);
    };
    fetchData();
  }, [filters]);

 

  return (
    <div className="anime-list">
    <div className="anime-list__filters">
    <input className="cherch"
        type="search"
        name="title"
        placeholder="Rechercher"
        value={filters.title}
        
      />
      <select className="annee" name="ageRating" required="">
          <option selected="">Année</option>
          <option value={filters.seasonYear}  >2022</option>
           <option value={filters.seasonYear} >2021</option>
          <option value={filters.seasonYear}  >2020</option>
           <option value={filters.seasonYear} >2019</option>
      </select>

      <select className="ageR" name="ageRating" required="">
          <option selected="">Age recommandé</option>
          <option value={filters.ageRating}  >17+</option>
           <option value={filters.ageRating} >16+</option>
      </select>

   
    </div>
    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h2 className="tu">Catalogue</h2>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive"></div>
      <table className="ta" id="dataTable">
      <thead className="tb">
        <tr>
          <th >Titre</th>
          <th>Titre en Japonais</th>
          <th>Age recommandé</th>
          <th>Date de sortie</th>
          <th>Rang</th>
          <th>  </th>
        </tr>
      </thead>
      <tbody>
      {animeData.map((anime) => (
          <tr  key={anime.id}>
            <td>{anime.attributes.titles.en}</td>
            <td>{anime.attributes.titles.ja_jp}</td>
            <td>{anime.attributes.ageRatingGuide}</td>
            <td>{anime.attributes.startDate}</td>
            <td>{anime.attributes.ratingRank}</td>
            <td><Link to={`/AnimeInf/${anime.id}`}>Voir les détails </Link></td>
            
          </tr>
        ))}
     </tbody>
      </table>
    </div>
    </div></div>
  

  );
};


export default AnimeList;

