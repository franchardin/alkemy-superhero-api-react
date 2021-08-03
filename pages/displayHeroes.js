import Head from 'next/head'
import React from 'react'
import styles from '../styles/DisplayHeroes.module.css'
import DisplayHero from './displayHero'

export default function displayHeroes(props) {

  const { superheroData } = props
  
  console.log("Data from props got to displayheros!", superheroData)
  let superheroDataString = JSON.stringify({superheroData});
  console.log("Superherostring", typeof superheroDataString);
  
  let superheroDataArray = JSON.parse(superheroDataString);
  console.log("SuperheroObj", typeof superheroDataArray);
  

  let superheroDataResultsArray = superheroData.data.results;
  console.log("Results Array?", typeof superheroDataResultsArray);
  console.log("Results Array?", superheroDataResultsArray);
  return (
      <div>
        {superheroDataResultsArray.map(superhero => {
          <DisplayHero data={superhero} />
        })}
      </div>
  )
}