import React from 'react'
import './Hero.scss'
import { useTranslation } from 'react-i18next'
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
        <h3>Afzalliklarimiz</h3>
        <div className='adventages-wrapper'>
          
        </div>
      </div>
    </div>
  )
}

export default Hero