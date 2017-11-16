import React, { Component } from 'react';

class LandingPage extends Component {
  render(){

    return(
      <div className="container">
        <div className="jumbotron">
          <h1>Welcome to Flick Starter!</h1>
          <p>Meet like-minded film-makers in your city!</p>
          <p><a className="btn btn-primary btn-lg" href="/auth/google" role="button">Login with Google!</a></p>
        </div>
      </div>
    );
  }
}


export default LandingPage;
