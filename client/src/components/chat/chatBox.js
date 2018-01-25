import React, { Component } from 'react';
import io from 'socket.io-client';
import $ from 'jquery';

import axios from 'axios';

class ChatBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      //for socket.io
      messages: []
    };
  }
  componentDidMount(){

    //LIVE
    this.socket = io('https://dry-ocean-38514.herokuapp.com');

    // console.log(this.props.user);

    //DEV
    // this.socket = io('http://localhost:5000');

    this.socket.on('connect', () => {
      console.log('connected!');

      this.socket.on('disconnect', () => console.log('disconnected!'));

      this.socket.on('newMessage', (message) => {
        console.log('newMessage', message);
        var li = $('<li></li>');
        li.text(`${message.from}: ${message.text}`);

        $('#messages').append(li);
      });

      // this.socket.emit('createMessage', {
      //   from: 'Frank',
      //   text: 'Hi!'
      // }, (data) => {
      //   console.log('Got it!', data);
      // });


      $('#message-form').on("submit", (e) => {
        e.preventDefault();

        this.socket.emit('createMessage', {
          from: 'User',
          text: $('[name=message]').val()
        }, () => {

        });

        $('[name=message]').val('');
      })

    });



  }


  render(){

    return(
      <div className="panel panel-default">
        <div className="panel-heading">Chat with User</div>
        <div className="panel-body">
          Chatbox

          <ul id="messages">

          </ul>

          <form id="message-form" className="input-group">

            <input id="message-text" name="message" type="text" className="form-control" placeholder="Message" aria-describedby="basic-addon1" />

            <span className="input-group-addon" id="basic-addon1"><button>Send</button></span>
          </form>
        </div>
      </div>
    );
  };
}


export default ChatBox;
