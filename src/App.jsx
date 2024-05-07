import './App.scss'
import Brands from './components/brands/Brands'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
function App() {
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

export default App
