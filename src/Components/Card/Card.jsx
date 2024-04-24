import React from 'react'

export const Card = ({img,names}) => {
  return (
    <div>
        <img src={img} alt={names} />
            <h1>
              {names}  
            </h1>
    </div>
  )
}
