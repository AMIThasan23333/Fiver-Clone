import React from 'react'
import "./Featured.scss";
const Featured = () => {
  return (
    

    <div className="featured">
      <div className="container">
        <div className="left">
            <h1>Find the perfect freelance  <br/>services for your business</h1>
            <div className="search">
              <div className="searchInput">
  
           <img src="/src/img/search.png" alt="" srcset="" />
      <input type="text" name="" id="" placeholder='search here ' />
              </div>
              <button className='button'>Search</button>
            </div>

          <div className="popular">
            <span className='button'>Popular</span>
            <span className='button'>Web Design</span>
            <span className='button'>WordPress</span>
            <span className='button'>Logo Design</span>
            <span className='button'>AI Services </span>
          </div>


        </div>


        <div className="right">

        <img src="/src/img/man.png" alt="" srcset="" />


        </div>

      </div>
    </div>



  )
}

export default Featured