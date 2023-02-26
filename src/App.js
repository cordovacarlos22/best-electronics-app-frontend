
import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Announcement from './components/Announcement/Announcement.jsx';
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./components/Cart";
import { UserProvider } from "./context/userContext.js";
import { CartProvider } from './context/cartContext';
import Payment from "./components/Pay/Payment.jsx";
import SucessPayment from "./components/Pay/SucessPayment.jsx";
import Products from "./components/Products/Products.jsx";
import ProductList from "./components/Products/ProductList.jsx";
// import NavBars from "./components/Navbar/NavBar.jsx";
export default function App() {

  return (
    <div className="App main-container   w-screen h-screen " >
      <div className="links-container">
        <BrowserRouter>
          <UserProvider>
            <CartProvider>

              <Announcement />
              {/* <NavBars /> */}
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/pay" element={< Payment />} />
                <Route path="/sucesspayment" element={<SucessPayment />} />
                <Route path="/products" element={<Products />} />
                <Route path="/productslist" element={<ProductList />} />
                <Route path="/products/:id" element={<Products />} />
                <Route path="/UserRegister" element={<Register />} />
                <Route path="/UserLogin" element={<Login />} />

              </Routes>
              {/* <Footer/> */}
            </CartProvider>
          </UserProvider>

        </BrowserRouter>
      </div>
    </div>
  )
}