import React from 'react';
import './Products.scss';
import Container from '../../utils/Utils';
import products from '../../db/products';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const Products = () => {
    const data = products && products.products && Array.isArray(products.products) ? products.products : [];
    const {name} = useParams()
    const {t} = useTranslation()
    return (
        <div className='products__wrapper' style={name && {backgroundColor:"#fff"}} id='products'>
            <Container>
                <h3 className='section-title' style={name && {color:"#000"}}>{t('maxsulotlar')}</h3>
                <div className='category__wrapper'>
                    {data.map((category, index) => (
                        <div key={index} style={name && {border:"1px solid #000",padding:"10px",borderRadius:"15px"}} className="category-item">
                            <img className="category-img" src={category.img} alt={category.title}/>
                            <h4 className='category-title' style={name && {color:"#000"}} >{category.title}</h4>
                            <Link className='category-link' style={name && {color:"#000"}} to={`/${category.title}`}>{t('seeAll')} <IoIosArrowForward/></Link>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Products;
