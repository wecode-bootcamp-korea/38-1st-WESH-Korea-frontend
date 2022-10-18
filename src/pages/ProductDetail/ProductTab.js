import React, { useEffect, useState } from 'react';
import './ProductTab.scss';
const ProductTab = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/data/jung/detaildata.json
      `)
      .then(res => res.json())
      .then(res => setData(res[0]));
  }, []);
  console.log(data);
  return (
    <>
      {data ? (
        <div className="ProductTabBox">
          <div className="top">
            <img src={data.img} className="topImg" />
            <div className="right">
              <div className="bannerdetail">{data.detail}</div>
              <div className="bannerTitle">{data.title}</div>
              <div className="bannerPrice"> {data.price}</div>
              <div className="bannerPayment">
                <div className="heart">♡</div>
                <div className="bag">☗</div>
                <div className="buy">바로구매</div>
              </div>
            </div>
          </div>
          <div className="mid">
            <div className="midDetail">제품정보</div>
            <div className="middetail">제품후기</div>
          </div>
          <div className="bottom">
            <img src={data.img} className="bottomImg" />
            <div className="usage">{data.usage}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ProductTab;
