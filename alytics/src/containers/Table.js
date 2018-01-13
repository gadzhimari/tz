import { connect } from 'react-redux';
import Component from '../components/Table';
import * as actionCreators from '../actions';
import { columnsSelector } from '../selectors';

const Container = connect(
  ({ isOpen, columns }) => {
    const props = {
      isOpen,
      selectedColumns: columnsSelector(columns),
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
