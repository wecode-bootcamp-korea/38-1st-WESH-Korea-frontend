import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import ProductReview from './ProductReview';

import './ProductTab.scss';

const ProductTab = ({ detail }) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [heart, setHeart] = useState('🖤');
  const [currentTab, setCurrentTab] = useState('info');

  const mappingObje = {
    info: <ProductInfo info={detail[0]} />,
    review: <ProductReview review={detail.slice(1, detail.length)} />,
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

  const onHeart = () => {
    heart === '🖤' ? setHeart('❤️') : setHeart('🖤');
  };

  return (
    <>
      {detail[0] && (
        <div className="product-tab">
          <div className="Product-tabBox">
            <div className="top">
              <img
                src={detail[0].img}
                className="top-img"
                alt="data-main-image"
              />
              <div className="right">
                <div className="banner-detail">{detail[0].detail}</div>
                <div className="banner-title">{detail[0].title}</div>
                <div className="banner-price-box">
                  <div className="banner-price-box-width">
                    <div className="banner-price">
                      {detail[0].price * count}
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
                <div className="all-price-box">
                  <div className="all-price-word">총 합계 금액</div>
                  <div className="all-price">
                    ￦ {detail[0].price * count} 원
                  </div>
                </div>
                <div className="banner-payment">
                  <button className="heart" onClick={onHeart}>
                    {heart}
                  </button>
                  <button className="bag">
                    <Link to="/">✓</Link>
                  </button>
                  <Link
                    to="/"
                    className="buy"
                    onClick={buyClick}
                    state={{ price: `${price}` }}
                  >
                    바로구매
                  </Link>
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
        </div>
      )}
    </>
  );
};
export default ProductTab;
