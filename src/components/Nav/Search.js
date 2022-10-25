import userEvent from '@testing-library/user-event';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './Search.scss';

const Search = () => {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://10.58.52.125:3000/product-list/all?sort=best&offset=0&limit=57`
    )
      .then(res => res.json())
      .then(res => {
        setSearch(res.data);
        setIsLoading(false);
      });
  }, []);

  const inputValue = e => {
    setInput(e.target.value);
  };

  const reset = () => {
    ref.current.value = '';
    setInput('');
  };

  const focus = () => {
    ref.current.focus();
  };

  const searchFilter = search.filter(
    search =>
      input !== '' && search.title.toUpperCase().includes(input.toUpperCase())
  );

  if (isLoading) return;

  return (
    <>
      {SEARCHDATA && (
        <div className="search" onMouseLeave={reset} onMouseEnter={focus}>
          <div className="search-box">
            <div className="input-box">
              <input
                className="input"
                placeholder="하루 10분, 피부에 신선함 채우기"
                onChange={inputValue}
                ref={ref}
              ></input>
            </div>
            <div className="search-item-box">
              {searchFilter.map(search => (
                <Link to={`/product-detail/${search.id}`} className="link">
                  <div className="search-list-box">
                    <div className="search-list-img">
                      <img
                        src={search.img}
                        alt="search-img"
                        className="search-img"
                      />
                    </div>
                    <div className="search-list-title">{search.title}</div>
                    <div className="search-list-price">
                      {search.price.slice(0, search.price.length - 4)}원
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="search-best-box">
              <div className="search-best">
                {SEARCHDATA.map(category => (
                  <div className="best-search-tag">{category.category}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;

const SEARCHDATA = [
  { id: 1, category: '#크리스마스' },
  { id: 2, category: '#할로윈' },
  { id: 3, category: '#비건' },
  { id: 4, category: '#페이스 마스크' },
  { id: 5, category: '#오늘도' },
  { id: 6, category: '#야근' },
  { id: 7, category: '#이네요' },
];
