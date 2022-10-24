import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import ProductReview from './ProductReview';
import './ProductTab.scss';

const ProductTab = props => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [heart, setHeart] = useState('🖤');
  const [currentTab, setCurrentTab] = useState('info');
  // const { id } = useParams();
  // const token = localStorage.getItem('token');
  // const goCart = useNavigate();
  // const gologin = useNavigate();

  const mappingObje = {
    info: <ProductInfo info={props.detail[0]} />,
    review: (
      <ProductReview review={props.detail.slice(1, props.detail.length)} />
    ),
  };

  // const TOKEN = localStorage.getitem('token');

  // TOKEN
  // ?

  // const fetchSomething = () => {
  //   useEffect(
  //     fetch('/', {
  //       method: 'POST',
  //       headers: {
  //         Autorization: TOKEN,
  //         product_id: props.detail[0].id,
  //         quantity: { count },
  //       },
  //       body: JSON.stringify(),
  //     })
  //       .then(res => {
  //         if (res.ok === true) {
  //           return res.json();
  //         }
  //         throw new Error('통신실패!');
  //       })
  //       .then(res => {
  //         if (TOKEN) {
  //           alert(props.detail[0].title + '상품이 담겼습니다~~');
  //           goCart('/cart');
  //         } else {
  //           alert('로그인 먼저 해주세요!~!~!~!');
  //           gologin('/login');
  //         }
  //       }),
  //     []
  //   )
  //     }
  // : null;

  const up = () => {
    setCount(count + 1);
  };

  const down = () => {
    count !== 1 && setCount(count - 1);
  };

  const buyClick = () => {
    setPrice(props.detail[0].price * count);
  };

  const onHeart = () => {
    heart === '🖤' ? setHeart('❤️') : setHeart('🖤');
  };

  console.log(props.detail[0]);
  return (
    <>
      {props.detail[0] && (
        <div className="product-tab">
          <div className="Product-tabBox">
            <div className="top">
              <img
                src={props.detail[0].img}
                className="top-img"
                alt="data-main-image"
              />
              <div className="right">
                <div className="banner-detail">{props.detail[0].detail}</div>
                <div className="banner-title">{props.detail[0].title}</div>
                <div className="banner-price-box">
                  <div className="banner-price-box-width">
                    <div className="banner-price">
                      {props.detail[0].price * count}
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
                    ￦ {props.detail[0].price * count} 원
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
