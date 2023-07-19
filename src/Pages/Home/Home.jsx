import React from 'react'
import Featured from '../../Components/Featured/Featured'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'
import Sli from '../../Components/Sli/Sli'
import CatCard from '../../Components/CatCard/CatCard'





const Home = () => {

  return (

    <div className="home">

    <Featured></Featured>
    <TrustedBy></TrustedBy>
    <CatCard></CatCard>
  


    </div>
  )
}

export default Home