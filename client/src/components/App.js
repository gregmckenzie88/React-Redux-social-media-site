////////////////////
/// REACT ROUTES ///
////////////////////

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SearchTalent from './search/SearchTalent.js';


const SearchProject = () => <h2>Project Search</h2>;



class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Main} />


            <Route path="/search/talent" component={SearchTalent} />
            <Route path="/search/project" component={SearchProject} />

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null, actions)(App);
