import React from 'react';
import { Link } from 'react-router-dom';
import './Mypage.scss';

const Mypage = ({ orderData }) => {
  return (
    <div className="cart-page">
      <div className="wrap">
        <div className="contents">
          <div className="mypage-top">
            <div className="mypage-info">
              <img
                className="profile"
                src="/images/profile.png"
                alt="profile"
              />

              <div className="info-list">
                <p className="info-text">abcde 님</p>
                <div className="info-change">
                  <Link to="/">회원정보 변경</Link>
                </div>
                <a href="" className="info-ship">
                  배송지 관리
                </a>
              </div>
            </div>
            <div className="mypage-benefit">
              <div className="coupon">
                <div className="icon-one">
                  <img src="https://www.lush.co.kr/content/renewal/pc/images/ico/ico_gift.svg" />
                </div>
                <p>혜택</p>
                <p className="benefit-strong">
                  <strong>0 장</strong>
                </p>
              </div>
              <div className="qna">
                <div className="icon-two">
                  <img src="https://www.lush.co.kr/content/renewal/pc/images/ico/ico_question.svg" />
                </div>

                <p>문의</p>
                <p className="qna-strong">
                  <strong>0 건</strong>
                </p>
              </div>
              <div className="user-info">
                <p className="user-name">이름 :</p>
                <p className="user-id">아이디 :</p>
                <p className="user-address">포인트 :</p>
                <p className="user-phone">핸드폰 번호 : </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mypage-ship">
          <span className="ing-ship">진행 중인 주문</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ing-ship-info">
            최근 30일 내에 진행중인 주문정보입니다.
          </span>
        </div>
        <div className="order-ing">
          <ul className="ship-flex">
            <li>
              <p>결제완료</p>
              <span>0</span>
            </li>
            <li>
              <p>배송준비중</p>
              <span>0</span>
            </li>
            <li>
              <p>배송중</p>
              <span>0</span>
            </li>
            <li>
              <p>배송완료</p>
              <span>0</span>
            </li>
            <li>
              <p>구매확정</p>
              <span>0</span>
            </li>
            <li className="delete">
              <ul>
                <li className="delete-one">
                  <div>
                    <span>취소</span>
                    <span>0</span>
                  </div>
                </li>

                <li className="delete-three">
                  <div>
                    <span>반품</span>
                    <span>0</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
