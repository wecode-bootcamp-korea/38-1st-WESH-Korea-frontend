import React, { useEffect, useState } from 'react';
import ProductInfo from './ProductInfo';
import ProductReview from './ProductReview';
import './ProductTab.scss';

const ProductTab = () => {
  const [data, setData] = useState([]);
  const [currentTab, setCurrentTab] = useState('제품정보');

  useEffect(() => {
    fetch(`/data/productdetail/detaildata.json
      `)
      .then(res => res.json())
      .then(res => setData(res[0]));
  }, []);

  const mappingObje = {
    info: <ProductInfo />,
    review: <ProductReview />,
  };

  return (
    <div className="product-tab">
      {data && (
        <div className="Product-tabBox">
          <div className="top">
            <img src={data.img} className="top-img" alt="data-main-image" />
            <div className="right">
              <div className="banner-detail">{data.detail}</div>
              <div className="banner-title">{data.title}</div>
              <div className="banner-price"> {data.price}</div>
              <div className="banner-payment">
                <button className="heart">♡</button>
                <button className="bag">☗</button>
                <button className="buy">바로구매</button>
              </div>
            </div>
          </div>
          <div className="menuTab">
            <ul className="tabs">
              <li onClick={() => setCurrentTab('info')}>제품정보</li>
              <li onClick={() => setCurrentTab('review')}>제품리뷰</li>
            </ul>
            <div className="contents">{mappingObje[currentTab]}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductTab;
