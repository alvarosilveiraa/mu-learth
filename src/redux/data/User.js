import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({});

/*** SELECTORS ***/
/*** REDUCERS ***/
export const updateUser = (state, { user }) => {
  return {
    ...state,
    ...user
  }
}

export const resetUser = state => {
  return INITIAL_STATE;
}

/*** TYPES AND CREATORS ***/
const { Types, Creators } = createActions({
  updateUser: ['user'],
  resetUser: []
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_USER]: updateUser,
  [Types.RESET_USER]: resetUser
});

export default Creators;
