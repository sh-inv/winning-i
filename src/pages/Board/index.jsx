import styled from 'styled-components';
import NewPostBtn from '../../components/Board/NewPostBtn';
import PostList from '../../components/Board/PostList';
import { mobileMaxWidth } from '../../Theme';

const Board = () => {
  return (
    <BoardBox>
      <div className='board-text-write'>
        <h1 className='title'>게시판</h1>
        <NewPostBtn />
      </div>
      <PostList />
    </BoardBox>
  );
};

const BoardBox = styled.div`
  width: 100%;
  .title {
    font-size: 40px;
  }

  .board-text-write {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (${mobileMaxWidth}) {
    .title {
      font-size: 30px;
    }
  }
`;

export default Board;
