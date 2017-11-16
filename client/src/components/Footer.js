import React, { Component } from 'react';
import { connect } from 'react-redux';

import FooterAuth from './footers/footerAuth.js';
import FooterNoAuth from './footers/footerNoAuth.js';

class Footer extends Component {
  render(){
    if(this.props.auth === false){
      return <FooterNoAuth />
    } else if (this.props.auth === null) {
      // Loading state
      return <div></div>
    }
    return <FooterAuth />
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(Footer);
