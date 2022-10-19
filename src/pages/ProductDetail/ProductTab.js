import React, { useEffect, useState } from 'react';
import ProductInfo from './ProductInfo';
import ProductReview from './ProductReview';
import './ProductTab.scss';

const ProductTab = () => {
  const [data, setData] = useState([]);
  const [currentTab, setCurrentTab] = useState('제품정보');

  useEffect(() => {
    fetch(`/data/jung/productdetail/detaildata.json
      `)
      .then(res => res.json())
      .then(res => setData(res[0]));
  }, []);

  return (
    <>
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
              {tabArr.map((tab, index) => (
                <li key={index} onClick={() => setCurrentTab(tab)}>
                  {tab}
                </li>
              ))}
            </ul>
            <div className="contents">{mappingObj[currentTab]}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductTab;

const tabArr = ['제품정보', '제품리뷰'];
const mappingObj = {
  제품정보: <ProductInfo />,
  제품리뷰: <ProductReview />,
};
