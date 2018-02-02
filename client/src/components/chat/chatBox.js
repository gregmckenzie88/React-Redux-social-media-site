import React, { Component } from 'react';
import io from 'socket.io-client';
import $ from 'jquery';
import moment from 'moment';
import { connect } from 'react-redux';
import axios from 'axios';

let noMessagesStyle = {display: 'none'};

class ChatBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: []
    };
  }
  componentWillUnmount(){
    this.socket.disconnect();
  }
  componentDidMount(){


    //scroll on message
    function scrollToBottom(){
      const messages = $('#messages');
      const scrollHeight = messages.prop('scrollHeight');
      messages.scrollTop(scrollHeight);
    }

    const roomString = [ this.props.auth._id, this.props.targetUserId ].sort().join('');

    //  POPULATE messages
    axios.get("/api/room", { params: { room: roomString } }).then(res => {
      if(res.data.messages){
        this.setState({ messages: [...res.data.messages] })
      }
    }).then(() => {
      scrollToBottom();
      $('#no-messages').show();
    });



    //LIVE
    this.socket = io('https://dry-ocean-38514.herokuapp.com');

    //DEV
    // this.socket = io('http://localhost:5000');

    this.socket.on('connect', () => {
      this.socket.emit('join', roomString, (err) => {
        if (err){
          console.log('Room join error', err);
        } else {
          // console.log('No error');
        }
      });

      // With state!
      this.socket.on('newMessage', (message) => {
        const isInState = this.state.messages.find( msg => msg.createdAt === message.createdAt )

        if(!isInState){
          this.setState({ messages: [ ...this.state.messages, {from: message.from, text: message.text, room: message.room, createdAt: message.createdAt}]});
        }

        scrollToBottom();
      });


      const chatInput = $('[name=message]');
      $('#message-form').on("submit", (e) => {
        e.preventDefault();
        if(chatInput.val()){
          this.socket.emit('createMessage', {
            from: this.props.auth.profile.usernameName,
            to: this.props.chatPartner,
            text: chatInput.val(),
            room: roomString
          }, (msg) => {
            axios.post("/api/room", msg);
          });
          chatInput.val('');
        }
      });
    });
  }


  renderMessages(){
    if(!this.state.messages.length > 0){
      return(
        <div id="no-messages"style={noMessagesStyle}>
          <h5 style={{textAlign: 'center'}}>No correspondence yet...</h5>
          <h3 style={{padding: '16px', textAlign: 'center', marginBottom: '80px', paddingTop: '0', marginTop: '0'}}>Send a nice message!</h3>
        </div>
      );
    }
    return(
      this.state.messages.map( msg => {
        return(
          <li key={msg.createdAt} style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', alignItems:'center'}}>
              <h4 style={{marginRight:'5px'}}>{msg.from} </h4>
              <h6>{moment(msg.createdAt).format('LLLL')}</h6>
            </div>
            <p>{msg.text}</p>
          </li>
        );
      })
    );
  }

  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading"><h4 style={{margin: '0'}}>Chat with {this.props.chatPartner}</h4></div>
        <div style={{height: '300px', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}} className="panel-body">

          <ul style={{paddingLeft: '0px', overflow: 'scroll'}} id="messages">
            {this.renderMessages()}
          </ul>

          <form id="message-form" className="input-group">
            <input id="message-text" name="message" type="text" className="form-control" placeholder="Message" aria-describedby="basic-addon1" />
            <span className="input-group-addon" id="basic-addon1"><button style={{background: 'none', border: 'none', outline: 'none'}}>Send</button></span>
          </form>

        </div>
      </div>
    );
  };
}


function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(ChatBox);
