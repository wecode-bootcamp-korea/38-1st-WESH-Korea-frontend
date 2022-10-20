import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import './ProductReview.scss';

const ProductReview = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch('./data/productdetail/detaildata.json')
      .then(res => res.json())
      .then(res => setReviewData(res));
  }, []);
  console.log(reviewData);

  return (
    <div className="review">
      {reviewData.map(reviewData => (
        <ReviewList
          key={reviewData.id}
          img={reviewData.img}
          title={reviewData.title}
        />
      ))}
    </div>
  );
};

export default ProductReview;