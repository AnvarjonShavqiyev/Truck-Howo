import React from 'react';
import './Products.scss';
import Container from '../../utils/Utils';
import products from '../../db/products';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Products = () => {
    const data = products && products.products && Array.isArray(products.products) ? products.products : [];
    
    return (
        <div className='products__wrapper' id='products'>
            <Container>
                <h3 className='section-title'>Maxsulotlarimiz</h3>
                <div className='category__wrapper'>
                    {data.map((category, index) => (
                        <div key={index} className="category-item">
                            <img className="category-img" src={category.img} alt={category.title}/>
                            <h4 className='category-title'>{category.title}</h4>
                            <Link className='category-link' to={`/${category.title}`}>Hammasini ko'rish <IoIosArrowForward/></Link>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Products;
