import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import Container from '../../utils/Utils';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n'; 

const Navbar = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'UZ');

  const changeLang = (selectedLang) => {
    setLang(selectedLang);
    localStorage.setItem('lang', selectedLang);
  };

  useEffect(() => {
    i18n.changeLanguage(lang).catch(error => console.error('Error changing language:', error));
  }, [lang]);

  return (
    <div className='navbar__wrapper'>
      <Container>
        <div className='navbar' id='main'>
          <div>
            <h1 className='logo'>Truck Howo</h1>
          </div>
          <ul className='navbar__menu'>
            <li className='navbar__items'><a href='#aboutus'>{t('bizHaqimizda')}</a></li>
            <li className='navbar__items'><a href='#products'>{t('maxsulotlar')}</a></li>
            <li className='navbar__items'><a href='#main'>{t('asosiy')}</a></li>
            <li className='navbar__items'><a href='#brands'>{t('brandlar')}</a></li>
            <li className='navbar__items'><a href='#contact'>{t('contact')}</a></li>
          </ul>
          <div>
            <select
              value={lang}
              onChange={(e) => changeLang(e.target.value)}
              className='lang-select'
            >
              <option value='UZ' className='lang-option'>
                UZ
              </option>
              <option value='RU' className='lang-option'>
                RU
              </option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
