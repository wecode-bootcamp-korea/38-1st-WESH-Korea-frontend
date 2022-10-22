import React, { useEffect, useState } from 'react';
import './ReviewList.scss';

const ReviewList = props => {
  console.log(props.review);
  return (
    <>
      <div className="product-list-review-box">
        <div className="review-comment">
          <div className="review-title-box">
            <div className="review-star">★★★★★</div>
            <div className="review-time">
              {props.review.created_at.slice(0, 10)}
            </div>
          </div>
          <div className="review-message">{props.review.content}</div>
        </div>
        <img
          src={props.review.img}
          className="bottom-review-img"
          alt="data-review-image"
        />
      </div>
    </>
  );
};
export default ReviewList;
