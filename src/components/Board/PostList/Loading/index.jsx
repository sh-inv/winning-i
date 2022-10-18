import styled from 'styled-components';

const Loading = () => {
  return (
    <Spinner className='loader'>
      <svg viewBox='0 0 120 120' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <circle className='load one' cx='60' cy='60' r='40' />
        <circle className='load two' cx='60' cy='60' r='40' />
        <circle className='load three' cx='60' cy='60' r='40' />
        <g>
          <circle className='point one' cx='45' cy='70' r='5' />
          <circle className='point two' cx='60' cy='70' r='5' />
          <circle className='point three' cx='75' cy='70' r='5' />
        </g>
      </svg>
    </Spinner>
  );
};

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px auto;

  svg {
    width: 90%;
    fill: none;

    .load {
      transform-origin: 50% 50%;
      stroke-dasharray: 570;
      stroke-width: 20px;
      &.one {
        stroke: #554d73;
        animation: load 1.5s infinite;
      }
      &.two {
        stroke: #a496a4;
        animation: load 1.5s infinite;
        animation-delay: 0.1s;
      }
      &.three {
        stroke: #a5a7bb;
        animation: load 1.5s infinite;
        animation-delay: 0.2s;
      }
    }

    .point {
      animation: bounce 1s infinite ease-in-out;
      &.one {
        fill: #a5a7bb;
        animation-delay: 0s;
      }
      &.two {
        fill: #a496a4;
        animation-delay: 0.1s;
      }
      &.three {
        fill: #554d73;
        animation-delay: 0.2s;
      }
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }
    @keyframes load {
      0% {
        stroke-dashoffset: 570;
      }
      50% {
        stroke-dashoffset: 530;
      }
      100% {
        stroke-dashoffset: 570;
        transform: rotate(360deg);
      }
    }
  }
`;

export default Loading;
