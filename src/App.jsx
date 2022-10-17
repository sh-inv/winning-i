import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import GlobalStyle from './GlobalStyle';
import Main from './pages/Main';
import Login from './pages/Login';
import ScrollToTopBtn from './components/ScrollToTopBtn';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Center>
        <SideBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/index' element={<Main />} />
        </Routes>
      </Center>
      <ScrollToTopBtn />
    </>
  );
};

const Center = styled.div`
  max-width: calc(100% - 170px);
  margin-left: 170px;

  @media screen and (max-width: 639px) {
    max-width: calc(100% - 80px);
    margin-left: 80px;
  }
`;

export default App;
