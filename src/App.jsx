import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBar from "./Components/Navbar/NavBar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import Gigs from "./Pages/Gigs/Gigs"
import Gig from "./Pages/Gig/Gig"
import Order from "./Pages/Orders/Order"
import Add from "./Pages/Add/Add"
import Message from "./Pages/Message/Message"
import Messages from "./Pages/Messages/Messages"
import MyGigs from "./Pages/MyGigs/MyGigs"
import "./app.scss"

function App() {


  const Layout = () => {
    return (
      <div className="app">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };


  const router = createBrowserRouter([
      {
        path : "/",
        element :<Layout></Layout>,
        
        children : [


          {
            path : "/",
            element : <Home></Home>
           },

       {
        path : "/gigs",
        element : <Gigs></Gigs>
       },


       {
        path : "/gig/:id",
        element : <Gig></Gig>
       },



       {
        path : "/orders",
        element : <Order></Order>
       },



       {
        path : "/mygigs",
        element : <MyGigs></MyGigs>
       },

       {
        path : "/add",
        element : <Add></Add>
       },


       {
        path : "/messages",
        element : <Messages></Messages>
       },

       {
        path : "/message/:id",
        element : <Message></Message>
       },
  
        ]
      }
  ])



  return (

    <div>

      <RouterProvider  router={ router}/>
     
    </div>
  )
}

export default App
