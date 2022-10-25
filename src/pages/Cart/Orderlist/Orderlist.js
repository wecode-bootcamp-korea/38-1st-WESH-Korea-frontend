import React, { useState } from 'react';
import './Orderlist.scss';

const Orderlist = ({
  orderproduct,
  checkedCount,
  checkProduct,
  totalPrice,
  setTotalPrice,
  orderData,
}) => {
  const { product_name, product_quantity, product_price, product_img } =
    orderproduct;
  const [totalProductPrice, setTotalProductPrice] = useState(product_price);
  const [quantityNum, setQuantityNum] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const checkedValue = e => {
    setIsChecked(e.target.checked);
  };

  console.log(isChecked);

  const sumTotalPrice = () => {};

  const plus = e => {
    // if (isChecked === true) {
    //   setTotalProductPrice(prev => parseInt(prev) + parseInt(product_price));
    //   setTotalPrice(
    //     totalPrice => parseInt(totalPrice) + parseInt(product_price)
    //   )}else if(isChecked !== ture)
    //   setQuantityNum(prev => prev + 1);
    // } else if (isChecked === false) {

    // }
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
          onClick={minus}
        >
          -
        </button>
        <input
          className="order-quantity"
          type="text"
          value={orderData + quantityNum}
        />
        <button type="button" className="order-button-right" onClick={plus}>
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
          <span className="total">
            ￦ {totalProductPrice.slice(0, totalProductPrice.length - 4)}
          </span>
        </div>
        <div className="order-button-select">
          <button className="select" type="button">
            선택 삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orderlist;
