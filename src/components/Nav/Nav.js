import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navcategory from './Navcategory';
import './Nav.scss';

const Nav = () => {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState('nav-menu-listHover');

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
            <Link to="/" className="logo">
              WESH
            </Link>
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
            <div className="nav-menu">
              <Link
                to={`/productlist/all?offset=0&limit=16`}
                className="li-list"
              >
                전체상품
              </Link>
              <Link
                to={`/productlist/soap?offset=0&limit=16`}
                className="li-list"
              >
                비누
              </Link>
              <Link
                to={`/productlist/lotion?offset=0&limit=16`}
                className="li-list"
              >
                로션
              </Link>
              <Link
                to={`/productlist/oil?offset=0&limit=16`}
                className="li-list"
              >
                오일
              </Link>
              <Link
                to={`/productlist/perfume?offset=0&limit=16`}
                className="li-list"
              >
                향수
              </Link>
            </div>
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
