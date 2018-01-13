import React, { Component } from 'react';
import { Modal, Button, Checkbox } from 'react-bootstrap';

export default class SelectorModal extends Component {
  toggleColumnVisibility = id => event => {
    const { selectColumn, deselectColumn } = this.props;
    event.target.checked ? selectColumn({ id }) : deselectColumn({ id });
  }

  handleClick = () => {
    this.props.commitSelectedColumns();
    this.props.toggleModal();
  }

  handleClose = () => {
    this.props.cancelSelectedColumns();
    this.props.toggleModal();
  }

  renderColumns() {
    const columns = this.props.columns.nextState;
    console.log('renderColumns ', this.props);
    return Object.keys(columns).map(item => {
      const { name, visible } = columns[item];

      return (<div key={item}>
        <Checkbox onChange={this.toggleColumnVisibility(item)}
          checked={visible}>
          { name }
        </Checkbox>
      </div>)
    });
  }

  render() {
    const { isOpen } = this.props;

    return (
      <Modal show={isOpen} onHide={this.handleClose}>
        <Modal.Body>
          {this.renderColumns()}
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.handleClick}>Ok</Button>
          <Button onClick={this.handleClose}>Отменить</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
