// render label and field input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div style={{marginBottom: '10px'}}>

      <label>{label}</label>
      <div className="input-group" style={{width: '100%'}}>
        <input type="text" className="form-control" {...input}  />
      </div>

      <div style={{color: '#b92c28', fontWeight: 'bold'}}>
        {touched && error}
      </div>
    </div>
  );
}
