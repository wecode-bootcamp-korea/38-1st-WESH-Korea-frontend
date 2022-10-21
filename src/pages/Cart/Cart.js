import React, { useState } from 'react';
import Normal from '../../components/Menutab/Normal';
import Mypage from '../../components/Menutab/Mypage';
import './Cart.scss';

const Cart = () => {
  // const [currentTab, setCurrentTab] = useState('일반배송');
  const [currentTab, setCurrentTab] = useState('normal');
  const obj = {
    normal: <Normal />,
    page: <Mypage />,
  };
  return (
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
          <li className="btn-normal-list" onClick={() => setCurrentTab('page')}>
            마이페이지
          </li>
        </ul>

        <div className="contents">{obj[currentTab]}</div>
      </div>
    </div>
  );
};

export default Cart;
// const tab_arr = ['일반배송', '마이페이지'];

// const MAPPING_OBJ = {
//   First: <Normal />,
//   Second: <Mypage />,
// };
