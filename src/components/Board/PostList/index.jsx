import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mobileMaxWidth } from '../../../Theme';
import Loading from './Loading';
import Post from './Post';

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [limit, setLimit] = useState(20);
  const [isLoading, setIsLoading] = useState(true);

  const showMore = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setTimeout(() => setLimit(limit + 15), 1500);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showMore);
    (async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/board?_sort=id&_order=DESC`);
        setPostList(data.slice(0, limit));
      } catch (error) {
        console.log(error);
      }
    })();
    return () => window.removeEventListener('scroll', showMore);
  }, [limit]);

  return (
    <PostListBox>
      <div className='header'>
        <div className='title top'>제목</div>
        <div className='writer top'>작성자</div>
        <div className='date top'>작성시간</div>
      </div>
      {postList.map((post, i) => (
        <Post key={i} post={post} i={i} />
      ))}
      {isLoading && <Loading />}
    </PostListBox>
  );
};

const PostListBox = styled.div`
  .header {
    display: flex;
    align-items: center;
    height: 50px;
    margin-top: 50px;
    background: #dfdfdf;

    .top {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      margin-left: 5px;

      :nth-child(1) {
        margin-left: 0;
      }
    }

    .title {
      width: 55%;
    }

    .writer {
      width: 15%;
    }

    .date {
      width: 30%;
    }

    @media screen and (${mobileMaxWidth}) {
      height: 30px;

      .top {
        font-size: 14px;
      }
    }
  }
`;

export default PostList;
