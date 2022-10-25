import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import ProductTab from './ProductTab';

const Productdetail = () => {
  //FIXME
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`/data/jung/data.json
  //   `)
  //     .then(res => res.json())
  //     .then(res => setData(res));
  // }, []);

  return (
    <div>
      <Nav />
      <ProductTab />
    </div>
  );
};

export default Productdetail;
