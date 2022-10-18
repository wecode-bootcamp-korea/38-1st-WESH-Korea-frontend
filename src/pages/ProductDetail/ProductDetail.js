import React, { useEffect, useState } from 'react';
import ProductTab from './ProductTab';
const ProductDetail = () => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`/data/jung/data.json
  //   `)
  //     .then(res => res.json())
  //     .then(res => setData(res));
  // }, []);
  return (
    <>
      <div>
        <ProductTab />
      </div>
    </>
  );
};
export default ProductDetail;
