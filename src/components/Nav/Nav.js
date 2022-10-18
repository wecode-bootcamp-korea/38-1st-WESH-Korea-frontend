import React, { useEffect, useState } from 'react';
import Navcategory from './Navcategory';
import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [data, setData] = useState([]);
  const [style, setStyle] = useState('navMenuListHover');
  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);
  const hover = e => {
    setStyle('navMenuList');
  };
  const leave = e => {
    setStyle('navMenuListHover');
  };
  return (
    <div className="nav">
      <div className="navBox">
        <div className="navCenter">
          <div className="navTop">
            <div className="logo">WESH</div>
            <ul className="category">
              <li className="li" onMouseEnter={hover}>
                제품
              </li>
              <li className="li">위쉬소개</li>
              <li className="li">매장안내</li>
              <li className="li">스파</li>
              <li className="li">이벤트</li>
            </ul>
            <div className="navRight">
              <img src="https://www.lush.co.kr/content/renewal/pc/images/ico/search.svg" />
              <img src="https://www.lush.co.kr/content/renewal/pc/images/ico/bag.svg" />
              <img src="https://www.lush.co.kr/content/renewal/pc/images/ico/account.svg" />
            </div>
          </div>
          <div className={style} onMouseEnter={hover} onMouseLeave={leave}>
            <ul className="navMenu">
              <Link to="/">
                <li className="lilist">전체상품</li>
              </Link>

              <Link to="/">
                <li className="lilist">스킨</li>
              </Link>

              <Link to="/">
                <li className="lilist">로션</li>
              </Link>

              <Link to="/">
                <li className="lilist">오일</li>
              </Link>

              <Link to="/">
                <li className="lilist">샴푸</li>
              </Link>
            </ul>
            <div className="navMock">
              {data &&
                data.map(e => (
                  <>
                    <Navcategory category={e.category} />
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
