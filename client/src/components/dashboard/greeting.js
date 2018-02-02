import React, { Component } from 'react';

class Greeting extends Component {
  render(){
    if(!this.props.user.profile){
      return(
        <div style={{marginBottom: '20px'}}>
          <h2 style={{marginTop: '30px', marginBottom: '0px', textAlign: 'center'}}>Welcome to Flick Starter!</h2>
          <h4 style={{marginBottom: '30px', textAlign: 'center'}}>Connect with film makers in your city!</h4>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}



export default Greeting;
