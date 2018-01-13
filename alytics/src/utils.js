import React from 'react';
import { Checkbox } from 'react-bootstrap';
import data from './data/data.json';
import _ from 'lodash';

const headers = [
  { name: 'КАМПАНИИ' },
  { name: 'Статус' },
  { name: 'Показы' },
  { name: 'Клики' },
  { name: 'CTR' },
  { name: 'CPC' },
  { name: 'Затраты' }
];

const costs = headers.reduce((acc, { name }) => {
  const id = _.uniqueId();
  return { ...acc,  [id]: { id, name, visible: true }}
}, {});

export const createState = () => {
  const goals = data.goals_list.reduce((acc, goal) => {
    const id = _.uniqueId();
    return { ...acc, [id]: { id, name: goal.name, visible: true } }
  }, {});

  const columns = { ...costs, ...goals };
  const columnsState = {
    nextState: columns,
    prevState: columns,
  };

  return columnsState;
}

export const createColumns = (columns) => {
  const checkboxColumn = {
    Header: ' ',
    accessor: 'check',
    width: 30,
    headerClassName: 'header header__expanded',
    Cell: row => (<Checkbox></Checkbox>),
  };
  console.log('createColumns ', columns);
}
