import React from 'react';
import './Orderlist.scss';

const Orderlist = () => {
  return (
    <div>
      <table>
        <thead className="order-head">
          <tr className="list-top">
            <th>
              <input type="checkbox" />
            </th>
            <th>제품 정보</th>
            <th>수량</th>
            <th>금액</th>
            <th>합계금액</th>
          </tr>
        </thead>
        <tbody>
          <tr className="order-test">
            <td className="check">
              <input className="box-tag" type="checkbox" />
            </td>
            <td className="img-test">
              <img
                className="img-one"
                src="https://cdn.pixabay.com/photo/2019/09/25/20/24/nowyjork-4504629__480.jpg"
                alt="img"
              />
            </td>
            <td className="product-name">
              <span>이름</span>
            </td>
            <td className="button-left">
              <button type="button">-</button>
            </td>
            <td className="quantity">
              <input type="text" defaultValue="1" />
            </td>
            <td className="button-right">
              <button type="button">+</button>
            </td>
            <td className="price">￦22,000</td>
            <td className="total">￦22,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orderlist;
