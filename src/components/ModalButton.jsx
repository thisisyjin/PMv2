import styled from 'styled-components';
import colors from '../lib/styles/colors';
import { ReactComponent as EarthICO } from '../assets/earth.svg';
import Modal from './Modal';

const ModalButtonBlock = styled.div`
  margin-top: 16px;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  border-radius: 10px;
  padding: 8px 0;
  text-align: canter;
  background-color: ${colors.green[2]};
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.03em;
  cursor: pointer;
  svg {
    width: 26px;
    margin-left: 10px;
  }
  &:hover {
    background-color: ${colors.green[1]};
  }
`;

const ModalButton = ({ visible, onOpenModal, onCloseModal }) => {
  return (
    <ModalButtonBlock>
      <StyledButton onClick={onOpenModal}>
        For Earth
        <EarthICO />
      </StyledButton>
      <Modal
        visible={visible}
        randomIndex={Math.floor(Math.random() * 6)}
        onCloseModal={onCloseModal}
      />
    </ModalButtonBlock>
  );
};

export default ModalButton;
