import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import version from '../../fixtures/version';

const INITIAL_STATE = Immutable({
  version: version.event,
  events: [
    {
      name: 'Chaos Castle',
      respawn: [
        '01:45',
        '05:45',
        '09:45',
        '13:45',
        '17:45',
        '21:45'
      ],
      weekDays: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: 'Blood Castle',
      respawn: [
        '00:00',
        '02:00',
        '04:00',
        '06:00',
        '08:00',
        '10:00',
        '12:00',
        '14:00',
        '16:00',
        '18:00',
        '20:00',
        '22:00'
      ],
      weekDays: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: 'Devil Square',
      respawn: [
        '00:30',
        '04:30',
        '08:30',
        '12:30',
        '16:30',
        '20:30'
      ],
      weekDays: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: 'Lorência Drop',
      respawn: [
        '00:00',
        '04:00',
        '08:00',
        '12:00',
        '16:00',
        '20:00'
      ],
      weekDays: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: 'Golden Invasion',
      respawn: [
        '00:25',
        '04:25',
        '08:25',
        '12:25',
        '16:25',
        '18:25'
      ],
      weekDays: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: 'Super Golden Invasion',
      respawn: [
        '01:25',
        '07:25',
        '13:25',
        '19:25'
      ],
      weekDays: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: 'Budge',
      respawn: [
        '00:30',
        '12:30',
        '21:30'
      ],
      weekDays: [1, 1, 0, 1, 1, 1, 1]
    },
    {
      name: 'Balrog',
      respawn: [
        '03:10',
        '07:10',
        '11:10',
        '15:10',
        '19:10',
        '23:10'
      ],
      weekDays: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: 'Metal Balrog',
      respawn: [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00'
      ],
      weekDays: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: 'Ice Queen',
      respawn: [
        '00:00',
        '02:00',
        '04:00',
        '06:00',
        '08:00',
        '10:00',
        '12:00',
        '14:00',
        '16:00',
        '18:00',
        '20:00'
      ],
      weekDays: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: 'Hydra',
      respawn: [
        '13:45',
        '23:45'
      ],
      weekDays: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: 'Kundun',
      respawn: [
        '16:00'
      ],
      weekDays: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: 'CryWolf',
      respawn: [
        '20:30'
      ],
      weekDays: [0, 0, 0, 1, 0, 0, 1]
    },
    {
      name: 'Castle Siege',
      respawn: [
        '14:00'
      ],
      weekDays: [1, 0, 0, 0, 0, 0, 0]
    }
  ]
});

/*** SELECTORS ***/
/*** REDUCERS ***/
export const resetEvents = state => {
  return INITIAL_STATE;
}

/*** TYPES AND CREATORS ***/
const { Types, Creators } = createActions({
  resetEvents: []
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_EVENTS]: resetEvents
});

export default Creators;
