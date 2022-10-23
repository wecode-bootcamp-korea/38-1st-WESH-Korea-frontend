import React, { useState, useEffect } from 'react';
import '../Orderlist/Orderlist';
import Orderlist from '../Orderlist/Orderlist';
const Normal = () => {
  const [orderData, setOrderData] = useState([]);
  const [checkedCount, setCheckedCount] = useState(0);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [checkedArr, setCheckedArr] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const checkProduct = e => {
    //  console.log(e.target.checked);
    const { checked } = e.target;
    checked
      ? setCheckedCount(count => count + 1)
      : setCheckedCount(count => count - 1);
  };
  const deliveryFee = 2500;

  const changeAllCheck = e => {
    if (e.target.checked) {
      setIsCheckAll(true);
    } else {
      setIsCheckAll(false);
      setCheckedArr([]);
    }
  };

  useEffect(() => {
    fetch('./data/cart.json')
      .then(res => res.json())
      .then(res => setOrderData(res));
  }, []);

  return (
    <div className="cart-page">
      <div className="wrap">
        <div className="contents">
          <table className="table-head">
            <thead className="card-table-head">
              <tr className="table-row">
                <th>
                  <input
                    type="checkbox"
                    onClick={e => changeAllCheck(e)}
                    checked={isCheckAll}
                  />
                </th>
                <th>제품 정보</th>
                <th>수량</th>
                <th>금액</th>
                <th>합계금액</th>
              </tr>
            </thead>
            <tbody className="card-table-body">
              <tr className="table-row">
                <td className="table-data">
                  {orderData.map(orderproduct => {
                    return (
                      <Orderlist
                        key={orderproduct.product_id}
                        orderproduct={orderproduct}
                        checkedCount={checkedCount}
                        checkProduct={checkProduct}
                        setTotalPrice={setTotalPrice}
                        totalPrice={totalPrice}
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
        <div className="button-select">
          <button className="select" type="button">
            선택 삭제
          </button>
          <button className="like" type="button">
            선택 찜하기
          </button>
        </div>
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
              <strong className="text-weight">￦ {deliveryFee}</strong>
            </li>
            <li className="total-price cart-price-text">
              <span className="cart-price-product">주문금액</span>
              <strong className="text-weight">
                ￦ {totalPrice !== 0 ? totalPrice + deliveryFee : 0}
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
