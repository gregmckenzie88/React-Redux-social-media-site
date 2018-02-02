import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'

class Messages extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    axios.get("/api/new-messages", { params: { userId: this.props.auth._id} }).then( data => this.setState({ messages: data.data }) );
  }

  renderMessages(){

    if (this.state.messages && this.state.messages.length > 0){
      return this.state.messages.map( msg => {
        const timeStamp = moment(msg.messages[0].createdAt).format('LLLL');
        const thisUser = new RegExp(this.props.auth._id, 'i');
        const link = msg.roomId.replace(thisUser, '');
        if(this.props.auth.profile.usernameName === msg.messages[0].to){
          return (
            <div style={{marginBottom: '25px', marginTop: '25px'}} key={msg.messages[0].createdAt}>
              <Link to={`/profile/details/${link}`}><h3 style={{marginTop: '0'}}>{msg.messages[0].from}</h3></Link>

              <h4>{msg.messages[0].from} <span style={{fontSize: '11px'}}>{timeStamp}</span></h4>
              <p>{msg.messages[0].text}</p>
            </div>
          );
        } else {
          return (
            <div style={{marginBottom: '25px', marginTop: '25px'}} key={msg.messages[0].createdAt}>
              <Link to={`/profile/details/${link}`}><h3 style={{marginTop: '0'}}>{msg.messages[0].to}</h3></Link>
              <h4>{msg.messages[0].from} <span style={{fontSize: '11px'}}>{timeStamp}</span></h4>
              <p>{msg.messages[0].text}</p>
            </div>
          );
        }

      })
    } else if(this.state.messages && this.state.messages.length === 0) {
      return (
        <div style={{marginBottom: '15px', marginTop: '15px'}}>
          <h3 style={{marginTop: 0}}>No conversations logged...</h3>
          <h4>Create a profile and start chatting with local film makers now!</h4>
        </div>
      );
    }

  }

  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Recent Conversations</h3>
        </div>
        <div style={{paddingTop: '0', paddingBottom: '0'}} className="panel-body">
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
