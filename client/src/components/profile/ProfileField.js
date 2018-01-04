// render label and field input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div style={{marginBottom: '10px'}}>
      <div className="input-group">
        <span className="input-group-addon">{label}</span>
        <input className="form-control"  {...input} />
      </div>
      <div>
        {touched && error}
      </div>
    </div>
  );
}
