import React, { useState, useEffect } from 'react';
import './SignUp.scss';

const SignUp = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [checkPassword, setCheckPassword] = useState('');
  // const [name, setName] = useState('');
  // const [phonenumber, setPhonenumber] = useState('');
  const [info, setInfo] = useState({
    email: '',
    username: '',
    password: '',
    checkPassword: '',
    phone: '',
  });
  const handleInputValue = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
    // const { name, value } = e.target;  // 위와 같음. 구조분해할당....잘 모르겠음. 공부.
    // setInfo({ ...info, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(info);
  };

  return (
    <div className="signup">
      <div className="wrapper">
        <div className="big-title">회원가입</div>
        <div className="title">
          <div className="title-left">기본정보</div>
          <div className="title-right">모든 정보를 정확하게 입력해주세요.</div>
        </div>
        <div className="contents">
          <form onSubmit={onSubmit}>
            <div className="email-wrapper">
              <label for="email-input">아이디 </label>
              <input
                className="email-input"
                name="email"
                placeholder="영문 또는 여문 및 숫자 4자리 이상"
                onChange={handleInputValue}
              />
            </div>
            <div className="password-wrapper">
              <label for="password-input">비밀번호 </label>
              <input
                className="password-input"
                name="password"
                placeholder="영문 대소문자 및 숫자 중 2개 이상 조합, 8자리 이상"
                type="password"
                onChange={handleInputValue}
              />
            </div>
            <div className="check-password-wrapper">
              <label for="check-password-input">비밀번호 확인 </label>
              <input
                className="check-password-input"
                name="checkPassword"
                type="password"
                onChange={handleInputValue}
              />
            </div>
            <div className="name-wrapper">
              <label for="name-input">이름 </label>
              <input
                className="name-input"
                name="username"
                onChange={handleInputValue}
              />
            </div>
            <div className="phonenumber-wrapper">
              <label for="phonenumber-input">휴대전화 </label>
              <input
                className="phonenumber-input"
                name="phone"
                onChange={handleInputValue}
              />
            </div>
            <div className="join-wrapper">
              <button className="join-button">회원가입</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
