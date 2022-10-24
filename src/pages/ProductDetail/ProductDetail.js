import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductTab from './ProductTab';
import Recommend from './Recommend';

import Nav from '../../components/Nav/Nav';

const ProductDetail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://10.58.52.112:8000/product/${id}
      `)
      .then(res => res.json())
      .then(res => setDetail(res.detailPageData));
  }, [id]);

  return (
    <div>
      <Nav />
      {detail && (
        <>
          <ProductTab detail={detail} />
          <div className="recommend">
            <Recommend detail={detail} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
