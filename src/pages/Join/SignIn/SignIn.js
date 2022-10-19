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

  const connect = () => {
    fetch('login api주소', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ loginInfo }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패!');
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data.message === 'SUCCESS') {
          localStorage.setItem('token', data.token);
          alert('로그인 성공');
        } else if (data.message === 'INVALID_USER_ID') {
          alert('아이디 혹은 비밀번호를 확인 해 주세요');
        }
      });
  };

  const validation = e => {
    e.preventDefault();
    loginInfo.email || loginInfo.password ? connect() : console.log('b');
  };

  return (
    <div className="signIn">
      <div className="contents">
        <div className="title"> 로그인</div>
        <form className="login-form" onSubmit={validation}>
          <input
            className="login-input"
            name="email"
            placeholder="아이디"
            onChange={handleInputValue}
          />
          <input
            className="login-input"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={handleInputValue}
          />
          <button className="login-button">로그인</button>
        </form>
        <div className="etc">
          <div className="etc-tag">회원가입</div>
          <div className="etc-tag">위코드</div>
          <div className="etc-tag">저스트코드</div>
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
