import { delay } from '../API/API';
import { authInfo } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};
// ===================================
const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});
//====================================
export const initializeApp = () => async (dispatch) => {
  await dispatch(authInfo());
  await delay(1500);
  dispatch(initializedSuccess());
};
export default AppReducer;
