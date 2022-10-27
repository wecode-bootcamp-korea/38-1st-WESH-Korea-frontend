import './ReviewList.scss';

const ReviewList = ({ review }) => {

  return (
    <>
      <div className="product-list-review-box">
        <div className="review-comment">
          <div className="review-title-box">
            <div className="review-star">★★★★★</div>
            <div className="review-time">{review.created_at.slice(0, 10)}</div>
          </div>
          <div className="review-message">{review.content}</div>
        </div>
        <div className="bottom-review-img-box">
          <img
            src={review.img}
            className="bottom-review-img"
            alt="data-review-image"
          />
        </div>
      </div>
    </>
  );
};
export default ReviewList;
