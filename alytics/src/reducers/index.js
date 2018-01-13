import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { createState } from '../utils';
import _ from 'lodash';

const initialState = createState();

const columns = handleActions({
  [actions.selectColumn](state, { payload: { id } }) {
    const column = state.nextState[id];
    const updatedColumn = { ...column, visible: true };
    const nextState = { ...state.nextState, [id]: updatedColumn };
    return { ...state, nextState };
  },
  [actions.deselectColumn](state, { payload: { id } }) {
    const columns = state.nextState;
    const selectedColumnsCount = Object.keys(state.nextState).filter(id => columns[id].visible).length;
    if (selectedColumnsCount < 2) {
      return state;
    }
    const column = state.nextState[id];
    const updatedColumn = { ...column, visible: false };
    const nextState = { ...state.nextState, [id]: updatedColumn };
    return { ...state, nextState };
  },
  [actions.commitSelectedColumns](state) {
    return Object.assign(state, { prevState: state.nextState });
  },
  [actions.cancelSelectedColumns](state) {
    return Object.assign(state, { nextState: state.prevState });
  },
  [actions.toggleModal](state) {
    if (_.isEqual(state.prevState, state.nextState)) {
      return state;
    }
    return Object.assign(state, { nextState: state.prevState });
  }
}, initialState);

const isOpen = handleActions({
  [actions.toggleModal](state) {
    return !state;
  },
}, false);

export default combineReducers({
  columns,
  isOpen,
});
