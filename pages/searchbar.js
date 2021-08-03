import React, { useState } from 'react'
import styles from '../styles/Searchbar.module.css'
const axios = require('axios').default;

export default function Searchbar(props) {
    
    const [searchText, setSearchText] = useState('');

    function searchHero() {
        axios.get(`https://superheroapi.com/api/10159471963432710/search/${searchText}/`, {
            'mode': 'no-cors',
            headers: {
                
                "Access-Control-Allow-Origin": "*",
                "X-Accel-Buffering": "no",
                "Cache-Control": "no-cache",
                "Content-Type": "text/event-stream",
                /*"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                */"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
              },
        })
        .then((response) => {
            console.log("respuesta", JSON.stringify(response))
            // Code for handling the response
        })
        .catch((error) => {
        
            // Code for handling the error
        })
    }

    function doSearch(e) {
        const searchHeroName = e.target.value;

        setSearchText(searchHeroName)
        if (searchHeroName.length > 3) {
            searchHero();
        }
    }

  return (
    <div className={styles.search}>
        <input 
            id="inputSearch" 
            className={styles.searchInput} 
            placeholder="Type in your hero name" 
            onChange={doSearch} 
            value={searchText}
        />
    </div>
  )
}

