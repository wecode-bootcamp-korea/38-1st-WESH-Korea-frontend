import React, { useEffect, useState } from 'react';
import './ReviewList.scss';

const ReviewList = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`/data/productdetail/data.json
      `)
      .then(res => res.json())
      .then(res => setReview(res));
  }, []);
  return (
    <>
      {review.map(review => {
        return (
          <div className="product-list-review-box">
            <div className="review-comment">
              <div className="review-title-box">
                <div className="review-time">
                  {review.time.slice(0, 10)}
                  <div className="review-star">★★★★★</div>
                </div>
              </div>
              <div className="review-message">제품리뷰</div>
            </div>
            <img
              src={review.img}
              className="bottom-review-img"
              alt="data-review-image"
            />
          </div>
        );
      })}
    </>
  );
};
export default ReviewList;
