import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import ProductReview from './ProductReview';
import { API } from '../../config';

import './ProductTab.scss';

const ProductTab = ({ detail }) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [heart, setHeart] = useState('π€');
  const [currentTab, setCurrentTab] = useState('info');
  const { id } = useParams();
  const navigate = useNavigate();

  const mappingObje = {
    info: <ProductInfo info={detail[0]} />,
    review: <ProductReview review={detail.slice(1, detail.length)} />,
  };

  const user = {
    product_id: id,
    quantity: count,
  };

  const fetchSomething = () => {
    fetch(`${API.cart}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(user),
    });
  };

  const onClick = () => {
    if (localStorage.getItem('token')) {
      fetchSomething();
      alert(detail[0].title + 'μνμ΄ λ΄κ²Όμ΅λλ€~~');
    } else {
      alert('λ‘κ·ΈμΈ λ¨Όμ  ν΄μ£ΌμΈμ!~!~!~!');
      navigate('/SignIn');
    }
  };

  const up = () => setCount(count => count + 1);
  const down = () => setCount(count => (count !== 1 ? count - 1 : 0));
  //FIXME λ°±μλ μμ ν μμ 
  const buyClick = () => setPrice(detail[0].price * count);
  const onHeart = () => (heart === 'π€' ? setHeart('β€οΈ') : setHeart('π€'));

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
                  <div className="all-price-word">μ΄ ν©κ³ κΈμ‘</div>
                  <div className="all-price">
                    οΏ¦ {detail[0].price * count} μ
                  </div>
                </div>
                <div className="banner-payment">
                  <button className="heart" onClick={onHeart}>
                    {heart}
                  </button>
                  <button className="bag">
                    <Link to="/cart">β</Link>
                  </button>
                  <Link
                    className="buy"
                    onClick={onClick}
                    state={{ price: `${price}` }}
                  >
                    λ°λ‘κ΅¬λ§€
                  </Link>
                </div>
              </div>
            </div>
            <div className="menuTab">
              <ul className="tabs">
                <li onClick={() => setCurrentTab('info')}>μ νμ λ³΄</li>
                <li onClick={() => setCurrentTab('review')}>μ νλ¦¬λ·°</li>
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
