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
              <button>Search</button>
            </div>

          <div className="popular">
            <span>Popular</span>
            <span>Web Design</span>
            <span>WordPress</span>
            <span>Logo Design</span>
            <span>AI Services </span>
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