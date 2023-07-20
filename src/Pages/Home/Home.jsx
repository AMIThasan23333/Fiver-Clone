import React from 'react'
import Featured from '../../Components/Featured/Featured'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'
import Sli from '../../Components/Sli/Sli'
import CatCard from '../../Components/CatCard/CatCard'

import {cards} from '../../data' 



const Home = () => {

  return (

    <div className="home">

    <Featured></Featured>
    <TrustedBy></TrustedBy>
    <Sli    slidesToShow ={5} arrowsScroll={5}>

            {

        cards.map(card   => (

          <CatCard    key={card.id} item={card}  />

        )) }

      


    </Sli>
  


    </div>
  )
}

export default Home