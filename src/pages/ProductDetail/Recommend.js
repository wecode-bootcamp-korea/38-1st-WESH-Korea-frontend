import React from 'react';

import './Recommend.scss';

const Recommend = () => {
  return (
    <>
      <div className="recommend-box">
        <div className="recommend-list">
          {RECOMMED_DATA.map(recommend => (
            <div className="recommend-img-box">
              <img
                src={recommend.img}
                alt="추천 상품"
                className="recommend-img"
              />
              <div className="recommend-title">{recommend.title}</div>
              <div className="recommend-price">{recommend.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Recommend;

const RECOMMED_DATA = [
  {
    id: 0,
    img: 'https://images.unsplash.com/photo-1610461888750-10bfc601b874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80',
    title: '위라다 향수',
    price: '300,000원',
  },
  {
    id: 1,

    img: 'https://images.unsplash.com/photo-1629196869698-2ce173dacc24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: '위시 인싸 샴푸',
    price: '9,999,999원',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1608571424266-edeb9bbefdec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: '탈모 샴푸',
    price: '17,000원',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80',
    title: '위넬 향수',
    price: '200,000원',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1594311431552-1cde4f4d1891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: '끈적임 없는 로션',
    price: '17,000원',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1620917669809-1af0497965de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: '피지 로션',
    price: '20,000원',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: '화이트닝 로션',
    price: '15,000원',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: '남자 위넬 향수',
    price: '230,000원',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1625153809071-9d8b790ff18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: '위시 베스트 샴푸',
    price: '11,000원',
  },
];
