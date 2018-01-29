import React, { Component } from 'react';

class HeaderNoAuth extends Component {
  render(){
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
            <a className="navbar-brand"><span style={{marginRight: '10px'}} className="glyphicon glyphicon-film"></span>Flick Starter</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {/* <li className="active"><a >Link <span class="sr-only">(current)</span></a></li> */}
              {/* <li><a href="/api/logout">Log Out</a></li> */}
            </ul>

          </div>
        </div>
      </nav>
    );
  }
}


export default HeaderNoAuth;
