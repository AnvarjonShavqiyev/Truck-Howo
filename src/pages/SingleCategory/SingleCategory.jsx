import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../db/products';
import './SingleCategory.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Container from '../../utils/Utils';
const SingleCategory = () => {
  const { name } = useParams();
  const [category, setCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(name)
  useEffect(() => {
    const newData = data.products.filter(product => currentCategory === product.title);
    setCategory(newData[0]);
  }, [name, currentCategory]);
  const handleChange = (event) => {
    console.log(1)
    setCurrentCategory(event.target.value);
  };
  console.log(category)
  return (
    category.data && 
    <div>
      <Navbar/>
      <div className='single-cat-header__wrapper'>
        <Container>
          <div className='single-cat__header'>
          <h4 className='single-category-title'>{category.title}</h4>
          <select className='single-cat-selection' value={currentCategory} onChange={handleChange}>
            <option value="Аксессуар">Аксессуар</option>
            <option value="Тормозные части">Тормозные части</option>
            <option value="Фильтра">Фильтра</option>
            <option value="Кузовные детали">Кузовные детали</option>
            <option value="Электрические запчасти">Электрические запчасти</option>
            <option value="Запчасти для ДВС">Запчасти для ДВС</option>
          </select>
          </div>
        </Container>
      </div>
      <Container>
      <div className='single-cat__wrapper'>
        <div className='all__products__wrapper'>
          {category.data.map((product, index) => (
            <div className='product__wrapper' key={index}>
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
            </div>
          ))}
        </div>
      </div>
      </Container>
      <Footer/>
    </div>
  );
};

export default SingleCategory;
