import styled from 'styled-components';

import CitySelect from './CitySelect';
import SeoulMap from './SeoulMap';
import LevelInfo from './LevelInfo';
import ModalButtonContainer from '../containers/ModalButtonContainer';
import PmDetailContainer from '../containers/PmDetailContainer';

const ContentBlock = styled.div`
  display: flex;
  padding: 20px 100px;
  justify-content: center;
`;

const CityBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 120px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = () => {
  return (
    <ContentBlock>
      <CityBlock>
        <CitySelect />
        <SeoulMap />
      </CityBlock>

      <InfoBlock>
        <LevelInfo />
        <PmDetailContainer />
        <ModalButtonContainer />
      </InfoBlock>
    </ContentBlock>
  );
};

export default Content;
