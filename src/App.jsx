import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import GlobalStyle from './GlobalStyle';
import Index from './pages';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Center>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route
            path='/index'
            element={
              <SideBar>
                <Index />
              </SideBar>
            }
          />
        </Routes>
      </Center>
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
