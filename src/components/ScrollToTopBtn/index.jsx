import { useEffect, useState } from 'react';
import styled from 'styled-components';

function ScrollToTopBtn() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShowButton = () => (window.scrollY ? setShowButton(true) : setShowButton(false));
    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return showButton && <Button onClick={scrollToTop} />;
}

const Button = styled.button`
  position: fixed;
  bottom: 60px;
  right: 30px;
  width: 64px;
  height: 64px;
  border: none;
  background: url('https://hyper-cloud.kr/static/images/scroll_top.png') center center no-repeat;
  background-size: cover;
  color: #ffffff;
  cursor: pointer;
  z-index: 10;
`;

export default ScrollToTopBtn;
