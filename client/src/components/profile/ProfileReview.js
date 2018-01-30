import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class ProfileReview extends Component {

  constructor(props){

    const { usernameName,
            city,
            description,
            primary,
            additionalSkills,
            equipment,
            unions,
            imdb,
            vimeo,
            youTube } = props.formValues;

    super(props);

    this.state = {
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
    };
  }

  renderFields(){
    return this.state.values.filter( i => i.text).map( (i) => {
      return (
        <div key={i.label}>
          <h3>{i.label}</h3>
          <p>{i.text}</p>
        </div>
      );
    });
  }

  render(){
    const { onCancel, formValues, submitProfile, history } = this.props;
    console.log(this.state);
    return (
      <div>
        <div style={{margin: '0 auto', maxWidth: '600px'}}>
          <h1>Please confirm your entires</h1>
          {this.renderFields()}
          <button style={{marginRight: '15px'}} className="btn btn-danger"  onClick={onCancel}>Back</button>
          <button className="btn btn-default" onClick={() => submitProfile(formValues, history)} >Submit</button>
        </div>

      </div>
    );
  }
};


function mapStateToProps(state){
    return {
      formValues: state.form.profileForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(ProfileReview));
