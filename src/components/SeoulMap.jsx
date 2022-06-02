import styled from 'styled-components';
import map from '../assets/map.png';
import colors from '../lib/styles/colors';
import { mapPosition } from '../lib/cities/cityCord';
import { useParams } from 'react-router-dom';

const SeoulMapBlock = styled.div`
  display: flex;
  align-items: center;
  .map-wrap {
    position: relative;
  }

  .city-area-${(props) => props.current} {
    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 40px;
      background-color: ${colors.level[0]};
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const CityArea = styled.div`
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  &::after {
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    background-color: ${colors.gray[2]};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    &::after {
      width: 30px;
      height: 30px;
    }
  }
`;

const SeoulImg = styled.img`
  display: block;
  width: 700px;
  height: 700px;
  position: relative;
`;

const SeoulMap = () => {
  const { city } = useParams();
  console.log(city);

  return (
    <SeoulMapBlock current={city}>
      <div className="map-wrap">
        <SeoulImg src={map} alt="seoul map" />
        {mapPosition.map((p) => (
          <CityArea
            key={p.index}
            top={p.top}
            left={p.left}
            width={p.width}
            height={p.height}
            city={p.city}
            className={`city-area-${p.index}`}
          />
        ))}
      </div>
    </SeoulMapBlock>
  );
};

export default SeoulMap;
