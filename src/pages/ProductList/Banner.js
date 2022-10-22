import React from 'react';
import { useParams } from 'react-router-dom';
import './Banner.scss';

const Banner = () => {
  const params = useParams();

  return (
    <div className="banner">
      <img
        className="banner-image"
        src="https://images.unsplash.com/photo-1541256996761-85df2efaa164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="banner-image"
      />
      <div className="banner-commnet">
        <div className="banner-title">{params.categories.toUpperCase()}</div>
        <div className="banner-message">
          누구나 좋아하는 인기 제품을 만나 보세요!
        </div>
      </div>
    </div>
  );
};

export default Banner;
