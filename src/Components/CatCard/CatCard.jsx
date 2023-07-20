import React from 'react'
import { Link } from 'react-router-dom'
import './CatCard.scss'
const CatCard = ({item}) => {

  console.log(item.desc);


  return (


    <Link to='/gig/123'>

    <div className="catCard">
      <img src={item.img} alt="" sizes="" srcset="" />
      <span className='desc'>{item.desc}</span>
      <span className='desc'>{item.title}</span>

    </div>

    </Link>
  )
}

export default CatCard