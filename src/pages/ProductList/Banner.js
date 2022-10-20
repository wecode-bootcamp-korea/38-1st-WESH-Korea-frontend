import React from 'react';
import './Banner.scss';

const Banner = () => {
  // FIXME
  // const [img, setImg] = useState();
  // useEffect(
  //   () =>
  //     fetch('data/jung/bannerimg')
  //       .then(res => res.json())
  //       .then(res => setImg(res)),
  //   []
  // );

  return (
    <div className="banner">
      <img
        className="banner-image"
        src="https://www.lush.co.kr/upload/CATEGORY/2_20211215134805.jpg"
        alt="banner-image"
      />
      <div className="banner-commnet">
        <div className="banner-title">SKIN</div>
        <div className="banner-message">
          누구나 좋아하는 인기 제품을 만나 보세요!
        </div>
      </div>
    </div>
  );
};

export default Banner;
