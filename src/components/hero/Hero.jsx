import React, { useState } from 'react'
import './Hero.scss'
import { useTranslation } from 'react-i18next'
import Container from '../../utils/Utils'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const Hero = () => {
  const [counterOn, setCounterOn] = useState(false);
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
          <h3 style={{fontSize:35, textAlign:'center',paddingTop:20}}>{t('bizHaqimizda')}</h3>
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <div className='about-us'>
            <div>
              <h3>{counterOn && <CountUp start={0} end={4} duration={2} delay={0.5}/>}</h3>
              <p>{t('filiallar')}</p>
            </div>
            <div>
              <h3>{counterOn && <CountUp start={0} end={3} duration={2} delay={0.5}/>}</h3>
              <p>{t('tajriba')}</p>
            </div>
            <div>
              <h3>{counterOn && <CountUp start={0} end={500} duration={3} delay={0.5}/>}+</h3>
              <p>{t('mijozlar')}</p>
            </div>
            <div>
              <h3>{counterOn && <CountUp start={0} end={10} duration={2} delay={0.5}/>}+</h3>
              <p>{t('hamkorlar')}</p>
            </div>
          </div>
          </ScrollTrigger>
        </Container>
      </div>
    </div>
  )
}

export default Hero