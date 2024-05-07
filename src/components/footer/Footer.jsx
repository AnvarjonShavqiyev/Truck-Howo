import React from 'react'
import './Footer.scss'
import Container from '../../utils/Utils'
const Footer = () => {
  return (
    <div className='footer__wrapper'>
        <Container>
            <div id='contact' className='footer-info__wrapper'>
                <div>
                    <h3 className='adress'>Manzilimiz:</h3>
                    <p className='adress'>Toshkent shahar, Sergeli moshina bozori, avto ehtiyot qismlar 11/2-18 do’kon.</p>
                </div>
                <div>
                    <h3 className='adress'>Bizni tarmoqlarda kuzating:</h3>
                    
                </div>
                <div>
                    <h3 className='adress'>Biz bilan bog'laning:</h3>
                    <p>+998 91 770 43 34</p>
                    <p>+998 91 903 28 81</p>
                    <p>+998 90 021 22 11</p>
                </div>
            </div>
       
        </Container>
    </div>
  )
}

export default Footer