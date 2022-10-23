import React, { useEffect, useRef, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Thumbnail from './ThumbNail';
import Best from './Best';
import './MainPage.scss';
import { Link } from 'react-router-dom';

const Mainpage = () => {
  const [eventData, setEventData] = useState([]);
  const [best, setBest] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const DELAY_TIME = 5000;

  useEffect(() => {
    fetch('http://10.58.52.245:8000/')
      .then(res => res.json())
      .then(res => setEventData(res.data));
  }, []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex(prevIndex =>
          prevIndex === eventData.length - 1 ? 0 : prevIndex + 1
        ),
      DELAY_TIME
    );
    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  // useEffect(() => {
  //   fetch('/data/mainpage/main.json')
  //     .then(res => res.json())
  //     .then(res => setEventData(res));
  // }, []);

  // useEffect(() => {
  //   fetch('/data/mainpage/best.json')
  //     .then(res => res.json())
  //     .then(res => setBest(res));
  // }, []);

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
      <Nav />
      <div className="mainpage-top">
        <div className="main-center">
          <div className="main-center-top">
            <div className="thumbnail-box">
              <div className="thumbnail-slide">
                <div
                  className="thumbnail"
                  style={{
                    transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
                  }}
                >
                  {eventData.slice(0, 5).map(data => (
                    <Thumbnail key={data.id} img={data.img} />
                  ))}
                </div>
              </div>
            </div>
            <div className="slideBox">
              <div className="slideshowDots">
                {eventData.slice(0, 5).map((_, idx) => (
                  <div
                    key={idx}
                    className={`slideshowDot${
                      currentIndex === idx ? ' active' : ''
                    }`}
                    onClick={() => {
                      setCurrentIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="main-middle">
            <div className="best-tag-box">
              <ul className="best-tag">
                <div className="tag-margin">#슬리피기프트</div>
                <div className="tag-margin">#네이키드</div>
                <div className="tag-margin">#신선한 재료</div>
              </ul>
              <div className="best-item-image-box">
                <img
                  alt="best-item-tag"
                  className="best-item-image"
                  src="https://images.unsplash.com/photo-1637675416143-7b11da3fc2c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                />
              </div>
              <div className="best-item-list-box">
                <div className="best-best">
                  <Link to="productlist/all?limit=16&offset=0">BEST →</Link>
                </div>
                <div
                  className="best-item-list"
                  onMouseDown={onDragStart}
                  onMouseMove={isDrag ? onThrottleDragMove : null}
                  onMouseUp={onDragEnd}
                  onMouseLeave={onDragEnd}
                  ref={scrollRef}
                >
                  >
                  {eventData.slice(5, eventData.length + 1).map(best => (
                    <Best
                      key={best.id}
                      bestImg={best.bestImg}
                      bestTitle={best.bestTitle}
                      bestPrice={best.bestPrice}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="main-bottom">
            <div className="introduce">
              <img
                className="introduce-image"
                src="https://images.unsplash.com/photo-1521220609214-a8552380c7a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
                alt="playing-img"
              />
            </div>
            <div className="message-box">
              <div className="message">
                "<div className="point">위쉬</div>는 자연에서 얻은 신선한 재료와
              </div>
              <div className="message">
                동물실험을 하지 않은 <div className="point">정직한</div> 재료를
                사용하여
              </div>
              <div className="message">
                <div className="point">모든 제품</div>을 손으로 만듭니다."
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-logo-box">
        <div className="bottom-logo">WESH</div>
        <div className="main-bottom">
          <img
            src="https://images.unsplash.com/photo-1541256996761-85df2efaa164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="bath bomb"
            className="main-bottom-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mainpage;
