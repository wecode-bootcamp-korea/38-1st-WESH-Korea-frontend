import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import ProductTab from './ProductTab';
import Recommend from './Recommend';

const ProductDetail = () => {
  return (
    <div>
      <Nav />
      {/* <ProductTab /> */}
      <div className="recommend">
        <Recommend />
      </div>
    </div>
  );
};

export default ProductDetail;
