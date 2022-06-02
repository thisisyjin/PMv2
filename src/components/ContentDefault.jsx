import styled from 'styled-components';

import CitySelect from './CitySelect';
import SeoulMap from './SeoulMap';
import LevelInfo from './LevelInfo';
import PmDefault from './PmDefault';
import ModalButtonContainer from '../containers/ModalButtonContainer';

const ContentDefaultBlock = styled.div`
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

const ContentDefault = () => {
  return (
    <ContentDefaultBlock>
      <CityBlock>
        <CitySelect />
        <SeoulMap />
      </CityBlock>

      <InfoBlock>
        <LevelInfo />
        <PmDefault />
        <ModalButtonContainer />
      </InfoBlock>
    </ContentDefaultBlock>
  );
};

export default ContentDefault;
