import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/DisplayHero.module.css'

export default function displayHero() {

  return (
      <div className={styles.heroCard}>
        <div className="left"></div>
        <div>
        <img src="https://www.superherodb.com/pictures2/portraits/10/100/1111.jpg"></img>
        </div>
        <div className="right"></div>
        <h1>Name of super</h1>
        <div className={styles.heroPowerstats}>
          <div>intelligence: 88</div>
          <div>strength: 11</div>
          <div>speed: 33</div>
          <div>durability: 40</div>
          <div>power: 34</div>
          <div>combat: 90</div>
        </div>
      </div>
  )
}
    
    
