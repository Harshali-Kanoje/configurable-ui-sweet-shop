import React from 'react'
import sweet from './Images/sweet-home-img.webp'
import './Home.css'
import config from './../../utils/config.json'
import Card from '../../component/Card/Card'

const Home = () => {
  return (
    <div>
      <div>
        <h1>{config.title}</h1>
        <img src={sweet} className='home-img'/>
        <h2>{config.headign}</h2>
        <div className='sweetProductContainer'>
            
            {
            config.services.map((sweetsData,index) => {
                const {title , description , price , img} = sweetsData
                return(
                    <div className='sweetProduct'>
                        <Card title={title} description={description} price={price} img={img}/>
                    </div>
                )
            })
            }
        </div>
      </div>
    </div>
  )
}

export default Home
