import React from 'react'

export const Card = ({img,name}) => {
  return (
    <div>
        <img src={img} alt="" />
            <h1>
              {name}  
            </h1>
    </div>
  )
}
