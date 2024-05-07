import React from 'react'
import './Hero.scss'
import { useTranslation } from 'react-i18next'
import Container from '../../utils/Utils'
import clock from '../../assets/photo/clock.svg'
import check from '../../assets/photo/time.svg'
import deleviry from '../../assets/photo/yetkazish.svg'
const Hero = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='hero__wrapper'>
        <div className='hero-information'>
            <h3>{t('hero-information')}</h3>
            <button>{t('extiyot-qismlar')}</button>
        </div>
        <div className='hero-background'></div>
      </div>
      <div className='adventages'>
        <Container>
          <h3>Afzalliklarimiz</h3>
          <div className='adventages-wrapper'>
            <div>
              <img src={check}></img>
              <strong>Yuqori sifatli mahsulot</strong>
              <p>Arzon narxlarda yuqori sifatli mahsulotlar sotib olish</p>
            </div>
            <div>
              <img src={clock}></img>
              <strong>24 soat xizmat</strong>
              <p>Operatorlarimiz siz bilan doimiy aloqada</p>
            </div>
            <div>
              <img src={deleviry}></img>
              <strong>Express etkazib berish</strong>
              <p>Siz aytga manzilga ham yetqazamiz</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero