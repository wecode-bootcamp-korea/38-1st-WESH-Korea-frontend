import React, { useEffect, useState } from 'react';
import Normal from '../Cart/Menutab/Normal';
import Mypage from '../Cart/Menutab/Mypage';
import { API } from '../../config';
import './Cart.scss';

const Cart = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetch(`${API.cart}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => setOrderData(res.data));
  }, []);

  const handleDeleteCart = id => {
    const changed = orderData.filter(order => order.product_id !== id);
    setOrderData(changed);
  };

  const [currentTab, setCurrentTab] = useState('normal');
  const cartList = {
    normal: (
      <Normal
        orderData={orderData}
        setOrderData={setOrderData}
        onDelete={handleDeleteCart}
      />
    ),
    page: <Mypage orderData={orderData} />,
  };
  return (
    <>
      {orderData && (
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
      )}
    </>
  );
};

export default Cart;
