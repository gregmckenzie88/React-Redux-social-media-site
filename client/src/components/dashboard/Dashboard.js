import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dashboard extends Component {
  render(){
    return (
      <div className="container-fluid container">
        <div className="row">
          <div className="col-xs-4 col-md-4">



            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>


          </div>
          <div className="col-xs-8 col-md-8">


            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(Dashboard);
