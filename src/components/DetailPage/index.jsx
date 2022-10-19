import axios from 'axios';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NotFound from '../NotFound';

const DetailPage = () => {
  const [error, setError] = useState(false);
  const [content, setContent] = useState();
  const [graphData, setgraphData] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const detail = await axios.get(`${import.meta.env.VITE_BASE_URL}${location.pathname}`);
        setContent(detail.data);
        setError(false);
        const graph = await axios.get(`${import.meta.env.VITE_BASE_URL}/graphdata`);
        setgraphData(graph.data);
      } catch (error) {
        setError(true);
        alert('통신에러');
        console.log(error);
      }
    })();
  }, []);

  const deletePost = () => {
    if (confirm('게시글을 삭제하시겠습니까?')) {
      (async () => {
        try {
          await axios.delete(`${import.meta.env.VITE_BASE_URL}${location.pathname}`);
          let arr = [...graphData.postcount];
          arr[arr.length - 1] -= 1;
          await axios.patch(`${import.meta.env.VITE_BASE_URL}/graphdata`, {
            postcount: arr,
          });
          alert('게시글이 삭제되었습니다.');
          navigate('/board');
        } catch (error) {
          alert('게시글이 삭제되지 않았습니다. (서버오류)');
          console.log(error);
        }
      })();
    }
  };

  return error ? (
    <NotFound />
  ) : (
    content && (
      <DetailPageBox>
        <div className='profile-box'>
          <span>
            <h1 className='user-name'>{content.user}</h1>
            <p className='date'>{content.date}</p>
          </span>
          <span>
            <button className='edit' />
            <button className='delete' onClick={deletePost} />
          </span>
        </div>
        <div className='title'>{content.title}</div>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.text) }} className='text' />
      </DetailPageBox>
    )
  );
};

const DetailPageBox = styled.div`
  .profile-box {
    display: flex;
    justify-content: space-between;

    .user-name {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .date {
      font-size: 14px;
      margin-bottom: 60px;
    }

    .edit {
      width: 25px;
      height: 25px;
      background: url('https://user-images.githubusercontent.com/104422865/196447798-56a22fbc-9bd3-4a09-8d55-0a18bd6c180d.png') center center no-repeat;
      background-size: cover;
      border: none;
      cursor: pointer;
    }

    .delete {
      width: 25px;
      height: 25px;
      background: url('https://user-images.githubusercontent.com/104422865/196448418-0fc8cece-c37e-4fd4-8946-fd3db970f5cb.png') center center no-repeat;
      background-size: cover;
      border: none;
      margin-left: 30px;
      cursor: pointer;
    }
  }

  .title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
  }
`;

export default DetailPage;
