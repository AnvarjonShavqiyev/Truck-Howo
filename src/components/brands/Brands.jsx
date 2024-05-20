import React from 'react'
import Container from '../../utils/Utils'
import './Brands.scss'
import holset from '../../assets/photo/holset.png'
import hutai from '../../assets/photo/hutai-logo.jpg'
import wabco from '../../assets/photo/logo-wabco.jpeg'
import qinyan from '../../assets/photo/qinyan-logo.jpg'
import sachs from '../../assets/photo/SACHS_original.webp'
import { useTranslation } from 'react-i18next'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Brands = () => {
  const { t } = useTranslation()
  const mapStyles = {
    height: "500px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 41.23228776566744,
    lng: 69.21575043819631
  };
  return (
    <Container>
      <div className='brands__wrapper' id='brands'>
        <h3 style={{fontSize:35, textAlign:'center',paddingTop:20}}>{t('brandlar')}</h3>
          <div className='all__brands'>
          <div className='brands'>
            <img src={holset}></img>
          </div>
          <div className='brands'>
            <img src={hutai}></img>
          </div>
          <div className='brands'>
            <img src={wabco}></img>
          </div>
          <div className='brands'>
            <img src={qinyan}></img>
          </div>
          <div className='brands'>
            <img src={sachs}></img>
          </div>
        </div>
      </div>
      <div className='google-map__wrapper'>
        <LoadScript googleMapsApiKey="AIzaSyD7R0Z4PmibH-7aVLDWrfNRiXiyvOss40Q">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={18}
            center={defaultCenter}
          />
        </LoadScript>
      </div>
    </Container>
  )
}

export default Brands