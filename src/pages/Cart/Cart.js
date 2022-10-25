import React, { useEffect, useState } from 'react';
import Normal from '../Cart/Menutab/Normal';
import Mypage from '../Cart/Menutab/Mypage';
import './Cart.scss';
import Nav from '../../components/Nav/Nav';

const Cart = () => {
  const [orderData, setOrderData] = useState([]);
  // useEffect(() => {
  //   fetch('http://10.58.52.56:8000/cart', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => setOrderData(res));
  // }, []);
  useEffect(() => {
    fetch('/data/cart.json')
      .then(res => res.json())
      .then(res => setOrderData(res.data));
  }, []);
  // console.log(orderData);
  const [currentTab, setCurrentTab] = useState('normal');
  const cartList = {
    normal: <Normal orderData={orderData} />,
    page: <Mypage orderData={orderData} />,
  };
  return (
    <>
      <Nav />
      <div className="cart-page">
        <div className="wrap">
          <div className="page-title">
            <h2 className="cart-title">장바구니</h2>
          </div>

          <ul className="btn-normal">
            <li
              className="btn-normal-list"
              onClick={() => setCurrentTab('normal')}
            >
              일반배송
            </li>
            <li
              className="btn-normal-list"
              onClick={() => setCurrentTab('page')}
            >
              마이페이지
            </li>
          </ul>

          <div className="contents">{cartList[currentTab]}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
