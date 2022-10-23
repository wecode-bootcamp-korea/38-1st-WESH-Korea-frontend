import React, { useState } from 'react';
import './Orderlist.scss';

const Orderlist = ({
  orderproduct,
  checkedCount,
  checkProduct,
  totalPrice,
  setTotalPrice,
}) => {
  const { product_name, product_quantity, product_price, product_img } =
    orderproduct;
  const [totalProductPrice, setTotalProductPrice] = useState(product_price);
  const [isChecked, setIsChecked] = useState(false);
  const [num, setNum] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const sumTotalPrice = () => {};
  // console.log(checkedCount);

  // plus 버튼
  const plus = () => {
    setTotalProductPrice(prev => prev + product_price);
    setTotalPrice(totalPrice => totalPrice + product_price);
    setNum(prev => prev + 1);
  };

  // minus 버튼
  const minus = () => {
    if (totalPrice > 0) {
      setTotalProductPrice(prev => prev - product_price);
      setTotalPrice(totalPrice => totalPrice - product_price);
    }
    setNum(prev => prev - 1);
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
          disabled={num === 0 ? true : false}
          onClick={minus}
        >
          -
        </button>
        <input className="quantity" type="text" value={num} />
        <button type="button" className="button-right" onClick={plus}>
          +
        </button>
      </div>

      <div className="product_price">
        <span className="price">￦ {product_price}</span>
      </div>
      <div className="total_price">
        <span className="total">￦ {totalProductPrice}</span>
      </div>
    </div>
  );
};

export default Orderlist;