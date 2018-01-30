import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChatBox extends Component {
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading"><h4 style={{margin: '0'}}>Chat with {this.props.chatPartner}</h4></div>
        <div style={{height: '300px', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}} className="panel-body">

          <div id="no-messages">
            <h5 style={{textAlign: 'center'}}>Complete your profile so you can chat with {this.props.chatPartner}</h5>
            <h3 style={{padding: '16px', textAlign: 'center', marginBottom: '80px', paddingTop: '0', marginTop: '0'}}>

              <Link to='/profile/new'>Click here to create a profile!</Link>
            </h3>
          </div>

          <form id="message-form" className="input-group">
            <input disabled id="message-text" name="message" type="text" className="form-control" placeholder="Message" aria-describedby="basic-addon1" />
            <span className="input-group-addon" id="basic-addon1"><button disabled style={{background: 'none', border: 'none', outline: 'none'}}>Send</button></span>
          </form>

        </div>
      </div>
    );
  };
}

export default ChatBox;
