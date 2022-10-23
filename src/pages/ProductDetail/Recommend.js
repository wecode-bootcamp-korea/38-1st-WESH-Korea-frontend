import React, { useRef, useState } from 'react';

import './Recommend.scss';

const Recommend = ({ detail }) => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = e => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <>
      <div className="recommend-box">
        <div
          className="recommend-list"
          onMouseDown={onDragStart}
          onMouseMove={isDrag ? onThrottleDragMove : null}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          {detail[0].map(recommend => (
            <div className="recommend-img-box">
              <img src={detail.img} alt="추천 상품" className="recommend-img" />
              <div className="recommend-title">{detail[0].title}</div>
              <div className="recommend-price">{detail[0].price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Recommend;
