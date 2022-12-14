import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mainFontColor, mainLogo } from '../../Theme';

const Login = () => {
  const loginInputValue = useRef([]);
  const navigate = useNavigate();
  const [graphData, setgraphData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/graphdata`);
        setgraphData(data);
      } catch (error) {
        alert('404 not found');
        console.log(error);
      }
    })();
  }, []);

  const goMain = () => {
    if (loginInputValue.current[0].value === 'user' && loginInputValue.current[1].value === '1234') {
      (async () => {
        try {
          let arr = [...graphData.visitorcount];
          arr[arr.length - 1] += 1;
          await axios.patch(`${import.meta.env.VITE_BASE_URL}/graphdata`, {
            visitorcount: arr,
          });
        } catch (error) {
          console.log(error);
        }
      })();
      alert('로그인 성공');
      navigate('/index');
    } else {
      alert('id와 password가 일치하지 않습니다.');
    }
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      goMain();
    }
  };

  return (
    <SignInContainer>
      <Link to='/' className='logo' />
      <div className='input-box'>
        <input type='text' className='input' placeholder='id' ref={el => (loginInputValue.current[0] = el)} onKeyDown={onKeyDown} />
        <input type='password' className='input' placeholder='password' ref={el => (loginInputValue.current[1] = el)} onKeyDown={onKeyDown} />
        <input type='button' className='input login-input' value='로그인' onClick={goMain} />
      </div>
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  position: fixed;
  top: calc(50% - 200px);
  left: calc(50% - 125px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 400px;

  .logo {
    display: inline-block;
    width: 210px;
    height: 128px;
    background: url(${mainLogo}) center center no-repeat;
    background-size: cover;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 150px;

    .input {
      height: 35px;
      color: ${mainFontColor};
      border: 1px solid ${mainFontColor};
      border-radius: 10px;
      padding: 0 15px;
      transition: 0.5s;

      &:focus {
        border: 3px solid ${mainFontColor};
      }
    }

    .login-input {
      background: #efefef;
    }

    .login-input:hover {
      color: #ffffff;
      background: ${mainFontColor};
      cursor: pointer;
    }
  }
`;

export default Login;
