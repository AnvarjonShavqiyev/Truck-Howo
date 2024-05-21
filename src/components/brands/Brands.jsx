import React, { useEffect, useState } from 'react'
import Container from '../../utils/Utils'
import './Brands.scss'
import holset from '../../assets/photo/holset.png'
import hutai from '../../assets/photo/hutai-logo.jpg'
import wabco from '../../assets/photo/logo-wabco.jpeg'
import qinyan from '../../assets/photo/qinyan-logo.jpg'
import sachs from '../../assets/photo/SACHS_original.webp'
import { useTranslation } from 'react-i18next'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import address from '../../db/addres'
const Brands = () => {
  const [filial, setFilial] = useState('filial1')
  const [adress,setAdress] = useState(address[0])
  const { t } = useTranslation()
  
  const handleChange = (event) => {
    setFilial(event.target.value)
  }

  useEffect(() => {
    setAdress(address.filter((manzil) => manzil.name === filial)[0])
  },[filial])

  const mapStyles = {
    height: "500px",
    width: "100%"
  };

  const defaultCenter = {
    lat: adress.lat,
    lng: adress.lng
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
        <div className='map-header'>
          <h4>Hududni tanlang: </h4>
          <select className="single-cat-selection" value={filial} onChange={handleChange}>
              <option value="filial1">Toshkent shahri</option>
              <option value="filial2">Toshkent viloyati</option>
              <option value="filial3">Samarqand viloyati</option>
              <option value="filial4">Surxandaryo viloyati</option>
            </select>
        </div>
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