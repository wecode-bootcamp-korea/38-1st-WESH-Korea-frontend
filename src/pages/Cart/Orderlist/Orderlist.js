import React, { useState } from 'react';
import './Orderlist.scss';

const Orderlist = ({
  orderproduct,
  checkProduct,
  totalPrice,
  setTotalPrice,
  orderData,
  deleteClick,
}) => {
  const { product_name, product_price } = orderproduct;
  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const [quantityNum, setQuantityNum] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  const checkedValue = e => {
    setIsChecked(e.target.checked);
  };

  const plus = e => {
    setTotalProductPrice(prev => parseInt(prev) + parseInt(product_price));
    setTotalPrice(totalPrice => parseInt(totalPrice) + parseInt(product_price));
    setQuantityNum(prev => prev + 1);
  };

  const minus = () => {
    if (totalPrice > 0) {
      setTotalProductPrice(prev => prev - product_price);
      setTotalPrice(totalPrice => totalPrice - product_price);
    }
    setQuantityNum(prev => prev - 1);
  };

  return (
    <div className="order-list">
      <input
        type="checkbox"
        className="box-tag"
        onClick={e => {
          checkProduct(e);
          checkedValue(e);
        }}
      />
      <div className="order-product-info">
        <div className="product-img">
          <img
            src="https://cdn.pixabay.com/photo/2019/11/23/08/09/sunscreen-4646527_1280.png"
            className="img-one"
          />
        </div>

        <span className="product_name">{product_name}</span>
      </div>
      <div className="order-quantity-btn">
        <button
          type="button"
          className="order-button-left"
          disabled={quantityNum === 0 ? true : false}
          onClick={isChecked === true && minus}
        >
          -
        </button>
        <input
          className="order-quantity"
          type="text"
          value={orderData + quantityNum - 1}
        />
        <button
          type="button"
          className="order-button-right"
          onClick={isChecked === true && plus}
        >
          +
        </button>
      </div>

      <div className="order-product-price">
        <span className="price">
          ￦ {product_price.slice(0, product_price.length - 4)}
        </span>
      </div>

      <div className="order-total">
        <div className="order-total-price">
          <span className="total">￦ {totalProductPrice}</span>
        </div>
        <div className="order-button-select">
          <button className="select" type="button" onClick={deleteClick}>
            선택 삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orderlist;
