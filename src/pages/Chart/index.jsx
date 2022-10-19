import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AgeChart from '../../components/Chart/AgeChart';
import MonthlyChart from '../../components/Chart/MonthlyChart';
import PostChart from '../../components/Chart/PostsChart';
import { mainLogo, mobileMaxWidth } from '../../Theme';

const Chart = () => {
  const [graphData, setgraphData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/graphdata`);
        setgraphData(data);
      } catch (error1) {
        alert('404 not found');
        console.log(error);
      }
    })();
  }, []);

  return (
    graphData && (
      <MainBox>
        <img src={mainLogo} alt='winning-i logo' />
        <MonthlyChart graphData={graphData} />
        <PostChart graphData={graphData} />
        <AgeChart />
      </MainBox>
    )
  );
};

const MainBox = styled.div`
  img {
    width: 150px;
    margin: 0 calc(50% - 75px) 70px calc(50% - 75px);

    @media screen and (${mobileMaxWidth}) {
      width: 100px;
      margin: 0 calc(50% - 50px) 20px calc(50% - 50px);
    }
  }
`;

export default Chart;
