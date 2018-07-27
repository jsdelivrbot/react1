import React from 'react';

const ControlledSearchbar = (props) => {
  return (
    <div className="col-xs-12">
      <label>
        Search: <input value={props.term} onChange={props.handleChange} />
      </label>
    </div>
  );
};

export default ControlledSearchbar;
