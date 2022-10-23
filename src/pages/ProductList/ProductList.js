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
import './ProductList.scss';

const ProductList = () => {
  const [data, setData] = useState([]);
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
  }, [offset, limit, categoryData]);

  const goPage = pageNumber => {
    searchParams.set('limit', 16);
    searchParams.set('offset', (pageNumber - 1) * 16);
    setSearchPhams(searchParams);
  };
  return (
    <>
      <Nav />
      {data && (
        <div className="product-list">
          <Banner />
          <div className="list-page">
            <div className="menu-bar">
              <div className="filter">
                <div className="all">
                  <Link
                    to={`/productlist/all?offset=0&limit=16`}
                    className="link"
                  >
                    전체상품
                  </Link>
                  <Link
                    to={`/productlist/soap?offset=0&limit=16`}
                    className="link"
                  >
                    비누
                  </Link>
                  <Link
                    to={`/productlist/lotion?offset=0&limit=16`}
                    className="link"
                  >
                    로션
                  </Link>
                  <Link
                    to={`/productlist/oil?offset=0&limit=16`}
                    className="link"
                  >
                    오일
                  </Link>
                  <Link
                    to={`/productlist/perfume?offset=0&limit=16`}
                    className="link"
                  >
                    향수
                  </Link>
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
              {data.slice(1, 16).map(e => (
                <Product
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  img={e.img}
                  price={e.price}
                  tag={e.tag}
                  category={e.category}
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

export default ProductList;
