import React, { useEffect, useState } from 'react';
import './ProductInfo.scss';

const ProductInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`/data/productdetail/detaildata.json
      `)
      .then(res => res.json())
      .then(res => setInfo(res));
  }, []);

  return (
    <>
      {info.map(infoData => {
        return (
          <div className="bottom-info">
            <img
              src={infoData.img}
              className="bottom-info-img"
              alt="data-detail-image"
            />
            <div className="usage">{infoData.usage}</div>
          </div>
        );
      })}
    </>
  );
};
export default ProductInfo;
