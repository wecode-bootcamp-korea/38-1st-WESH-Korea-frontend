import ReviewList from './ReviewList';

import './ProductReview.scss';

const ProductReview = props => {
  return (
    <div className="review">
      {props.review.map(reviewData => (
        <ReviewList review={reviewData} />
      ))}
    </div>
  );
};

export default ProductReview;
