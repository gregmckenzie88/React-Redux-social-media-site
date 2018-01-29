import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const ProfileReview = ({ onCancel, formValues, submitProfile, history }) => {

  const { usernameName,
          city,
          description,
          primary,
          additionalSkills,
          equipment,
          unions,
          imdb,
          vimeo,
          youTube } = formValues;
  return (
    <div>
      <h1>Please confirm your entires</h1>

      <h3>User Name</h3>
      <p>{usernameName}</p>

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

      <h3>IMDB</h3>
      <p>{imdb}</p>

      <h3>Vimeo</h3>
      <p>{vimeo}</p>

      <h3>YouTube</h3>
      <p>{youTube}</p>

      <button className="btn btn-danger"  onClick={onCancel}>Back</button>
      <button className="btn btn-default" onClick={() => submitProfile(formValues, history)} >Submit</button>
    </div>
  );
};

function mapStateToProps(state){
    return {
      formValues: state.form.profileForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(ProfileReview));
