import React, { Component } from 'react';
import SearchPanel from './SearchPanel.js';
import SearchResults from './SearchResults.js';
import { connect } from 'react-redux';

class SearchTalent extends Component {
  handleSubmit(city, focus){
    console.log(city, focus);
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-md-4">
            <SearchPanel handleSubmit={this.handleSubmit} />
          </div>
          <div className="col-xs-8 col-md-8">
            <SearchResults currentUser={this.props.auth} />
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(SearchTalent);
