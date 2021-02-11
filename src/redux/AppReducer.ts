import { delay } from '../API/API';
import { authInfo } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const IS_GLOBAL_ERROR = 'IS_GLOBAL_ERROR';

const initialState = {
  initialized: false,
  isGlobalError: false,
};
export type initialStateType = typeof initialState;
const AppReducer = (state = initialState, action: any): initialStateType => {
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
type initializedSuccessType = {
  type: typeof INITIALIZED_SUCCESS;
};
const initializedSuccess = (): initializedSuccessType => ({
  type: INITIALIZED_SUCCESS,
});
type globalErrorType = {
  type: typeof IS_GLOBAL_ERROR;
  globalError: boolean;
};
export const globalError = (globalError: boolean): globalErrorType => ({
  type: IS_GLOBAL_ERROR,
  globalError,
});
//====================================
export const initializeApp = () => async (dispatch: any) => {
  await dispatch(authInfo());
  await delay(1500);
  dispatch(initializedSuccess());
};
export default AppReducer;
