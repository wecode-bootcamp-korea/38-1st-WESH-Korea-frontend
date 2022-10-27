import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.scss';

const SignIn = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleInputValue = e => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const connect = () => {
    fetch('http://10.58.52.123:8000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패!');
      })
      .then(data => {
        if (data.data) {
          localStorage.setItem('token', data.data);
          navigate('/', { replace: true });
        } else {
          alert('아이디 혹은 비밀번호를 확인 해 주세요');
        }
      });
  };

  const validateAndGo = e => {
    e.preventDefault();
    loginInfo.email || loginInfo.password
      ? connect()
      : alert('ID, Password를 입력해주세요.');
  };

  return (
    <div className="signIn">
      <div className="contents">
        <div className="title"> 로그인</div>
        <form className="login-form" onSubmit={validateAndGo}>
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
          <Link to="/signup" className="etc-tag">
            회원가입
          </Link>
          <a className="etc-tag" href="https://www.wecode.co.kr">
            위코드
          </a>
          <a className="etc-tag" href="https://www.just-code.co.kr">
            저스트코드
          </a>
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
