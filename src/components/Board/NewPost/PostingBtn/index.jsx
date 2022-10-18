import styled from 'styled-components';
import { mainFontColor } from '../../../../Theme';

const PostingBtn = () => {
  return (
    <PostingBtnBox>
      <button className='cancle'>취소</button>
      <button className='registration'>등록</button>
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
    cursor: pointer;
    transition: 0.5s;
  }

  .cancle {
    margin-right: 10px;
    border: 1px solid #dfdfdf;

    &:hover {
      border: 1px solid ${mainFontColor};
    }
  }

  .registration {
    border: none;
    background: #0091f9;
    opacity: 0.7;
    color: #fff;

    &:hover {
      opacity: 1;
    }
  }
`;

export default PostingBtn;
