import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderAuth extends Component {
  renderPersonalization(props){
    if(this.props.name.first && this.props.name.last){
      return <p className="navbar-text navbar-right">Signed in as <a className="navbar-link">{this.props.name.first} {this.props.name.last}</a></p>;
    }
  }
  render(props){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">Flick Starter</a>

          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {/* <li><a href="/api/logout">Log Out</a></li> */}
              <li><Link to='/'>Dashboard</Link></li>
              <li><Link to='/search/talent'>Search Talent</Link></li>
            </ul>
            {/* {this.renderPersonalization()} */}
            <p className="navbar-text navbar-right"><a href="/api/logout">Log Out</a></p>
          </div>

        </div>
      </nav>
    );
  }
}


export default HeaderAuth;
