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
  const [isChecked, setIsChecked] = useState(false);
  const [quantityNum, setQuantityNum] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const sumTotalPrice = () => {};
  const plus = () => {
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
      <input type="checkbox" className="box-tag" onClick={checkProduct} />
      <div className="product-info">
        <img
          src="https://cdn.pixabay.com/photo/2019/11/23/08/09/sunscreen-4646527_1280.png"
          alt="test"
          className="img-one"
        />
        <span className="product_name">{product_name}</span>
      </div>
      <div className="quantity-btn">
        <button
          type="button"
          className="button-left"
          disabled={quantityNum === 0 ? true : false}
          onClick={minus}
        >
          -
        </button>
        <input
          className="quantity"
          type="text"
          value={orderData + quantityNum}
        />
        <button type="button" className="button-right" onClick={plus}>
          +
        </button>
      </div>

      <div className="product_price">
        <span className="price">
          ￦ {product_price.slice(0, product_price.length - 4)}
        </span>
      </div>
      <div className="total_price">
        <span className="total">￦ {totalProductPrice}</span>
      </div>
    </div>
  );
};

export default Orderlist;
