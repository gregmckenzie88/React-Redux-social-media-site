import React, { Component } from 'react';

class SearchPanel extends Component {
  render(){

    return(
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Refine Search</h3>
        </div>
        <div className="panel-body">

          <label for="minimum-age">Min Age</label>
          <div style={{marginBottom: '10px'}} className="input-group">
            <input type="text" className="form-control" id="minimum-age" aria-describedby="basic-addon3" />
          </div>

          <label for="maximum-age">Max Age</label>
          <div style={{marginBottom: '10px'}} className="input-group">
            <input type="text" className="form-control" id="maximum-age" aria-describedby="basic-addon3" />
          </div>

          <label for="city">City</label>
          <div style={{marginBottom: '10px'}} className="input-group">
            <input type="text" className="form-control" id="city" aria-describedby="basic-addon3" />
          </div>


          <div>
            <button type="button" className="btn btn-success">Refine</button>
          </div>
        </div>
      </div>
    );
  }
}


export default SearchPanel;
