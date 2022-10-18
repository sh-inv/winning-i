import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function ScrollToTopBtn() {
  const location = useLocation();

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return location.pathname !== '/' && <Button onClick={scrollToTop} />;
}

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 64px;
  height: 64px;
  border: none;
  background: url('https://user-images.githubusercontent.com/104422865/196187367-b8b65a1a-4976-4cd7-825b-f1a786f88ad8.png') center center no-repeat;
  background-size: cover;
  transform: rotate(270deg);
  color: #ffffff;
  cursor: pointer;
  z-index: 10;
`;

export default ScrollToTopBtn;
