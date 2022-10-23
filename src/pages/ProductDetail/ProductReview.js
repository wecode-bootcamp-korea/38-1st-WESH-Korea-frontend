import ReviewList from './ReviewList';

import './ProductReview.scss';

const ProductReview = ({ review }) => {
  return (
    <div className="review">
      {review.map(reviewData => (
        <ReviewList review={reviewData} />
      ))}
    </div>
  );
};

export default ProductReview;
