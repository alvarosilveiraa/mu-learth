import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import version from '../../fixtures/version';

const INITIAL_STATE = Immutable({
  version: version.event,
  events: []
});

/*** SELECTORS ***/
/*** REDUCERS ***/
export const updateEvents = (state, { events }) => {
  return {
    ...state,
    events
  }
}

export const resetEvents = state => {
  return INITIAL_STATE;
}

/*** TYPES AND CREATORS ***/
const { Types, Creators } = createActions({
  updateEvents: ['events'],
  resetEvents: []
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_EVENTS]: updateEvents,
  [Types.RESET_EVENTS]: resetEvents
});

export default Creators;
