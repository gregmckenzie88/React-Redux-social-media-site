import React, { Component } from 'react';
import { connect } from 'react-redux';


class PanelProfile extends Component {

  constructor(props){
    super(props);
    this.state = {
      values: []
    }
  }

  componentDidMount(){
    const { usernameName,
            city,
            description,
            primary,
            additionalSkills,
            equipment,
            unions,
            imdb,
            vimeo,
            youTube } = this.props.auth.profile;

    this.setState({
      values: [
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
    });
  }



  render(){
    return this.state.values.filter( i => i.text).map( (i) => {
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
          <h4>{i.label}</h4>
          <p>{i.text}</p>
        </div>
      );
    });
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(PanelProfile);
