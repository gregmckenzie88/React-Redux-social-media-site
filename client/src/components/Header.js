import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderAuth from './headers/headerAuth.js';
import HeaderNoAuth from './headers/headerNoAuth.js';

class Header extends Component {
  render(){

    if(this.props.auth === false){
      return <HeaderNoAuth />
    } else if (this.props.auth === null) {
      return <div></div>
    }
    return <HeaderAuth name={this.props.auth.name} />
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(Header);
