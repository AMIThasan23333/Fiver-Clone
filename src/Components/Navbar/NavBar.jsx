import React, { useEffect, useState } from 'react'
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {

    const [ active , setActive] = useState(false);
    const [ open , setOpen] = useState(false);


/* pathname ei vabe likte hoi  */

    const {pathname } = useLocation();
    
    console.log(pathname);
    

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    };




    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return() => {        
            window.removeEventListener("scroll", isActive)
        }
    })


    const currentUser = {
        id : 1,
        userName : "John Doe",
        isSeller : true,
    }




  return (
    <div className={(active || pathname !== "/") ? "navbar active" : "navbar"}>


       <div className="container">
        <div className="logo">
      
      <Link to='/' className='link'>
      <span >Fiverr</span>
      </Link>

            <span className='dot'>.</span>
        </div>
          <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
       {!currentUser ?.isSeller &&    <span>Become a Seller </span>}
    {!currentUser &&  <button>Join</button>}

    {currentUser && (

     <div className='user' onClick={() => setOpen(!open)}>    

   <img src="https://unsplash.com/photos/2uiWqCazp20" alt="" sizes="" srcset="" />  
   <span>{currentUser?.userName}</span>  

    {
        open &&    <div className="options">
    
        {currentUser?.isSeller  && (
    
           
           <>
           <Link className='link' to='/mygigs'>GIGS</Link>
           <Link className='link' to='/add'>Add New Gigs </Link>
           </>
        )}
    
        <Link className='link' to='/orders'>Orders</Link>
        <Link className='link' to='/messages'>Messages</Link>
        <Link className='link' to='/'>Logout</Link>
    
    
        </div>
    } 

    </div>

    )}

          </div>
        
       </div>



     {  (active || pathname !== "/")&&
        <>
          <hr/>
     <div className="menu">
      
      <Link to='' className='link menulink'>
      Graphic & Design
      </Link>
      <Link to='' className='link menulink'>
      Writting & Translation
      </Link>
      <Link to='' className='link menulink'>
      AI Services
      </Link>
      <Link to='' className='link menulink'>
     Digital Marketting
      </Link>

      <Link to='' className='link menulink'>
    Music & Audio
      </Link>

         
      <Link to='' className='link menulink'>
      Programming & Tech 
      </Link>


      <Link to='' className='link menulink'>
      LifeStyle 
      </Link>




     </div>
        </>

     }

    </div>
  )
}

export default NavBar