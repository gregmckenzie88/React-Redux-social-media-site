import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  render(){
    // console.log(this.state);
    if(!this.state.res.data){
      return <div></div>
    }
    return(
      <div className="container">
        <h1>{this.state.res.data.profile.usernameName}</h1>

        <h3>Age</h3>
        <p>{this.state.res.data.profile.age}</p>

        <h3>City</h3>
        <p>{this.state.res.data.profile.city}</p>

        <h3>Gender</h3>
        <p>{this.state.res.data.profile.gender}</p>

        <h3>Looking For</h3>
        <p>{this.state.res.data.profile.lookingFor}</p>

        <h3>Headline</h3>
        <p>{this.state.res.data.profile.headline}</p>

        <h3>Self Summary</h3>
        <p>{this.state.res.data.profile.selfSummary}</p>

        <h3>Most embarrasing thing you're willing to admit</h3>
        <p>{this.state.res.data.profile.embarrassingAdmition}</p>

        <Link className="btn btn-danger" to='/search/talent'>Back</Link>
      </div>
    );
  };
}


export default ProfileShow;
