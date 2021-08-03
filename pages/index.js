//import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import DisplayHero from './displayHero'
import DisplayHeroes from './displayHeroes'
import DisplayTeam from './displayTeam'
import Navbar from './nabvar'
import Searchbar from './searchbar'

export default function Home() {
  
  const [name, setName] = useState('Frankie')
  console.log(name)

  function doSearch() {
    const searchInput = document.querySelector("#inputSearch").value  
    console.log(searchInput)
    
  }
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <span>Superhero</span> team builder
        </h1>

        <p className={styles.description}>
          You can start by adding someone to your team
        </p>
        <Searchbar />
        
        
        <div className={styles.grid}>
          <DisplayHeroes />  
        </div>

        <div className={styles.grid}>
          <DisplayTeam />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Coded by Francisco Chardin
        </a>
      </footer>
    </div>
  )
}
