import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navcategory from './Navcategory';
import './Nav.scss';
import Search from './Search';

const Nav = () => {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState('nav-menu-list-hover');
  const [searchTab, setSearchTab] = useState('none');

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

  const search = e => {
    setSearchTab('search');
  };

  const leaveSearch = e => {
    setSearchTab('none');
  };

  return (
    <div className="nav">
      <div className="nav-box">
        <div className="nav-event-box">
          <div className="nav-event">
            위시 상품 구매하고 무시무시한 과제 받기!
          </div>
        </div>
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
              <div className="nav-img-search" onClick={search}>
                <img src="https://www.lush.co.kr/content/renewal/pc/images/ico/search.svg" />
              </div>
              <Link to="/cart">
                <img src="https://www.lush.co.kr/content/renewal/pc/images/ico/bag.svg" />
              </Link>
              <Link to="/signin">
                <img src="https://www.lush.co.kr/content/renewal/pc/images/ico/account.svg" />
              </Link>
            </div>
          </div>
          <div className={searchTab} onMouseLeave={leaveSearch}>
            <Search searchTab={searchTab} />
          </div>
          <div className={tab} onMouseEnter={hover} onMouseLeave={leave}>
            <div className="nav-menu">
              <Link
                to={`/product-list/all?sort=best&offset=0&limit=16`}
                className="li-list"
              >
                전체상품
              </Link>
              <Link
                to={`/product-list/soap?sort=best&offset=0&limit=16`}
                className="li-list"
              >
                비누
              </Link>
              <Link
                to={`/product-list/lotion?sort=best&offset=0&limit=16`}
                className="li-list"
              >
                로션
              </Link>
              <Link
                to={`/product-list/oil?sort=best&offset=0&limit=16`}
                className="li-list"
              >
                오일
              </Link>
              <Link
                to={`/product-list/perfume?sort=best&offset=0&limit=16`}
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
