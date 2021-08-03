import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/DisplayHero.module.css'

export default function displayHero(props) {

  const { data } = props;
  console.log("!!!!!!!From display hero", data)

  return (
      <div className={styles.heroCard}>
        <div className="left"></div>
        <div>
        <img src={data.image.url} alt="`${data.name}-image`"></img>
        </div>
        <div className="right"></div>
        <h1>{data.name}</h1>
        <div className={styles.heroPowerstats}>
          <div>intelligence: {data.powerstats.intelligence}</div>
          <div>strength: {data.powerstats.strength}</div>
          <div>speed: {data.powerstats.speed}</div>
          <div>durability: {data.powerstats.durability}</div>
          <div>power: {data.powerstats.power}</div>
          <div>combat: {data.powerstats.combat}</div>
        </div>
      </div>
  )
}
    
    
