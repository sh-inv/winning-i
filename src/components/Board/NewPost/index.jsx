import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobileMaxWidth } from '../../../Theme';

const NewPost = () => {
  return (
    <NewPostBtn to='/board/newpost' className='write-btn'>
      <p className='write-btn-text'>Post</p>
      <img src='https://user-images.githubusercontent.com/104422865/196303582-ca229c56-dc9b-4d67-8e8f-32f00b5c5be1.png' alt='글작성' className='write-btn-img' />
    </NewPostBtn>
  );
};

const NewPostBtn = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  background-color: #0095f7;
  color: #fff;
  cursor: pointer;

  .write-btn-text {
    font-size: 15px;
  }

  .write-btn-img {
    width: 25px;
    margin-left: 10px;
  }

  @media screen and (${mobileMaxWidth}) {
    .write-btn-text {
      display: none;
    }

    .write-btn-img {
      width: 18px;
      margin: 3px 10px;
    }
  }
`;

export default NewPost;
