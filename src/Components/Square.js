import React from 'react';

// It is the destructred version of props
// const Square = ({ value, onClick }) => <button onClick={onClick}>{value}</button>;

const Square = props => {
  return <button onClick={props.onClick}>{props.value}</button>;
};

export default Square;
