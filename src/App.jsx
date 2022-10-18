import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import GlobalStyle from './GlobalStyle';
import Login from './pages/Login';
import Main from './pages/Main';
import Board from './pages/Board';
import NewPost from './components/Board/NewPost';
import DetailPage from './components/DetailPage';
import ScrollToTopBtn from './components/ScrollToTopBtn';

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Center>
        <SideBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/index' element={<Main />} />
          <Route path='/board' element={<Board />} />
          <Route path='/board/:id' element={<DetailPage />} />
          <Route path='/board/newpost' element={<NewPost />} />
        </Routes>
      </Center>
      <ScrollToTopBtn />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 1130px;
  margin: 0 auto;
`;

const Center = styled.div`
  margin: 70px 70px 0 200px;

  @media screen and (max-width: 639px) {
    margin: 30px 10px 0 75px;
  }
`;

export default App;
