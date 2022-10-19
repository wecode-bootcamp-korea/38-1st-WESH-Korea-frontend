import React, { useState, useEffect } from 'react';
import './SignIn.scss';

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleInputValue = e => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const loginOnSubmit = e => {
    e.preventDefault();
    loginInfo.email.length > 4 && loginInfo.password.length > 8
      ? console.log('a')
      : console.log('b');
  };

  return (
    <div className="signIn">
      <div className="contents">
        <div className="title"> 로그인</div>
        <form onSubmit={loginOnSubmit}>
          <input
            className="email"
            name="email"
            placeholder="아이디"
            onChange={handleInputValue}
          />
          <input
            className="password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={handleInputValue}
          />
          <button className="login">로그인</button>
        </form>
        <div className="etc">
          <div className="join">회원가입</div>
          <div className="wecode">위코드</div>
          <div className="justcode">저스트코드</div>
        </div>
        <div className="cannot">
          <div className="never">네이버 아이디로 로그인(준비중)</div>
          <div className="gakao">카카오 아이디로 로그인(준비중)</div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
