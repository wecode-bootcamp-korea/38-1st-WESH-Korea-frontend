import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import './ProductReview.scss';

const ProductReview = ({ reviewData }) => {
  return (
    <div className="review">
      {reviewData.map(reviewData => (
        <ReviewList review={reviewData} />
      ))}
    </div>
  );
};

export default ProductReview;
