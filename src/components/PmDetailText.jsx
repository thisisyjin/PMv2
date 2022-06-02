import styled from 'styled-components';
import colors from '../lib/styles/colors';
import { cities } from '../lib/cities/cityName';

const PmDetailTextBlock = styled.div`
  margin-bottom: 18px;
`;

const DateAreaWrapper = styled.div`
  font-size: 17px;
  letter-spacing: 0.03em;
  .month {
    font-weight: 500;
  }
  .date {
    font-weight: 500;
  }
  .cityName {
    font-size: 19px;
    font-weight: 700;
  }
`;

const PmInfo = styled.div`
  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
  .pm-level {
    display: inline-block;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    padding: 3px 6px;
    border-radius: 8px;
    color: #fff;
    background-color: ${(props) =>
      props.level === '매우 나쁨'
        ? colors.level[0]
        : props.level === '나쁨'
        ? colors.level[1]
        : props.level === '보통'
        ? colors.level[2]
        : colors.level[3]};
  }

  .pm-more {
    display: none;
    position: absolute;
    top: -100px;
    left: 30%;
    padding: 4px 8px;
    border-radius: 6px;
    background-color: ${colors.trans[0]};
    color: #fff;
    text-align: center;

    .pm-more-title {
      font-size: 18px;
      font-weight: 500;
      margin-right: 8px;
    }
  }

  &:hover {
    .pm-more {
      display: block;
    }
  }
`;

const MaskInfo = styled.div`
  color: ${colors.green[2]};
  font-weight: 700;
`;

const PmDetailText = ({ city, level, pm10, pm25 }) => {
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();

  return (
    <PmDetailTextBlock>
      <DateAreaWrapper>
        <span className="month">{month}</span>월{' '}
        <span className="date">{date}</span>일{' '}
        <span className="cityName">{cities[city]}</span>의
      </DateAreaWrapper>
      <PmInfo level={level}>
        미세먼지 정도는 <span className="pm-level">{level}</span> 입니다.
        <div className="pm-more">
          <span className="pm-more-title">PM 10</span> {`${pm10} ㎍/㎥`} <br />{' '}
          <span className="pm-more-title">PM 2.5</span> {`${pm25} ㎍/㎥`}
        </div>
      </PmInfo>

      <MaskInfo>
        {level === '매우 나쁨' || level === '나쁨'
          ? '마스크를 착용하세요.'
          : '맑은 하루가 되겠네요!'}
      </MaskInfo>
    </PmDetailTextBlock>
  );
};

export default PmDetailText;
