import styled from 'styled-components';
import colors from '../lib/styles/colors';
import { ReactComponent as PlantICO } from '../assets/plant.svg';
import { ReactComponent as CloseICO } from '../assets/close.svg';

const textArr = [
  '대중교통 이용하기 🚍',
  '친환경 세제 사용하기 🧼',
  '친환경 인증 마크 제품 구매하기 🌱',
  '일회용품 사용 자제하기 🥤',
  '사용하지 않는 콘센트를 뽑아 에너지 절약하기 🔌',
  '육류 섭취 줄이고 유기농 식품 섭취하기 🥩',
];

const FullScreen = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.trans[0]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  position: relative;
  width: 850px;
  background-color: #fff;
  padding: 25px 45px;
  border-radius: 10px;
  text-align: center;

  .modal-title {
    font-size: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 30px;
      margin-right: 8px;
    }

    .modal-content {
      font-size: 20px;
      font-weight: 500;
    }
  }

  .close {
    cursor: pointer;
    width: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
    fill: ${colors.gray[2]};
  }
`;

const Modal = ({ randomIndex, visible, onCloseModal }) => {
  if (!visible) return null;
  return (
    <FullScreen>
      <ModalBlock>
        <h3 className="modal-title">
          <PlantICO /> Today's For Earth
        </h3>
        <p className="modal-content">{textArr[randomIndex]}</p>
        <CloseICO className="close" onClick={onCloseModal} />
      </ModalBlock>
    </FullScreen>
  );
};

export default Modal;
