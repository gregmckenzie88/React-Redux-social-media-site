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

      var locationButton = $('#send-location');
      locationButton.on('click', () => {
        if(!navigator.geolocation){
          return alert('Geoloaction not supported by your browser');
        }

        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
        }, () => {
          alert('Unable to fetch location.');
        })
      });

    });



  }


  render(){

    return(
      <div className="panel panel-default">
        <div className="panel-heading">Chat with User</div>
        <div className="panel-body">

          <ul id="messages">

          </ul>

          <form id="message-form" className="input-group">

            <input id="message-text" name="message" type="text" className="form-control" placeholder="Message" aria-describedby="basic-addon1" />

            <span className="input-group-addon" id="basic-addon1"><button style={{background: 'none', border: 'none'}}>Send</button></span>
          </form>
          <button id="send-location">Send Location</button>
        </div>
      </div>
    );
  };
}


export default ChatBox;
