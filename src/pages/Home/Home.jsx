import React from 'react'
import Brands from '../../components/brands/Brands'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Products/>
      <Brands/>
      <Footer/>
    </>
  )
}

export default Home