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
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero