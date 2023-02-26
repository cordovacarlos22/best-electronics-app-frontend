import React,{ useContext, useEffect, useState } from 'react'
import "./Home.css"
import Slider from '../../components/Slider/Slider'
import CategoryItem from '../../components/Category/CategoriesItem'
import Products from '../../components/Products/Products'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import FooterCompo from '../../components/FooterCompo/FooterCompo'
import NavBar from '../../components/Navbar/NavBar'
import Login from '../Login/Login'
import { UserContext } from '../../context/userContext';
import { accountInfo } from '../../services/user.service';
const Home = () => {
  const { token } = useContext(UserContext)

  const [nombre, setNombre] = useState("...")

  const laodAccountInfo = async (token) => {
    const user = await accountInfo(token);
    if (user.status === 200) {
      setNombre(user.data);
    }
  }

  useEffect(() => {
    if (token != null)
      laodAccountInfo(token)
  }, [token])

  if (token != null) {
    return (
      <div className='home'>
        <NavBar></NavBar>
        <Slider/>
        <CategoryItem />
        <Products />
        <Newsletter />
        <FooterCompo />
        <Footer />
      </div>
    )
  } else {
    return (
      <Login />
    )
  }

}

export default Home