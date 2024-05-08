import React from 'react'
import './Footer.scss'
import Container from '../../utils/Utils'
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { VscHubot } from "react-icons/vsc";
import { Link } from 'react-router-dom';
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
                    <div className='social-links'>
                        <Link to='https://t.me/TRUCKHOWO'><FaTelegram/></Link>
                        <Link to='https://instagram.com/truckhowo.uz?igshid=NTc4MTIwNjQ2YQ=='><FaSquareInstagram/></Link>
                        <Link to='https://t.me/TRUCKHOWO_BOT'><VscHubot/></Link>
                    </div>
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