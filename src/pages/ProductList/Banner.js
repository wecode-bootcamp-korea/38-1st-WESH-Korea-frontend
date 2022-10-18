import React from 'react';
import './Banner.scss';
const Banner = () => {
  // const [img, setImg] = useState();
  // useEffect(
  //   () =>
  //     fetch('data/jung/bannerimg')
  //       .then(res => res.json())
  //       .then(res => setImg(res)),
  //   []
  // );
  return (
    <>
      <img
        className="banner"
        src="https://www.lush.co.kr/upload/CATEGORY/2_20211215134805.jpg"
      />
      <div className="bannerCommnet">
        <div className="bannerTitle">SKIN</div>
        <div className="bannerMessage">
          누구나 좋아하는 인기 제품을 만나 보세요!
        </div>
      </div>
    </>
  );
};
export default Banner;
