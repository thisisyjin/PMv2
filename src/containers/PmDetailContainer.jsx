import { useDispatch, useSelector } from 'react-redux';
import { setPmLevel, setPmPm10, setPmPm25 } from '../modules/pm';
import { useEffect } from 'react';
import PmDetail from '../components/PmDetail';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PmDetailContainer = () => {
  const dispatch = useDispatch();
  const { city } = useParams();

  useEffect(() => {
    if (city === 'undefined') return;
    // mixed content 해결을 위한 mock 서버에 데이터 저장
    axios
      .get('https://5c26af96-2020-4c09-935a-4452bd21798a.mock.pstmn.io/pm')
      .then((response) => {
        const pmLevel = response.data.RealtimeCityAir.row[city].IDEX_NM;
        const pmPm10 = response.data.RealtimeCityAir.row[city].PM10;
        const pmPm25 = response.data.RealtimeCityAir.row[city].PM25;

        dispatch(setPmLevel(pmLevel));
        dispatch(setPmPm10(pmPm10));
        dispatch(setPmPm25(pmPm25));
      });
  }, [city, dispatch]);

  const { level, pm10, pm25 } = useSelector(({ pm }) => ({
    level: pm.level,
    pm10: pm.pm10,
    pm25: pm.pm25,
  }));

  console.log(level, pm10, pm25);
  return <PmDetail level={level} pm10={pm10} pm25={pm25} city={city} />;
};

export default PmDetailContainer;
