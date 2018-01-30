import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChatBox from '../chat/chatBox';
import { connect } from 'react-redux';
import DisabledChatBox from '../chat/disabledChatBox';

import axios from 'axios';

class ProfileShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      res: {}
    };
  }
  componentDidMount(){
    axios.get("/api/profile/details", { params: { id: this.props.match.params.id } }).then(res => this.setState({ res: res }));

  }



  renderFields(){
    const { usernameName,
            city,
            description,
            primary,
            additionalSkills,
            equipment,
            unions,
            imdb,
            vimeo,
            youTube } = this.state.res.data.profile;

    const values = [
      {
        label: 'User Name',
        text: usernameName
      },
      {
        label: 'City',
        text: city
      },
      {
        label: 'Description',
        text: description
      },
      {
        label: 'Primary Discipline',
        text: primary
      },
      {
        label: 'Additional Skills',
        text: additionalSkills
      },
      {
        label: 'Equipment',
        text: equipment
      },
      {
        label: 'Unions',
        text: unions
      },

      {
        label: 'IMDB',
        text: imdb
      },
      {
        label: 'Vimeo',
        text: vimeo
      },
      {
        label: 'YouTube',
        text: youTube
      }
    ]

    return values.filter( i => i.text).map( (i) => {
      if (i.label === 'IMDB'){
        return(
          <div key={i.label}>
            <a style={{textDecoration: 'none', fontSize: '18px', display: 'inline-block', marginBottom: '20px', marginTop: '10px'}} target="_blank" href={i.text}>My work on {i.label}</a>
          </div>
        );
      }

      if (i.label === 'Vimeo'){
        return(
          <div key={i.label}>
            <a style={{textDecoration: 'none', fontSize: '18px', display: 'inline-block', marginBottom: '20px', marginTop: '10px'}} target="_blank" href={i.text}>My work on {i.label}</a>
          </div>
        );
      }

      if (i.label === 'YouTube'){
        return(
          <div key={i.label}>
            <a style={{textDecoration: 'none', fontSize: '18px', display: 'inline-block', marginBottom: '20px', marginTop: '10px'}} target="_blank" href={i.text}>My work on {i.label}</a>
          </div>
        );
      }

      return (
        <div key={i.label}>
          <h3>{i.label}</h3>
          <p>{i.text}</p>
        </div>
      );
    });

  }

  renderChatBox(){
    if (!this.props.auth.profile){
      return <DisabledChatBox chatPartner={this.state.res.data.profile.usernameName}  />
    } else {
      return <ChatBox chatPartner={this.state.res.data.profile.usernameName} targetUserId={this.props.match.params.id} />;
    }


  }

  render(props){
    if(!this.state.res.data){
      return <div></div>
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h1 style={{marginTop: '0'}}>{this.state.res.data.profile.usernameName}</h1>
            {this.renderFields()}
          </div>
          <div className="col-xs-12 col-md-6">
            {this.renderChatBox()}
          </div>
        </div>
        <Link className="btn btn-danger" to='/search/talent'>Back</Link>
      </div>
    );
  };
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(ProfileShow);
