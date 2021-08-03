import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/DisplayHero.module.css'

export default function displayHero(props) {

  const { data } = props;
  const [display, setDisplay] = useState({display: 'none'});

  function showHeroDetails() {
    console.log("hero details")
  }

  function addHero() {
    console.log("added hero")
  }

  return (
    
      <div  className={styles.heroCard} 
        onMouseEnter={e => {
          setDisplay({display: 'block'});
      }}
      onMouseLeave={e => {
          setDisplay({display: 'none'})
      }}>
        <div className={styles.left} style={display} onClick={showHeroDetails}>?</div>
        <div>
          <div>
          <img src={data.image.url} alt="`${data.name}-image`"></img>
          </div>
          <h1>{data.name}</h1>
          <p>{data.biography['full-name']}</p>
          <div className={styles.heroPowerstats}>
            <h5>Stats</h5>
            <div>Intelligence: {data.powerstats.intelligence}</div>
            <div>Strength: {data.powerstats.strength}</div>
            <div>Speed: {data.powerstats.speed}</div>
            <div>Durability: {data.powerstats.durability}</div>
            <div>Power: {data.powerstats.power}</div>
            <div>Combat: {data.powerstats.combat}</div>
          </div>
        </div>
        <div className={styles.right} style={display} onClick={addHero}>+</div>
        </div>
  )
}
    
    
