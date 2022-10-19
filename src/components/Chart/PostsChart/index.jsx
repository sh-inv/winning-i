import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';
import { mobileMaxWidth } from '../../../Theme';

const PostChart = ({ graphData }) => {
  const chart = {
    series: [
      {
        name: '게시글',
        data: graphData.postcount,
      },
    ],
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      colors: ['#03D182'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        type: 'month',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      legend: {
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
      title: {
        text: '월별 게시글 등록수',
        align: 'left',
      },
    },
  };

  return (
    <PostBox>
      <Chart options={chart.options} series={chart.series} type='bar' height={300} />
    </PostBox>
  );
};

const PostBox = styled.div`
  margin-bottom: 70px;

  @media screen and (${mobileMaxWidth}) {
    margin-bottom: 20px;
  }
`;

export default PostChart;
