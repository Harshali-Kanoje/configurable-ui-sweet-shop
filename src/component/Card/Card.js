import React from 'react'

const Card = ({title , description , price , img}) => {
  return (
    <div>
      <img src={img}/>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>Rs.{price}</span>
    </div>
  )
}

export default Card
