import { useDispatch, useSelector } from 'react-redux';
import { setModalVisible } from '../modules/modal';
import ModalButton from '../components/ModalButton';

const ModalButtonContainer = () => {
  const dispatch = useDispatch();
  const { visible } = useSelector(({ modal }) => ({
    visible: modal.visible,
  }));

  const onOpenModal = () => {
    dispatch(setModalVisible(true));
  };

  const onCloseModal = () => {
    dispatch(setModalVisible(false));
  };

  return (
    <ModalButton
      visible={visible}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
    />
  );
};

export default ModalButtonContainer;
