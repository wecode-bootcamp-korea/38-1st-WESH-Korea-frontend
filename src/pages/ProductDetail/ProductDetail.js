import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductTab from './ProductTab';
import { API } from '../../config';

import Nav from '../../components/Nav/Nav';

const Productdetail = () => {
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API.detail}/${id}
      `)
      .then(res => res.json())
      .then(res => {
        setDetail(res.detailPageData);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return;

  return (
    <div>
      <Nav />
      <ProductTab detail={detail} />
    </div>
  );
};

export default Productdetail;
