import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navcategory from './Navcategory';
import './Nav.scss';

const Nav = () => {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState('nav-menu-list-hover');
  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);
  const hover = e => {
    setTab('nav-menu-list');
  };
  const leave = e => {
    setTab('nav-menu-list-hover');
  };

  return (
    <div className="nav">
      <div className="nav-box">
        <div className="nav-center">
          <div className="nav-top">
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
            <div className="nav-right">
              <img src="https://www.lush.co.kr/content/renewal/pc/images/ico/search.svg" />
              <img src="https://www.lush.co.kr/content/renewal/pc/images/ico/bag.svg" />
              <img src="https://www.lush.co.kr/content/renewal/pc/images/ico/account.svg" />
            </div>
          </div>
          <div className={tab} onMouseEnter={hover} onMouseLeave={leave}>
            <ul className="nav-menu">
              <Link to="/">
                <li className="li-list">전체상품</li>
              </Link>

              <Link to="/">
                <li className="li-list">스킨</li>
              </Link>

              <Link to="/">
                <li className="li-list">로션</li>
              </Link>

              <Link to="/">
                <li className="li-list">오일</li>
              </Link>

              <Link to="/">
                <li className="li-list">샴푸</li>
              </Link>
            </ul>
            <div className="nav-mock">
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
