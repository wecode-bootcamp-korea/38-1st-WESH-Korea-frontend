import React, { useCallback, useEffect, useState } from 'react';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import Product from './Product/Product';
import Banner from './Banner';
import Nav from '../../components/Nav/Nav';
import './ProductList.scss';

const ProductList = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState('');
  const [searchParams, setSearchPhams] = useSearchParams();
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');
  const params = useParams();
  const categoryData = params.categories;

  useEffect(() => {
    fetch(
      `http://10.58.52.93:3000/productlist/${categoryData}?offset=${offset}&limit=${limit}`
    )
      .then(res => res.json())
      .then(res => setData(res.data));
  }, [offset, limit]);

  const goPage = pageNumber => {
    searchParams.set('limit', 16);
    searchParams.set('offset', (pageNumber - 1) * 16);
    setSearchPhams(searchParams);
  };

  const goCategoryAll = () => {
    window.location.replace('/productlist/all?limit=16&offset=0');
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
  const [, updatestate] = useState();
  const update = useCallback(() => updatestate({}), []);
  return (
    <>
      <Nav />
      <div className="product-list">
        <Banner />
        <div className="list-page">
          <div className="menu-bar">
            <div className="filter">
              <div className="all">
                <button className="link" onClick={goCategoryAll}>
                  전체상품
                </button>
                <button className="link" onClick={goCategorySoap}>
                  비누
                </button>
              </div>
              <div className="lotion">
                <button className="link" onClick={goCategoryLotion}>
                  로션
                </button>
                <button className="link" onClick={goCategoryOil}>
                  오일
                </button>
              </div>
              <div className="soap">
                <button className="link" onClick={goCategoryPerfume}>
                  향수
                </button>
              </div>
            </div>
            <select class="order">
              <option className="order-best">인기순</option>
              <option className="order-low">낮은 가격순</option>
              <option className="order-high">높은 가격순</option>
              <option className="order-review">리뷰 많은순</option>
            </select>
          </div>
          <div className="page-box">
            {data.map(e => (
              <Product
                key={e.id}
                id={e.id}
                title={e.title}
                img={e.img}
                price={e.price}
                tag={e.tags}
                category={e.category}
                num={num}
              />
            ))}
          </div>
          <div className="button-click">
            <button onClick={() => goPage(1)} className="btn">
              1
            </button>
            <button onClick={() => goPage(2)} className="btn">
              2
            </button>
            <button onClick={() => goPage(3)} className="btn">
              3
            </button>
            <button onClick={() => goPage(4)} className="btn">
              4
            </button>
            <button onClick={() => goPage(5)} className="btn">
              ◀️
            </button>
            <button onClick={() => goPage(5)} className="btn">
              ▶️
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
