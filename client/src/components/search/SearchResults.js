import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions';
import { Link } from 'react-router-dom';

class SearchResults extends Component {
  componentDidMount() {
    this.props.fetchSearchResults();
  }
  //TODO: filter out your own profile
  renderSearchResults(){
    return this.props.searchResults.filter(user => user.profile).map(user => {
      return (
        <Link style={{'display': 'inline-block', 'width': '100%', textDecoration: 'none'}} to={`/profile/details/${user._id}`} key={user._id} className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{user.profile.usernameName} -- {user.profile.city} -- {user.profile.age}</h3>
          </div>
          <div className="panel-body">
            {user.profile.headline}
          </div>
        </Link>
      );
    })
  }

  render(){
    return(
      <div>{this.renderSearchResults()}</div>
    );
  }
}

function mapStateToProps(state){
  return { searchResults: state.searchResults };
}

export default connect(mapStateToProps, { fetchSearchResults })(SearchResults);
