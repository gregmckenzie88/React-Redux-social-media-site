import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChatBox from '../chat/chatBox';

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
  render(props){
    if(!this.state.res.data){
      return <div></div>
    }

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
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h1 style={{marginTop: '0'}}>{usernameName}</h1>

            <h3>City</h3>
            <p>{city}</p>

            <h3>Description</h3>
            <p>{description}</p>

            <h3>Primary Discipline</h3>
            <p>{primary}</p>

            <h3>Additional Skills</h3>
            <p>{additionalSkills}</p>

            <h3>Equipment</h3>
            <p>{equipment}</p>

            <h3>Unions</h3>
            <p>{unions}</p>

            <h3>imdb</h3>
            <p>{imdb}</p>

            <h3>Vimeo</h3>
            <p>{vimeo}</p>

            <h3>YouTube</h3>
            <p>{youTube}</p>

          </div>
          <div className="col-xs-12 col-md-6">

            <ChatBox chatPartner={usernameName} targetUserId={this.props.match.params.id} />

          </div>
        </div>


        <Link className="btn btn-danger" to='/search/talent'>Back</Link>


      </div>
    );
  };
}


export default ProfileShow;
