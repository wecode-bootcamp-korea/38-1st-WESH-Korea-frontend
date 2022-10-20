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
              src="https://images.unsplash.com/photo-1546552768-9e3a94b38a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="bottom-info-img"
              alt="data-detail-image"
            />
            <div className="star-box">
              <div className="info-message"># 전국 1등 상품</div>
              <div className="info-review">"위쉬가 너무 좋아요~~~~"</div>
              <div className="info-review">"위쉬 쯔ㅏㅇ!!!!~~"</div>
              <div className="info-review">"위쉬 제품만 사요!!!~~~~"</div>
            </div>
            <div className="info-bottom-box">
              <img
                alt="info-bottom-img"
                className="info-bottom-img"
                src="https://images.unsplash.com/photo-1603533627544-4b256401b1ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <div className="usage">{infoData.usage}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ProductInfo;
