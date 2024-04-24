import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'


export const Main = () => {

    const URL='https://rickandmortyapi.com/api/character'

const [content, setContent] = useState([])


    useEffect(() => {
        
            fetch(URL)
            .then( response => response.json() )
            .then (data => {
                setContent (data.results)



                });
            },[content])

  return (
    <div>
       {
            content.map(character=> <Card
                key={id}
                img={character.image}
                names={character.name}
            
            />)
       }
    </div>
  )
}
