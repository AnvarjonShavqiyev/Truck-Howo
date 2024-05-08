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
      <div id='aboutus' className='hero__wrapper'>
        <div className='hero-information'>
            <h3>{t('hero-information')}</h3>
            <a href='#products'>{t('extiyot-qismlar')}</a>
        </div>
        <div className='hero-background'></div>
      </div>
      <div className='adventages'>
        <Container>
          <h3 style={{fontSize:35, textAlign:'center',paddingTop:20}}>Biz haqimizda</h3>
          <div className='about-us'>
            <div>
              <h3>4</h3>
              <p>{t('filiallar')}</p>
            </div>
            <div>
              <h3>3</h3>
              <p>{t('tajriba')}</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>{t('mijozlar')}</p>
            </div>
            <div>
              <h3>10+</h3>
              <p>{t('hamkorlar')}</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero