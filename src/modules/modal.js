import { createAction, handleActions } from 'redux-actions';

const SET_MODAL_VISIBLE = 'modal/SET_MODAL_VISIBLE';

export const setModalVisible = createAction(
  SET_MODAL_VISIBLE,
  (visible) => visible
);
// payload로 true/false (visible) 전달받음

const initialState = {
  visible: false,
};

const modal = handleActions(
  {
    [SET_MODAL_VISIBLE]: (state, { payload: visible }) => ({
      ...state,
      visible,
    }),
  },
  initialState
);

export default modal;
