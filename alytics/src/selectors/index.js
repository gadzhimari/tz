import { createSelector } from 'reselect';
import _ from 'lodash';

const getColumns = state => state.nextState;
const getSelectedColumns = (columns) => {
  return _.pickBy(columns, column => column.visible);
}

export const columnsSelector = createSelector(
  getColumns,
  getSelectedColumns
);
