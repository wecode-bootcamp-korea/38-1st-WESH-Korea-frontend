import React, { useEffect, useState } from 'react';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import Product from './Product/Product';
import Banner from './Banner';

import Nav from '../../components/Nav/Nav';
import './Product-list.scss';

const Product-list = () => {
  const [product-data, setProduct-data] = useState([]);
  const [searchParams, setSearchPhams] = useSearchParams();
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');
  const [sort, setSort] = useState('high');
  const { categories } = useParams();

  useEffect(() => {
    fetch(
      `http://10.58.52.125:3000/product-list/${categories}?sort=${sort}&offset=${offset}&limit=${limit}`
    )
      .then(res => res.json())
      .then(res => setProduct-data(res.data));
  }, [offset, limit, categories, sort]);

  const goPage = pageNumber => {
    searchParams.set('limit', PAGELIMIT);
    searchParams.set('offset', (pageNumber - 1) * PAGELIMIT);
    setSearchPhams(searchParams);
  };

  const goSort = e => {
    setSort(e.target.value);
  };

  return (
    <>
      <Nav />
      {product-data && (
        <div className="product-list">
          <Banner />
          <div className="list-page">
            <div className="menu-bar">
              <div className="filter">
                <div className="all">
                  <Link
                    to={`/product-list/all?sort=best&offset=0&limit=16`}
                    className="link"
                  >
                    전체상품
                  </Link>
                  <Link
                    to={`/product-list/soap?sort=best&offset=0&limit=16`}
                    className="link"
                  >
                    비누
                  </Link>
                  <Link
                    to={`/product-list/lotion?sort=best&offset=0&limit=16`}
                    className="link"
                  >
                    로션
                  </Link>
                  <Link
                    to={`/product-list/oil?sort=best&offset=0&limit=16`}
                    className="link"
                  >
                    오일
                  </Link>
                  <Link
                    to={`/product-list/perfume?sort=best&offset=0&limit=16`}
                    className="link"
                  >
                    향수
                  </Link>
                </div>
              </div>
              <select className="order" onChange={goSort}>
                <option className="order-best">
                  <Link
                    to={`/product-list/${categories}?sort=best&offset=0&limit=16`}
                  >
                    best
                  </Link>
                </option>
                <option className="order-low">
                  <Link
                    to={`/product-list/${categories}?sort=low&offset=0&limit=16`}
                  >
                    low
                  </Link>
                </option>
                <option className="order-high">
                  <Link
                    to={`/product-list/${categories}?sort=high&offset=0&limit=16`}
                  >
                    high
                  </Link>
                </option>
                <option className="order-review">
                  <Link
                    to={`/product-list/${categories}?sort=review&offset=0&limit=16`}
                  >
                    review
                  </Link>
                </option>
              </select>
            </div>
            <div className="page-box">
              {product-data.slice(0, 16).map(list => (
                <Product
                  key={list.id}
                  id={list.id}
                  title={list.title}
                  img={list.img}
                  price={list.price}
                  tag={list.tag}
                  category={list.category}
                />
              ))}
            </div>
            <div className="button-click">
              <button onClick={() => goPage(1)} className="btn">
                ◀️◀️
              </button>
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

              <button onClick={() => goPage(4)} className="btn">
                ▶▶
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product-list;

const PAGELIMIT = 16;
