import styled from 'styled-components';
import colors from '../lib/styles/colors';
import { useEffect, useState } from 'react';
import { ReactComponent as GeoICO } from '../assets/geo.svg';
import { Link, useParams } from 'react-router-dom';
import { cities } from '../lib/cities/cityName';

const CitySelectBlock = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
`;

const GeoWrapper = styled.div`
  display: flex;
  margin-right: 80px;
  align-items: center;

  svg {
    width: 20px;
    fill: ${colors.gray[2]};
    margin-right: 8px;
  }

  h3 {
    color: ${colors.gray[2]};
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.02em;
  }
`;

const Select = styled.select`
  cursor: pointer;
  width: 180px;
  height: 50px;
  border-radius: 8px;
  font-size: 18px;
  text-align: center;
  border: none;
  border-bottom: 2px solid ${colors.gray[2]};
  margin-right: 20px;

  &:active,
  &:hover {
    background-color: ${colors.gray[0]};
  }
`;

const StyledForm = styled.form`
  display: flex;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  background-color: ${colors.green[2]};
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 17px;

  &:hover {
    background-color: ${colors.green[1]};
  }
`;

const CitySelect = () => {
  const { city } = useParams();
  console.log(cities[city]);
  const [select, setSelect] = useState(0);

  const onChangeSelect = (e) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    setSelect(city);
  }, [city]);

  return (
    <CitySelectBlock>
      <GeoWrapper>
        <GeoICO />
        <h3>Seoul</h3>
      </GeoWrapper>
      <StyledForm>
        <Select className="hello" value={select} onChange={onChangeSelect}>
          {cities.map((city, i) => (
            <option key={city} value={i}>
              {city}
            </option>
          ))}
        </Select>
        <StyledLink to={`/pm/${select}`}>조회</StyledLink>
      </StyledForm>
    </CitySelectBlock>
  );
};

export default CitySelect;
