import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions';

class SearchPanel extends Component {

  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Refine Search</h3>
        </div>
        <form className="panel-body">

          <label htmlFor="refine-city">City</label>
          <div style={{marginBottom: '10px', width: '100%'}} className="input-group">
            <input type="text" id="refine-city" className="form-control" aria-describedby="basic-addon3" />
          </div>

          <label htmlFor="refine-focus">Focus</label>
          <div style={{marginBottom: '10px', width: '100%'}} className="input-group">
            <input type="text" className="form-control" id="refine-focus" aria-describedby="basic-addon3" />
          </div>


          <div>
            <button type="button" onClick={() => this.props.fetchSearchResults({
              params: {
                city: $('#refine-city').val(),
                focus: $('#refine-focus').val()
              }
            })} className="btn btn-success">Refine</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { searchResults: state.searchResults };
}

export default connect(mapStateToProps, { fetchSearchResults })(SearchPanel);
