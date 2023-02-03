
import React from "react"
import { Route,Routes,BrowserRouter } from "react-router-dom"
// import Navbars from './components/Navbar/NavBar';
import Announcement  from './components/Announcement/Announcement.jsx';
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register";
//import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
export default function App() {
  return (
    <div className="App main-container   w-screen h-screen " >
      <div className="links-container">
        <BrowserRouter> 
          <Announcement />
          {/* <Navbars></Navbars> */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserRegister" element={<Register/>} />
            <Route path="/UserLogin" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
      </div>
    </div>
  )
}