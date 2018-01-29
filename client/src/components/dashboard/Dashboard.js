import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
  completeProfile(){
    if(!this.props.auth.profile){
      return (
        <div className="panel-body">
          <h3 style={{marginTop: '0'}}>Welcome to Flick Starter!</h3>
          <Link to='/profile/new'>Click here to build your profile</Link>
        </div>
      );
    } else {
      return (
        <div className="panel-body">
          <Link to='/profile/new'>Edit your profile</Link>
        </div>
      );
    }
  }
  render(){
    console.log(this.props);
    return (
      <div className="container-fluid container">
        <div className="row">
          <div className="col-xs-4 col-md-4">



            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Profile</h3>
              </div>
              {this.completeProfile()}

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
