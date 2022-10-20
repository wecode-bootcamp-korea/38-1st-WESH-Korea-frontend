import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Product from './Product/Product';
import Banner from './Banner';
import Nav from '../../components/Nav/Nav';
import './ProductList.scss';

const ProductList = () => {
  const [data, setData] = useState([]);
  const [tag, setTag] = useState([]);
  const [searchParams, setSearchPhams] = useSearchParams();

  useEffect(() => {
    fetch(`/data/productlist/data.json
    `)
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  // FIXME
  // const limit = searchParams.get('limit');
  // const start = searchParams.get('start');
  // /?start=${start}&limit=${limit}
  // [start,limit]

  useEffect(() => {
    fetch('/data/productlist/tag.json')
      .then(res => res.json())
      .then(res => setTag(res));
  }, []);

  const goPage = pageNumber => {
    searchParams.set('limit', 10);
    searchParams.set('start', (pageNumber - 1) * 10);
    setSearchPhams(searchParams);
  };

  return (
    <>
      <Nav />
      <div className="product-list">
        <Banner />
        <div className="list-page">
          <div className="menu-bar">
            <div className="filter">
              <div className="all">전체</div>
              <div className="perfume">향수</div>
              <div className="lotion">로션</div>
              <div className="oil">오일</div>
              <div className="soap">비누</div>
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
                title={e.title}
                img={e.img}
                price={e.price}
                tag={tag}
              />
            ))}
            <div className="button-click">
              <button onclick={() => goPage(1)} className="btn">
                1
              </button>
              <button onclick={() => goPage(2)} className="btn">
                2
              </button>
              <button onclick={() => goPage(3)} className="btn">
                3
              </button>
              <button onclick={() => goPage(4)} className="btn">
                4
              </button>
              <button onclick={() => goPage(5)} className="btn">
                5
              </button>
              <button onclick={() => goPage(5)} className="btn">
                ◀️
              </button>
              <button onclick={() => goPage(5)} className="btn">
                ▶️
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
