
import  React, { useState, useEffect } from "react";
import axios from "axios";

import '../style.scss';

const  Search = ({data, setData}) =>  {
    const [filters, setFilters] = useState('');
   

  const handleFilterChange = event => {
 setFilters(event.target.value);
 //const value = data.filter(id => id.includes(filters))
    //setData(value);
  };

  return (
    <div>
    <input className="cherch" 
    type="text"
    value={filters}
    name="title"
    placeholder="Rechercher"
    onChange={handleFilterChange}/>
    
</div>
  );
};

export default Search

