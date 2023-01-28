
import React from "react"
import { Route,Routes,BrowserRouter } from "react-router-dom"
import Navbars from './components/Navbar/NavBar';
import Announcement  from './components/Announcement/Announcement.jsx';
import Home from "./pages/Home/Home"
export default function App() {
  return (
    <div className="App main-container   w-screen h-screen " >
      <div className="links-container">
        <BrowserRouter> 
          <Announcement />
          <Navbars></Navbars>
          
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}