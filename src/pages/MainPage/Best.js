import React from 'react';

import './Best.scss';

const Best = ({ id, bestImg, bestTitle, bestPrice, best }) => {
  return (
    <div className="best">
      <img className="best-item-img" src={bestImg} alt={best} />
      <div className="best-title">{bestTitle}</div>
      <div className=" best-price">{bestPrice}</div>
    </div>
  );
};

export default Best;
