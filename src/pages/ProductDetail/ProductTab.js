import React, { useEffect, useState } from 'react';
import ProductInfo from './ProductInfo';
import ProductReview from './ProductReview';
import './ProductTab.scss';

const ProductTab = () => {
  const [detail, setDetail] = useState([]);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [currentTab, setCurrentTab] = useState('제품정보');

  useEffect(() => {
    fetch(`/data/productdetail/detaildata.json
      `)
      .then(res => res.json())
      .then(res => setDetail(res));
  }, []);

  const mappingObje = {
    info: <ProductInfo />,
    review: <ProductReview />,
  };

  const up = () => {
    setCount(count + 1);
  };
  const down = () => {
    count !== 1 && setCount(count - 1);
  };

  const buyClick = () => {
    setPrice(detail[0].price * count);
  };

  return (
    <div className="product-tab">
      {detail.map(detailInfo => {
        return (
          <div key={detailInfo.id} className="Product-tabBox">
            <div className="top">
              <img
                src={detailInfo.img}
                className="top-img"
                alt="data-main-image"
              />
              <div className="right">
                <div className="banner-detail">{detailInfo.detail}</div>
                <div className="banner-title">{detailInfo.title}</div>
                <div className="banner-price-box">
                  <div className="banner-price-box-width">
                    <div className="banner-price">
                      {detailInfo.price * count}
                    </div>
                    <div className="button-box">
                      <button className="plus" onClick={up}>
                        +
                      </button>
                      <div className="count">{count}</div>
                      <button className="mius" onClick={down}>
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <div className="banner-payment">
                  <button className="heart">♡</button>
                  <button className="bag">☗</button>
                  <button className="buy" onClick={buyClick}>
                    바로구매
                  </button>
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
        );
      })}
    </div>
  );
};
export default ProductTab;
