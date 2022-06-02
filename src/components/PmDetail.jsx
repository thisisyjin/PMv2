import styled from 'styled-components';
import PmDetailImage from './PmDetailImage';
import PmDetailText from './PmDetailText';
import colors from '../lib/styles/colors';

// API 데이터 요청

const PmDetailBlock = styled.div`
  width: 400px;
  min-height: 425px;
  border-radius: 15px;
  border: 2.5px solid #000;
  text-align: center;

  .detail-title {
    padding: 8px 0;
    font-size: 20px;
    border-bottom: 2.5px solid #000;
    margin-bottom: 14px;
  }

  .error-msg {
    padding: 150px 0;
    font-size: 22px;

    .error-point {
      background-color: #ffea2d;
      padding: 0 8px;
      font-size: 24px;
      font-weight: 700;
    }
    b {
      display: inline-block;
      background-color: ${colors.green[2]};
      color: #fff;
      padding: 2px 8px;
      border-radius: 6px;
    }
  }
`;

const PmDetail = ({ level, pm10, pm25, city }) => {
  return (
    <PmDetailBlock>
      {city !== 'undefined' ? (
        <>
          <h3 className="detail-title">Info</h3>
          <PmDetailImage level={level} />
          <PmDetailText level={level} city={city} pm10={pm10} pm25={pm25} />
        </>
      ) : (
        <>
          <h3 className="detail-title">Info</h3>
          <p className="error-msg">
            <span className="error-point">지역을 선택</span>한 후, <b>조회</b>를
            눌러주세요.
          </p>
        </>
      )}
    </PmDetailBlock>
  );
};

export default PmDetail;
