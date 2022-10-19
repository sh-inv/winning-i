import Chart from 'react-apexcharts';
import styled from 'styled-components';

const AgeChart = () => {
  const chart = {
    series: [44, 55, 13, 43, 22],
    options: {
      colors: ['#3E82F7', '#03D182', '#FF6B72', '#FFC106', '#A360D6'],
      labels: ['10 대', '20 대', '30 대', '40 대', '50 대 이상'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      title: {
        text: '사용자 연령대',
        align: 'left',
      },
    },
  };

  return (
    <AgeBox>
      <Chart options={chart.options} series={chart.series} width='100%' height={300} type='pie' />
    </AgeBox>
  );
};

const AgeBox = styled.div``;

export default AgeChart;
