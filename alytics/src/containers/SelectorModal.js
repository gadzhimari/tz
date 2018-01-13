import { connect } from 'react-redux';
import Component from '../components/SelectorModal';
import * as actionCreators from '../actions';

const Container = connect(
  ({ columns, isOpen }) => {
    const props = {
      columns,
      isOpen,
    }
    return props;
  },
  actionCreators,
)(Component);

export default Container;
