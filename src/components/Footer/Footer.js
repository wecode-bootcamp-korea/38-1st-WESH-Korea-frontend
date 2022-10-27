import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="top-footer">38th-1st-Wesh</div>
      <div className="footer-inner-box">
        <div className="footer-inner">
          <div className="footer-main-wrap">
            <div className="footer-left-side">
              <input
                className="input-tab"
                type="email"
                name="구독 인풋창"
                placeholder="이메일 주소를 입력해주세요"
              />
              <p className="footer-sub-infor">
                매주 월요일 오후, 구독자님들을 위한 제품과 브랜드 이야기를 전해
                드립니다. 구독은 언제든지 해지하실 수 있습니다. 미리보기
              </p>
              <div className="footer-call-info">
                <section className="footer-call-sub">
                  <span>고객센터</span>
                  <span>1234-5678</span>
                  <span className="email-under">wecode@wesh.co.kr</span>
                  <span>상담전화 13:00~16:00(평일)</span>
                  <span>상담톡 10:00~16:00(평일)</span>
                </section>
                <section className="footer-copor-info">
                  <span>기업 선물</span>
                  <span>070-7777-7777</span>
                  <span>wesh@kkk.co.kr</span>
                </section>
              </div>
              <ul className="footer-sns-link">
                <li>
                  <img
                    className="twiter-img"
                    link="https://twitter.com/?lang=ko"
                    src="https://www.lush.co.kr/content/renewal/mobile/images/ico/ico_twitter.png"
                    alt="twitter-img"
                  />
                </li>
                {FOOTER_SNS_IMG.map(logo => {
                  return (
                    <img src={logo.image} key={logo.id} alt="logo-image" />
                  );
                })}
              </ul>
            </div>
            <div className="footer-right-side">
              <div>
                <div className="footer-notice">
                  <span>공지사항</span>
                  <span>2022-10-18 [공지] 카카오 블랙 아웃 그만~~</span>
                  <span>2022-10-19 [공지] 프론트/백 화이팅~~~</span>
                </div>
                <div>
                  <div className="footer-menu-list">
                    <ul className="foot-menu-group1">
                      <li>러쉬 소개</li>
                      <li className="footer-menu-person-info">
                        개인정보처리방침
                      </li>
                      <li className="footer-menu-FAQ">FAQ</li>
                    </ul>
                    <ul className="foot-menu-group2">
                      <li>스카우트</li>
                      <li className="footer-menuV\-video-info">
                        영상정보관리지침
                      </li>
                      <li>1:1문의</li>
                    </ul>
                    <ul className="foot-menu-group3">
                      <li>채용안내</li>
                      <li className="footer-use-policy">이용약관</li>
                      <li />
                    </ul>
                  </div>
                </div>
                <div className="footer-place-info">
                  <p>서울 강남구 테헤란로 위워크타워 10층 위코드 선릉 2호점</p>
                  <p>사이트 운영자: 주식회사 위시코리아 | 대표이사 : 공석</p>
                  <p>사업자 등록번호: 201-81-88888 사업자정보확인</p>
                  <p>
                    통신판매업 신고번호: 2022-서울강남-984723 |
                    개인정보보호책임자 : 공석
                  </p>
                  <p className="foorter-copy-right">
                    COPYRIGHT@WESHKOREA.CO.LTD.ALL RIGHTS RESERVED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FOOTER_SNS_IMG = [
  {
    id: 1,
    name: 'instagram',
    link: 'https://www.instagram.com/',
    image:
      'https://www.lush.co.kr/content/renewal/mobile/images/ico/ico_insta.svg',
  },

  {
    id: 2,
    name: 'youtube',
    link: 'https://www.youtube.com/user/',
    image:
      'https://www.lush.co.kr/content/renewal/mobile/images/ico/ico_youtube.svg',
  },

  {
    id: 3,
    name: 'kakao',
    link: 'https://pf.kakao.com/',
    image:
      'https://www.lush.co.kr/content/renewal/mobile/images/ico/ico_kakao.svg',
  },

  {
    id: 4,
    name: 'naver',
    link: 'https://m.post.naver.com/',
    image:
      'https://www.lush.co.kr/content/renewal/mobile/images/ico/ico_naver.svg',
  },
];
