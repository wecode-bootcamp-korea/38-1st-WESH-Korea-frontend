import React, { useState } from 'react';
import { useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import './SignUp.scss';

const SignUp = () => {
  const [info, setInfo] = useState({
    email: '',
    name: '',
    password: '',
    checkPassword: '',
    phone_number: '',
  });

  const handleInputValue = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const connect = () => {
    fetch('http://10.58.52.111:8000/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info),
    }); //요청
  };

  const validation = () => {
    const patternPhone = /^(?:(010-\d{4})|(01[1|6|7|8|9]-\d{3,4}))-(\d{4})$/;
    const patternEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const patternPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    patternEmail.test(info.email) &&
    patternPassword.test(info.password) &&
    patternPhone.test(info.phone_number) &&
    info.password === info.checkPassword
      ? connect()
      : alert('정보를 확인해주세요!');
  };

  const onSubmit = e => {
    e.preventDefault();
    validation();
  };

  return (
    <>
      <Nav />
      <div className="signup">
        <div className="wrapper">
          <div className="big-title">회원가입</div>
          <div className="title">
            <div className="title-left">기본정보</div>
            <div className="title-right">
              모든 정보를 정확하게 입력해주세요.
            </div>
          </div>
          <div className="contents">
            <form className="input-form" onSubmit={onSubmit}>
              <div className="email-wrapper">
                <label className="join-label">아이디 </label>
                <input
                  className="info-input"
                  name="email"
                  placeholder="영문 또는 영문 및 숫자 4자리 이상"
                  onChange={handleInputValue}
                />
              </div>
              <div className="password-wrapper">
                <label className="join-label">비밀번호 </label>
                <input
                  className="info-input"
                  name="password"
                  placeholder="영문 대문자, 소문자, 숫자, 특수문자 포함, 8글자 이상"
                  type="password"
                  onChange={handleInputValue}
                />
              </div>
              <div className="check-password-wrapper">
                <label className="join-label">비밀번호 확인 </label>
                <input
                  className="info-input"
                  name="checkPassword"
                  type="password"
                  onChange={handleInputValue}
                />
              </div>
              <div className="name-wrapper">
                <label className="join-label">이름 </label>
                <input
                  className="info-input"
                  name="name"
                  onChange={handleInputValue}
                />
              </div>
              <div className="phonenumber-wrapper">
                <label className="join-label">휴대전화 </label>
                <input
                  className="info-input"
                  name="phone_number"
                  onChange={handleInputValue}
                  placeholder="000-0000-0000 형태로 입력해주세요"
                />
              </div>
              <div className="join-wrapper">
                <button className="join-button">회원가입</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
