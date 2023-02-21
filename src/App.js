
import React from "react"
import { Route, Routes} from "react-router-dom"
import Announcement from './components/Announcement/Announcement.jsx';
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import { UserProvider } from "./context/userContext.js";
import Payment from "./components/Pay/Payment.jsx";
import SucessPayment from "./components/Pay/SucessPayment.jsx";

export default function App() {
  return (
    <div className="App main-container   w-screen h-screen " >
      <div className="links-container">
        <UserProvider>

          <Announcement />
          {/* <Navbars></Navbars> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserRegister" element={<Register />} />
            <Route path="/UserLogin" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pay" element={< Payment />} />
            <Route path="/sucesspayment" element={<SucessPayment />} />
            
          </Routes>
          {/* <Footer/> */}
        </UserProvider>

      </div>
    </div>
  )
}