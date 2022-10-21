import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
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
  const navigateAll = useNavigate();
  const goToAll = () => {
    navigateAll('/productlist/all?limit=16&offset=0');
  };
  const [searchParamsAll, setSearchPhamsAll] = useSearchParams();
  const goCategoryAll = () => {
    setSearchPhamsAll({});
    goToAll();
  };
  const navigateSoap = useNavigate();
  const goToSoap = () => {
    navigateSoap('/productlist/soap?limit=16&offset=0');
  };
  const [searchParamsSoap, setSearchPhamsSoap] = useSearchParams();
  const goCategorySoap = () => {
    setSearchPhamsSoap({});
    goToSoap();
  };
  const navigateLotion = useNavigate();
  const goToLotion = () => {
    navigateLotion('/productlist/lotion?limit=16&offset=0');
  };
  const [searchParamsLotion, setSearchPhamsLotion] = useSearchParams();
  const goCategoryLotion = () => {
    setSearchPhamsLotion({});
    goToLotion();
  };
  const navigateOil = useNavigate();
  const goToOil = () => {
    navigateOil('/productlist/oil?limit=16&offset=0');
  };
  const [searchParamsOil, setSearchPhamsOil] = useSearchParams();
  const goCategoryOil = () => {
    setSearchPhamsOil({});
    goToOil();
  };
  const navigatePerfume = useNavigate();
  const goToPerfume = () => {
    navigatePerfume('/productlist/perfume?limit=16&offset=0');
  };
  const [searchParamsPerfume, setSearchPhamsPerfume] = useSearchParams();
  const goCategoryPerfume = () => {
    setSearchPhamsPerfume({});
    goToPerfume();
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
              <button className="li-list" onClick={goCategoryAll}>
                전체상품
              </button>
              <button className="li-list" onClick={goCategorySoap}>
                비누
              </button>
              <button className="li-list" onClick={goCategoryLotion}>
                로션
              </button>
              <button className="li-list" onClick={goCategoryOil}>
                오일
              </button>
              <button className="li-list" onClick={goCategoryPerfume}>
                향수
              </button>
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
