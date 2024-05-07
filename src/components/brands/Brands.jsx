import React from 'react'
import Container from '../../utils/Utils'
import './Brands.scss'
import holset from '../../assets/photo/holset.png'
import hutai from '../../assets/photo/hutai-logo.jpg'
import wabco from '../../assets/photo/logo-wabco.jpeg'
import qinyan from '../../assets/photo/qinyan-logo.jpg'
import sachs from '../../assets/photo/SACHS_original.webp'

const Brands = () => {
  return (
    <Container>
      <div className='brands__wrapper' id='brands'>
        <h3 style={{fontSize:35, textAlign:'center',paddingTop:20}}>Brandlar</h3>
          <div className='all__brands'>
          <div className='brands'>
            <img src={holset}></img>
          </div>
          <div className='brands'>
            <img src={hutai}></img>
          </div>
          <div className='brands'>
            <img src={wabco}></img>
          </div>
          <div className='brands'>
            <img src={qinyan}></img>
          </div>
          <div className='brands'>
            <img src={sachs}></img>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Brands