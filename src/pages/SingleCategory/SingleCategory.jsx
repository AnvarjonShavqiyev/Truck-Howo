import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../db/products';
import './SingleCategory.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
const SingleCategory = () => {
  const { name } = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const newData = data.products.filter(product => name === product.title);
    setCategory(newData[0]);
  }, [name]);
  console.log(category)
  return (
    category.data && 
    <div>
      <Navbar/>
      {/* <Products/> */}
      <div className='single-cat__wrapper'>
        <h4 className='single-category-title'>{category.title}</h4>
        <div className='all__products__wrapper'>
          {category.data.map((product, index) => (
            <div className='product__wrapper' key={index}>
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SingleCategory;
