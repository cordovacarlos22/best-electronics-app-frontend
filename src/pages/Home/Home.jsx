import React from 'react'
import "./Home.css"
import Slider from '../../components/Slider/Slider'
import CategoryItem from '../../components/Category/CategoriesItem'
import Products from '../../components/Products/Products'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import FooterCompo from '../../components/FooterCompo/FooterCompo'
// import Register from '../Register/Register'
// import Announcement from '../../components/Announcement/Announcement'
import NavBar from '../../components/Navbar/NavBar'
const Home = () => {
  return (
    <div className='home '>
      {/* <Announcement />
       */}
      <NavBar></NavBar>
      <Slider/>
      <CategoryItem/>
      <Products/>
      <Newsletter/>
      <FooterCompo/>
      <Footer/>
    </div>
    
  )
}

export default Home