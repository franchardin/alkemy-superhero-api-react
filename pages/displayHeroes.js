import Head from 'next/head'
import React from 'react'
import styles from '../styles/DisplayHeroes.module.css'
import DisplayHero from './displayHero'

export default function displayHeroes(props) {

  const { superheroData } = props
  console.log("Data from props got to displayheros!", superheroData)

  return (
      <div>
        {console.log(superheroData)}
        {superheroData.map(superhero => 
          <DisplayHero data={superhero} />
        )}
      </div>
  )
}
    
    
