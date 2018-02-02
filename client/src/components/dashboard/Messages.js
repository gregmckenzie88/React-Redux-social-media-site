import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment'

class Messages extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    // console.log(this.props.auth);
    axios.get("/api/new-messages", { params: { userId: this.props.auth._id} }).then( data => this.setState({ messages: data.data }) );
  }

  renderMessages(){
    console.log('msg in state', this.state.messages);

    if (this.state.messages && this.state.messages.length > 0){
      return this.state.messages.map( msg => {
        // console.log(msg)
        const timeStamp = moment(msg.messages[0].createdAt).format('LLLL');
        if(this.props.auth.profile.usernameName === msg.messages[0].to){
          return (
            <div style={{marginBottom: '25px'}} key={msg.messages[0].createdAt}>
              <h3 style={{marginTop: '0'}}>{msg.messages[0].from}</h3>
              <h4>{msg.messages[0].from} <span style={{fontSize: '11px'}}>{timeStamp}</span></h4>
              <p>{msg.messages[0].text}</p>
            </div>
          );
        } else {
          return (
            <div style={{marginBottom: '25px'}} key={msg.messages[0].createdAt}>
              <h3 style={{marginTop: '0'}}>{msg.messages[0].to}</h3>
              <h4>{msg.messages[0].from} <span style={{fontSize: '11px'}}>{timeStamp}</span></h4>
              <p>{msg.messages[0].text}</p>
            </div>
          );
        }

      })
    } else if(this.state.messages && this.state.messages.length === 0) {
      console.log('fired');
      return (
        <div>
          <h3 style={{marginTop: 0}}>No conversations logged...</h3>
          <h4>Create a profile and start chatting with local film makers now!</h4>
        </div>
      );
    }

  }

  render(){
    // console.log(this.state.messages);
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Recent Conversations</h3>
        </div>
        <div className="panel-body">
          {this.renderMessages()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(Messages);
