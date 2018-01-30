////////////////////
/// REACT ROUTES ///
////////////////////

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header.js';
// import Footer from './Footer.js';
import Main from './Main.js';
import SearchTalent from './search/SearchTalent.js';
import ProfileNew from './profile/ProfileNew.js';
import ProfileShow from './profile/ProfileShow.js';

const SearchProject = () => <h2>Project Search</h2>;



class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return (
      <div style={{paddingBottom: '40px'}}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Main} />


            <Route path="/search/talent" component={SearchTalent} />
            <Route path="/search/project" component={SearchProject} />
            <Route path="/profile/new" component={ProfileNew} />

            <Route path="/profile/details/:id" component={ProfileShow} />

            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
