import { createAction } from 'redux-actions';

export const selectColumn = createAction('COLUMN_SELECT');
export const deselectColumn = createAction('COLUMN_DESELECT');
export const commitSelectedColumns = createAction('SELECTED_COLUMNS_COMMIT');
export const cancelSelectedColumns = createAction('SELECTED_COLUMNS_CANCEL');
export const toggleModal = createAction('MODAL_TOGGLE');
