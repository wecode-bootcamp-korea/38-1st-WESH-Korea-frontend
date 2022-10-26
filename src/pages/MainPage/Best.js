import React from 'react';
import { Link } from 'react-router-dom';

import './Best.scss';

const Best = ({ id, img, title, price, best }) => {
  return (
    <div className="best">
      <Link to={`/product-detail/${id}`}>
        <img className="best-item-img" src={img} alt={best} />
      </Link>
      <div className="best-title">{title}</div>
      <div className=" best-price">{price}</div>
    </div>
  );
};

export default Best;
