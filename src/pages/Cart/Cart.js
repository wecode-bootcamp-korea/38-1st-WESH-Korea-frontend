import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="wrap">
        <div className="page-title">
          <h2 className="cart-title">장바구니</h2>
        </div>

        <ul className="btn-normal">
          <li className="btn-normal-list">일반배송 (0)</li>
          <li className="btn-normal-list">마이페이지</li>
        </ul>

        <div>
          <table className="table-head">
            <thead className="card-table-head">
              <tr className="table-row">
                <th>
                  <input type="checkbox" />
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
                  <span className="text">
                    장바구니에 담겨있는 제품이 없습니다.
                  </span>
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
              <strong className="text-weight">0 개</strong>
            </li>
            <li className="cart-price-text">
              <span className="cart-price-product">제품합계</span>
              <strong className="text-weight">￦ 0</strong>
            </li>
            <li className="shipping cart-price-text">
              <span className="cart-price-product">배송비</span>
              <strong className="text-weight">￦ 0</strong>
            </li>
            <li className="total-price cart-price-text">
              <span className="cart-price-product">주문금액</span>
              <strong className="text-weight">￦ 0</strong>
            </li>
          </ul>
        </div>
        <div className="notice">
          <p class="notice-text">*장바구니제품은 30일간 보관됩니다.</p>
          <p className="notice-text">
            *더 오래 보관하시려면
            <span className="love">[찜하기]</span>로 등록하세요.
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

export default Cart;
