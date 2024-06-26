import React from 'react'
import './Footer.scss'
import Container from '../../utils/Utils'
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { VscHubot } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const {t}=useTranslation()
  return (
    <div className='footer__wrapper'>
        <Container>
            <div id='contact' className='footer-info__wrapper'>
                <div>
                    <h3 className='adress'>{t('manzil')}:</h3>
                    <p className='adress'>{t('location')}</p>
                </div>
                <div>
                    <h3 className='adress'>{t('kuzating')}:</h3>
                    <div className='social-links'>
                        <Link to='https://t.me/TRUCKHOWO'><FaTelegram/></Link>
                        <Link to='https://instagram.com/truckhowo.uz?igshid=NTc4MTIwNjQ2YQ=='><FaSquareInstagram/></Link>
                        <Link to='https://t.me/TRUCKHOWO_BOT'><VscHubot/></Link>
                    </div>
                </div>
                <div>
                    <h3 className='adress'>{t('boglaning')}:</h3>
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