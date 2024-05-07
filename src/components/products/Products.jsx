import React from 'react';
import './Products.scss';
import Container from '../../utils/Utils';
import products from '../../db/products.json';

const Products = () => {
    const data = products.products;
    console.log(data);
    return (
        <div className='products__wrapper' id='products'>
            <Container>
                <h3 className='section-title'>Maxsulotlarimiz</h3>
                <div className='category__wrapper'>
                    {
                       data.map((category,index) => (
                           <div key={index}>
                                <img className="category-img" src={category.img} alt={category.title} />
                                <h4 className='category-title'>{category.title}</h4>
                                {/* <Link></Link> */}
                           </div>
                       ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Products;
