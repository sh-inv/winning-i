import { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { mainFontColor } from '../../../Theme';
import PostingBtn from './PostingBtn';

const NewPost = () => {
  const titleRef = useRef();
  const QuillRef = useRef();
  const [isValue, setIsValue] = useState(true);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }, { align: [] }],
          ['image', 'video'],
        ],
      },
    }),
    []
  );

  const text = () => {
    if (titleRef.current.value && QuillRef.current.value) setIsValue(false);
    else setIsValue(true);
  };

  return (
    <NewPostBox>
      <h3>제목</h3>
      <input className='title-input' type='text' ref={titleRef} placeholder='제목을 입력해주세요' onChange={text} />
      <h3>본문</h3>
      <ReactQuill
        className='quill'
        ref={element => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        onChange={text}
        modules={modules}
        theme='snow'
        placeholder='내용을 입력해주세요.'
      />
      <PostingBtn isValue={isValue} titleRef={titleRef} QuillRef={QuillRef} />
    </NewPostBox>
  );
};

const NewPostBox = styled.div`
  h3 {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .title-input {
    width: 100%;
    height: 42px;
    margin-bottom: 40px;
    padding: 8px 40px 8px 12px;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
    font-size: 1rem;
    color: ${mainFontColor};
    transition: 0.5s;

    &:focus {
      border: 1px solid ${mainFontColor};
    }
  }

  .quill {
    height: 340px;
    margin-bottom: 100px;
    background: #fff;
  }
`;

export default NewPost;
