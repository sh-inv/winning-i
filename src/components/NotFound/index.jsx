import notFound from '../../assets/notfound/404.png';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundBox>
      <img src={notFound} alt='404 Not Found' />
    </NotFoundBox>
  );
};

const NotFoundBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100% - 40px);

  img {
    width: 100%;
    margin: auto 0;
  }
`;

export default NotFound;
