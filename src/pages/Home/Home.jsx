import React from 'react'
import "./Home.css"
import Slider from '../../components/Slider/Slider'
import CategoryItem from '../../components/Category/CategoriesItem'
import Products from '../../components/Products/Products'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home '>
      home
      <Slider/>
      <CategoryItem/>
      <Products/>
      <Newsletter/>
      <Footer />

    </div>
    
  )
}

export default Home