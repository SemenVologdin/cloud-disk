import React from 'react';

const Input = (props) => {
  return (
    <input
      className={props.class}
      type={props.type}
      placeholder={props.placeholder}
      onChange={(event) => {
        props.setValue(event.target.value);
      }}
      value={props.value}
    />
  );
};

export default Input;
