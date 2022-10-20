import React, { useEffect, useState } from 'react';
import './ProductInfo.scss';

const ProductInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/data/productdetail/detaildata.json
      `)
      .then(res => res.json())
      .then(res => setData(res[0]));
  }, []);

  return (
    <div className="bottom">
      <img src={data.img} className="bottom-img" alt="data-detail-image" />
      <div className="usage">{data.usage}</div>
    </div>
  );
};
export default ProductInfo;
