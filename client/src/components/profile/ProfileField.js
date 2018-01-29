// render label and field input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div style={{marginBottom: '10px'}}>

      <label>{label}</label>
      <div className="input-group" style={{width: '100%'}}>
        <input type="text" className="form-control" {...input}  />
      </div>

      <div>
        {touched && error}
      </div>
    </div>
  );
}
