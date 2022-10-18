import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mainFontColor, mobileMaxWidth } from '../../../../Theme';

const Post = ({ post }) => {
  const { id, title, user, date } = post;

  return (
    <PostBox>
      <div className='post-number post'>{id}</div>
      <Link to={`/board/${id}`} className='post-title'>
        {title}
      </Link>
      <div className='post-writer post'>{user}</div>
      <div className='post-date post'>{date}</div>
    </PostBox>
  );
};

const PostBox = styled.div`
  display: flex;
  height: 80px;
  border-bottom: 1px solid #dfdfdf;

  .post {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .post-number {
    width: 15%;
  }

  .post-title {
    display: flex;
    align-items: center;
    width: 40%;
    font-size: 20px;
    color: ${mainFontColor};
  }

  .post-writer {
    width: 15%;
  }

  .post-date {
    width: 30%;
  }

  @media screen and (${mobileMaxWidth}) {
    height: 100px;

    &:nth-child(2) {
      border-top: 1px solid #dfdfdf;
    }

    .post {
      font-size: 14px;
    }

    .post-title {
      font-size: 14px;
    }
  }
`;

export default Post;
