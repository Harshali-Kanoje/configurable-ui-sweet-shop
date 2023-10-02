import React from 'react'
import './Card.css'
import Button from '../Button/Button'

const Card = ({name , weight , price , img}) => {
  return (
    <div className='card-container'>
      <img src={img}/>
      <h1>{name}</h1>
      <div className='sweet-detail'>
      <p>{weight}</p>
      <span>Rs.{price}</span>
      </div>
      <Button/>
    </div>
  )
}

export default Card
