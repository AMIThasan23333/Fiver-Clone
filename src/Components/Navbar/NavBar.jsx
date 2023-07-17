import React, { useEffect, useState } from 'react'
import "./NavBar.scss";

const NavBar = () => {


    const [ active , setActive] = useState(false);

    const [ open , setOpen] = useState(false);

    const isActive = () => {

        window.scrollY > 0 ? setActive(true) : setActive(false)
    }


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
    <div className={active ? "navbar active" : "navbar"}>


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
           <span>GIGS</span>
           <span>Add New Gigs </span>
           </>
        )}
    
        <span>Orders</span>
        <span>Messages</span>
        <span>Logout</span>
    
    
        </div>
    } 

    </div>

    )}

          </div>
        
       </div>



     {  active &&
        <>
          <hr/>
     <div className="menu">
        <span>Test</span>
        <span>Test2</span>
     </div>
        </>

     }

    </div>
  )
}

export default NavBar