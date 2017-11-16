import React, { Component } from 'react';
import SearchPanel from './SearchPanel.js';
import SearchResults from './SearchResults.js';

class SearchTalent extends Component {
  render(){

    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-4 col-md-4">
            <SearchPanel />
          </div>
          <div className="col-xs-8 col-md-8">
            <SearchResults />
          </div>
        </div>
      </div>
    );
  }
}


export default SearchTalent;
