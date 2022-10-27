import React, { useState } from 'react';
import Orderlist from '../Orderlist/Orderlist';
import './Normal.scss';

const Normal = ({ orderData, onDelete }) => {
  const [checkedCount, setCheckedCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState();

  const checkProduct = e => {
    const { checked } = e.target;
    checked
      ? setCheckedCount(count => count + 1)
      : setCheckedCount(count => count - 1);
  };

  const DELIVERY_FEE = 2500;
  return (
    <div className="cart-page">
      <div className="wrap">
        <div className="contents">
          <table className="table-head">
            <thead className="card-table-head">
              <tr className="order-table-head">
                <th>제품 정보</th>
                <th>수량</th>
                <th>금액</th>
                <th>합계금액</th>
              </tr>
            </thead>
            <tbody className="order-card-table-body">
              <tr className="order-table-row">
                <td className="order-table-data">
                  {orderData.map(orderproduct => {
                    return (
                      <Orderlist
                        key={orderproduct.product_id}
                        orderproduct={orderproduct}
                        checkProduct={checkProduct}
                        setTotalPrice={setTotalPrice}
                        totalPrice={totalPrice}
                        orderData={orderproduct.product_quantity}
                        onDelete={onDelete}
                      />
                    );
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="button-select" />
        <div className="cart-price">
          <ul className="cart-price-list">
            <li className="cart-price-text">
              <span className="cart-price-product">선택제품</span>
              <strong className="text-weight">{checkedCount} 개</strong>
            </li>
            <li className="cart-price-text">
              <span className="cart-price-product">제품합계</span>
              <strong className="text-weight">
                ￦<span> {totalPrice}</span>
              </strong>
            </li>
            <li className="shipping cart-price-text">
              <span className="cart-price-product">배송비</span>
              <strong className="text-weight">￦ {DELIVERY_FEE}</strong>
            </li>
            <li className="total-price cart-price-text">
              <span className="cart-price-product">주문금액</span>
              <strong className="text-weight">
                ￦
                {totalPrice === undefined
                  ? DELIVERY_FEE
                  : totalPrice + DELIVERY_FEE}
              </strong>
            </li>
          </ul>
        </div>
        <div className="notice">
          <p className="notice-text">*장바구니제품은 30일간 보관됩니다.</p>
          <p className="notice-text">
            *더 오래 보관하시려면
            <span className="love"> [찜하기]</span>로 등록하세요.
          </p>

          <p className="notice-text">
            *장바구니제품이 품절되면 자동으로 목록에서 삭제됩니다.
          </p>
        </div>
        <div className="button-bottom">
          <button className="white-button" type="button">
            쇼핑 계속하기
          </button>
          <button className="black-button" type="button">
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Normal;
