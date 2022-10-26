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
import { API } from '../../config';

const ProductList = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchPhams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');
  const [sort, setSort] = useState('high');
  const { categories } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${API.list}/${categories}?sort=${sort}&offset=${offset}&limit=${limit}`
    )
      .then(res => res.json())
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      });
  }, [offset, limit, categories, sort]);

  const goPage = pageNumber => {
    searchParams.set('limit', PAGELIMIT);
    searchParams.set('offset', (pageNumber - 1) * PAGELIMIT);
    setSearchPhams(searchParams);
  };

  const goSort = e => {
    setSort(e.target.value);
  };

  if (isLoading) return;

  return (
    <>
      <Nav />
      <div className="product-list">
        <Banner />
        <div className="list-page">
          <div className="menu-bar">
            <div className="filter">
              <div className="all">
                <Link
                  to="/product-list/all?sort=best&offset=0&limit=16"
                  className="link"
                >
                  전체상품
                </Link>
                <Link
                  to="/product-list/soap?sort=best&offset=0&limit=16"
                  className="link"
                >
                  비누
                </Link>
                <Link
                  to="/product-list/lotion?sort=best&offset=0&limit=16"
                  className="link"
                >
                  로션
                </Link>
                <Link
                  to="/product-list/oil?sort=best&offset=0&limit=16"
                  className="link"
                >
                  오일
                </Link>
                <Link
                  to="/product-list/perfume?sort=best&offset=0&limit=16"
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
            {data.slice(0, 16).map(e => (
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
    </>
  );
};

export default ProductList;
const PAGELIMIT = 16;
