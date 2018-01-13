import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { createColumns } from '../utils';

export default class Table extends Component {
  handleClick = () => {
    this.props.toggleModal();
  }

  render() {
    console.log('TableComponent ', this.props);

    createColumns(this.props.selectedColumns);

    return (
      <Button onClick={this.handleClick}>Open modal</Button>
    )
  }
}
