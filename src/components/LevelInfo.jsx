import styled from 'styled-components';
import { ReactComponent as PmLevelICO } from '../assets/pmLevel.svg';
import colors from '../lib/styles/colors';

const LevelInfoBlock = styled.div`
  width: 400px;
  border-radius: 15px;
  border: 2.5px solid #000;
  text-align: center;
  margin-bottom: 20px;

  .level-title {
    padding: 8px 0;
    font-size: 20px;
    border-bottom: 2.5px solid #000;
    margin-bottom: 14px;
  }
`;

const LevelIcons = styled.div`
  width: 260px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 14px;
  position: relative;

  svg {
    width: 40px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      + .level-detail {
        display: block;
      }
    }
  }

  .level-detail {
    position: absolute;
    display: none;
    background-color: ${colors.trans[0]};
    color: #fff;
    font-size: 14px;
    padding: 8px 18px;
    border-radius: 5px;

    .pm-title {
      font-size: 15px;
      font-weight: 500;
      margin-right: 9px;
    }
  }

  .very-bad {
    stroke: ${colors.level[0]};
  }
  .bad {
    stroke: ${colors.level[1]};
  }
  .soso {
    stroke: ${colors.level[2]};
  }

  .good {
    stroke: ${colors.level[3]};
  }

  .desc {
    width: 60px;
    font-size: 15px;
    letter-spacing: -0.03em;
    margin-right: 10px;
    margin-left: 6px;
    text-align: left;
    font-weight: 500;
  }
`;

const LevelInfo = () => {
  return (
    <LevelInfoBlock>
      <h3 className="level-title">미세먼지 Level</h3>
      <LevelIcons>
        <PmLevelICO className="very-bad" />
        <div className="level-detail">
          <span className="pm-title">PM 10</span>151~
          <br />
          <span className="pm-title">PM 2.5</span>76~
        </div>
        <span className="desc">매우 나쁨</span>
        <PmLevelICO className="bad" />
        <div className="level-detail">
          <span className="pm-title">PM 10</span>81~150
          <br />
          <span className="pm-title">PM 2.5</span>36~75
        </div>
        <span className="desc">나쁨</span>
        <PmLevelICO className="soso" />
        <div className="level-detail">
          <span className="pm-title">PM 10</span>31~80
          <br />
          <span className="pm-title">PM 2.5</span>16~35
        </div>
        <span className="desc">보통</span>
        <PmLevelICO className="good" />
        <div className="level-detail">
          <span className="pm-title">PM 10</span>0~30
          <br />
          <span className="pm-title">PM 2.5</span>0~15
        </div>
        <span className="desc">좋음</span>
      </LevelIcons>
    </LevelInfoBlock>
  );
};

export default LevelInfo;
