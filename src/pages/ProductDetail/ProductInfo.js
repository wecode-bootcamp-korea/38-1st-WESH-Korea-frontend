import './ProductInfo.scss';

const ProductInfo = ({ info }) => {

  return (
    <div className="product-info-box">
      <div className="bottom-info">
        <video className="video" autoPlay muted loop>
          <source
            type="video/mp4"
            src="https://static.videezy.com/system/resources/previews/000/013/493/original/Water_69_-_4K_res.mp4"
            alt="video"
          />
        </video>
        <div className="video-detail-box">
          <div className="video-detail">
            위시 <span>최고의</span> 제품!
            <div className="pointer"> #{info.title}</div>
          </div>
          <div className="video-detail">
            우리는 동물 실험을 하지 <span>않는</span> 회사와 거래를 하고,
          </div>
          <div className="video-detail">인체에 직접 테스트함으로써 </div>
          <div className="video-detail">
            <span>안전한</span> 제품을 만들 수 있다고 믿습니다.
          </div>
        </div>
        <div className="info-img-box">
          <img
            src={info.img}
            className="bottom-info-img"
            alt="data-detail-image"
          />
          <div className="star-box">
            <div className="info-message-box">
              <div className="star">★★★★★</div>
              <div className="info-message"># 전국 1등 상품</div>
              <div className="info-review">
                * WESH 직원 맴버들이 작성한 리뷰입니다.
              </div>
            </div>
            <div className="info-review-star-box">
              <div className="info-review">
                몽글몽글 뭉게구름처럼 기분 좋은 향기가
              </div>
              <div className="info-review">나를 꼭 안아주죠</div>
              <div className="info-review">by. WESH</div>
            </div>
          </div>
        </div>
        <div className="info-bottom-box">
          <div className="info-bottom-usage-box">
            <div className="usage-box">
              <div className="usage-comment">사용 방법</div>
              <div className="usage">{info.manual}</div>
            </div>
            <img
              alt="info-usage-img"
              className="info-usage-img"
              src="https://images.unsplash.com/photo-1505528638251-3ef301e4988e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            />
          </div>

          <div className="info-footer-box">
            <img
              alt="info-bottom-img"
              className="info-bottom-img"
              src="https://images.unsplash.com/photo-1527635619717-589e8a5d7b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
            />
            <div className="usage-box">
              <div className="usage">
                동물과 자연과 사람이 조화롭게 공존하는 세상을 바라는
              </div>
              <div className="usage">
                러쉬 비즈니스의 중심에는 강력한 브랜드 윤리가 자리 잡고
                있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
