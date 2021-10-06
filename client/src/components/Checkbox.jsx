import React from 'react';

const Checkbox = (props) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Checkbox;
