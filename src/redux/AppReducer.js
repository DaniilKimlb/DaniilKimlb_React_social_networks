import { delay } from '../API/API';
import { authInfo } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const IS_GLOBAL_ERROR = 'IS_GLOBAL_ERROR';
const initialState = {
  initialized: false,
  isGlobalError: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    case IS_GLOBAL_ERROR:
      return { ...state, isGlobalError: action.globalError };
    default:
      return state;
  }
};
// ===================================
const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});
export const globalError = (globalError) => ({
  type: IS_GLOBAL_ERROR,
  globalError,
});
//====================================
export const initializeApp = () => async (dispatch) => {
  await dispatch(authInfo());
  await delay(1500);
  dispatch(initializedSuccess());
};
export default AppReducer;
