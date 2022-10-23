import React from 'react';

import './Best.scss';

const Best = ({ id, img, title, price, best }) => {
  return (
    <div className="best">
      <img className="best-item-img" src={img} alt={best} />
      <div className="best-title">{title}</div>
      <div className=" best-price">{price}</div>
    </div>
  );
};

export default Best;
