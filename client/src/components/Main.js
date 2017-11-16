import React, { Component } from 'react';
import { connect } from 'react-redux';

import LandingPage from './dashboard/LandingPage.js';
import PageLoading from './PageLoading.js';
import Dashboard from './dashboard/Dashboard.js';

class Main extends Component {
  render(){
    console.log(this.props.auth)
    ////////////////////////
    /// LOGGED OUT STATE ///
    ////////////////////////
    if(this.props.auth === false){
      return <LandingPage />
    } else if (this.props.auth === null) {
      /////////////////////
      /// LOADING STATE ///
      /////////////////////
      return <PageLoading />
    }
    ///////////////////////
    /// LOGGED IN STATE ///
    ///////////////////////
    return <Dashboard />
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(Main);
