import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mainFontColor } from '../../Theme';

const MobileSideBar = () => {
  const [listView, setListView] = useState(false);
  const [navList, setNavList] = useState([]);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/navlist`);
        setNavList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const clickOutside = e => {
      if (listView && ref.current && !ref.current.contains(e.target)) {
        setListView(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);

    return () => {
      // Cleanup
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [listView]);

  const logout = () => {
    let check = confirm('로그아웃 하시겠습니까?');
    if (check) {
      navigate('/');
    }
  };

  return (
    <NavTab ref={ref} listView={listView} onClick={() => setListView(!listView)}>
      <div className='nav'>
        {navList.map(nav => (
          <div key={nav.title} className='nav-list'>
            <img src={nav.link} alt={nav.title} className='nav-img' />
            {listView && (
              <NavLink to={nav.path} className='nav-link' onClick={() => setListView(false)}>
                {nav.title}
              </NavLink>
            )}
          </div>
        ))}
        <button className='logout-btn'>
          <img src='https://user-images.githubusercontent.com/104422865/196146291-9a0e4023-00e4-4fe6-a6f6-a6fec88af3e6.png' alt='logout' className='logout-btn-img' />
          {listView && (
            <div className='logout-btn-txt' onClick={logout}>
              Logout
            </div>
          )}
        </button>
      </div>
    </NavTab>
  );
};

const NavTab = styled.nav`
  position: relative;
  display: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ listView }) => (listView ? '300px' : '170px')};
  transition: 0.3s;
  border-right: 1px solid #dfdfdf;
  background: ${({ listView }) => (listView ? '#dfdfdf' : 'transparent')};

  .nav {
    position: absolute;
    top: 60px;
    left: 55px;

    .nav-list {
      display: flex;
      align-items: center;
      margin-bottom: 100px;

      .nav-img {
        width: 60px;
      }

      .nav-link {
        color: ${mainFontColor};
        font-size: 20px;
        margin-left: 50px;
      }
    }

    .logout-btn {
      display: flex;
      align-items: center;
      border: none;
      background: none;
      padding: 0;

      .logout-btn-img {
        width: 60px;
      }

      .logout-btn-txt {
        color: ${mainFontColor};
        font-size: 20px;
        margin-left: 50px;
        cursor: pointer;
      }
    }
  }
`;

export default MobileSideBar;
