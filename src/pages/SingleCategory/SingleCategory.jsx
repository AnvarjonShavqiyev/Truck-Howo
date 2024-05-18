import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../db/products';
import './SingleCategory.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Container from '../../utils/Utils';
import { ConfigProvider, Pagination } from 'antd';
import Tooltip from '@mui/material/Tooltip';
const SingleCategory = () => {
  const { name } = useParams();
  const [category, setCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(name);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([])
  const pageSize = 8;

  useEffect(() => {
    const filteredCategory = data.products.find((product) => currentCategory === product.title);
    if (filteredCategory) {
      setCategory(filteredCategory.data);
    }
  }, [currentCategory]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setCurrentPageData(category.slice(startIndex, endIndex))
  },[currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    window.history.pushState({}, '', `/${selectedCategory}`);
    setCurrentCategory(selectedCategory);
    setCurrentPage(1);
  };

  

  return (
    <div>
      <Navbar />
      <div className="single-cat-header__wrapper">
        <Container>
          <div className="single-cat__header">
            <h4 className="single-category-title">{currentCategory}</h4>
            <select className="single-cat-selection" value={currentCategory} onChange={handleChange}>
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
        <div className="single-cat__wrapper">
          <div className="all__products__wrapper">
            {currentPageData.map((product, index) => (
              <div className="product__wrapper" key={index}>
                <img src={product.img} alt={product.name} />
                <Tooltip title={product.name} arrow>
                  <h4>{product.name.length <= 24 ? product.name : product.name.slice(0,24)+'...'}</h4>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination-wrapper">
          <ConfigProvider>
            <Pagination
              current={currentPage}
              defaultPageSize={pageSize}
              total={category.length}
              onChange={handlePageChange}
            />
          </ConfigProvider>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default SingleCategory;
