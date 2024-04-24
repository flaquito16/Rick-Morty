import React, { useEffect, useState } from 'react'
import { content } from '../Content/Content'
import { Card } from '../Card/Card'


export const Main = () => {
const [url, setUrl] = useState("https://rickandmortyapi.com/api/character")
const [content, setContent] = useState([])


    useEffect(() => {
        function getApi(URL) {
            fetch(URL)
            .then( response => response.json() )
            .then (data => {
                data.results.forEach(character => {
                    createCard(character)
                });
            })
        }
        
    
      return () => {
        second
      }
    }, [])
    

  return (
    <div>
       {
       
        content.map(card=>(
            <Card
            
                img={card.img}
                name={card.name}
            
            />
        ))

       }
    </div>
  )
}
