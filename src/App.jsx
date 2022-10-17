import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Index from './pages';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/index' element={<Index />} />
      </Routes>
    </>
  );
};

export default App;
