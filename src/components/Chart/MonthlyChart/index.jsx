import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
import { mobileMaxWidth } from '../../../Theme';

const MonthlyChart = ({ graphData }) => {
  const chart = {
    series: [
      {
        name: 'Visitor',
        data: graphData.visitorcount,
      },
    ],
    options: {
      chart: {
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: '월별 방문자 추이',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
    },
  };

  return (
    <MonthlyBox>
      <ReactApexChart options={chart.options} series={chart.series} typs='line' width={'100%'} />
    </MonthlyBox>
  );
};

const MonthlyBox = styled.div`
  margin-bottom: 70px;

  @media screen and (${mobileMaxWidth}) {
    margin-bottom: 20px;
  }
`;

export default MonthlyChart;
