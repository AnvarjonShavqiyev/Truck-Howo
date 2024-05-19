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
              <h3>{counterOn && <CountUp start={0} end={25} duration={2} delay={0.5}/>}</h3>
              <p>{t('tajriba')}</p>
            </div>
            <div>
              <h3>{counterOn && <CountUp start={0} end={500} duration={3} delay={0.5}/>}+</h3>
              <p>{t('mijozlar')}</p>
            </div>
            <div>
              <h3>{counterOn && <CountUp start={0} end={30} duration={2} delay={0.5}/>}+</h3>
              <p>{t('hamkorlar')}</p>
            </div>
          </div>
          </ScrollTrigger>
          <div className='about-us-text'>
            <h4>Howo va Shacman og'ir yuk mashinalari uchun ehtiyot qismlar sotadigan online do'konimiz, yuqori sifatli mahsulotlar va mijozlar ehtiyojlarini qondirishga qaratilgan xizmatlari bilan faxrlanadi. 25 yillik tajribamiz davomida biz 500 dan ortiq mamnun mijozlar bazasini shakllantirdik va ularning ishonchini qozondik. Hozirda kompaniyamizning to'rt ta filiallari mavjud bo'lib, ular orqali mijozlarimizga qulay va tezkor xizmat ko'rsatamiz. Shuningdek, bizning 30 dan ortiq ishonchli hamkorlarimiz bilan mustahkam aloqalarimiz mavjud bo'lib, ular orqali biz eng sifatli va original ehtiyot qismlarni taqdim etamiz. Maqsadimiz – yuk mashinangizning har doim ishonchli va samarali ishlashini ta'minlashdir.</h4>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero