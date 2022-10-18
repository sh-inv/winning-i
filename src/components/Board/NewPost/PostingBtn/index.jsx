import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mainFontColor } from '../../../../Theme';

const PostingBtn = ({ isValue, QuillRef, titleRef }) => {
  const navigate = useNavigate();

  const onClickCancle = () => {
    let answer = confirm('게시글 작성을 취소하시겠습니까?');
    if (answer) {
      navigate('/board');
    }
  };

  const onClickRegistration = () => {
    const titleValue = titleRef.current.value;
    const quillValue = QuillRef.current.value;

    (async () => {
      try {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/board`, {
          title: titleValue,
          user: 'winning-i',
          date: `${year}.${month}.${day}`,
          text: quillValue,
        });
        alert('게시글 작성이 완료됐습니다.');
        navigate('/board');
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <PostingBtnBox>
      <button className='cancle' onClick={onClickCancle}>
        취소
      </button>
      <button className='registration' onClick={onClickRegistration} disabled={isValue}>
        등록
      </button>
    </PostingBtnBox>
  );
};

const PostingBtnBox = styled.div`
  margin-left: calc(100% - 170px);

  button {
    width: 80px;
    height: 40px;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 8px;
    transition: 0.5s;
    cursor: pointer;
  }

  .cancle {
    margin-right: 10px;
    border: 1px solid #dfdfdf;
    background-color: #fff;

    &:hover {
      border: 1px solid ${mainFontColor};
    }
  }

  .registration {
    border: none;
    background: #0091f9;
    color: #fff;
    opacity: 1;

    &:disabled {
      cursor: default;
      opacity: 0.7;
    }

    &:hover {
      background: #0077cb;
    }
  }
`;

export default PostingBtn;
