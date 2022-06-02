import { createAction, handleActions } from 'redux-actions';

const SET_PM_LEVEL = 'pm/SET_PM_LEVEL';
const SET_PM_PM10 = 'pm/SET_PM_PM10';
const SET_PM_PM25 = 'pm/SET_PM_PM25';

export const setPmLevel = createAction(SET_PM_LEVEL, (level) => level);
export const setPmPm10 = createAction(SET_PM_PM10, (pm10) => pm10);
export const setPmPm25 = createAction(SET_PM_PM25, (pm25) => pm25);

const initialState = {
  level: null,
  pm10: 0,
  pm25: 0,
};

const pm = handleActions(
  {
    [SET_PM_LEVEL]: (state, { payload: level }) => ({
      ...state,
      level,
    }),
    [SET_PM_PM10]: (state, { payload: pm10 }) => ({
      ...state,
      pm10,
    }),
    [SET_PM_PM25]: (state, { payload: pm25 }) => ({
      ...state,
      pm25,
    }),
  },
  initialState
);

export default pm;
