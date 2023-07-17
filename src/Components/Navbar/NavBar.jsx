import React from 'react'
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className='navbar'>

       <div className="container">
        <div className="logo">
            <span className='text'>Fiverr</span>
            <span className='dot'>.</span>
        </div>
          <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a Seller </span>
          <button>Join</button>

          </div>
        
       </div>
       <hr/>


     <div className="menu">
        <span>Test</span>
        <span>Test2</span>
     </div>

    </div>
  )
}

export default NavBar