import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions';
import { Link } from 'react-router-dom';

class SearchResults extends Component {
  componentDidMount() {
    this.props.fetchSearchResults();
  }

  componentWillReceiveProps(){
    this.setState(this.state);
  }
  //TODO: filter out your own profile
  renderSearchResults(){

    const users = this.props.searchResults ? this.props.searchResults.filter(user => user._id !== this.props.currentUser._id) : null;
    if(users.length === 0){
      return (
        <div>
          <h2 style={{marginTop: '100px', textAlign: 'center'}}>No Users is this city.</h2>
          <h2 style={{marginTop: '0', textAlign: 'center'}}>Try another one?</h2>
        </div>
      );
    } else {
      return this.props.searchResults.filter(user => user._id !== this.props.currentUser._id).map(user => {
        return (
          <Link style={{'display': 'inline-block', 'width': '100%', textDecoration: 'none'}} to={`/profile/details/${user._id}`} key={user._id} className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{user.profile.usernameName}, {user.profile.primary} in {user.profile.city}</h3>
            </div>
            <div className="panel-body">
              {user.profile.description}
            </div>
          </Link>
        );
      })
    }
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
