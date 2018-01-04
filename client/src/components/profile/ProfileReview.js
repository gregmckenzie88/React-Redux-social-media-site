import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const ProfileReview = ({ onCancel, formValues, submitProfile, history }) => {
  return (
    <div>
      <h1>Please confirm your entires</h1>

      <h3>User Name</h3>
      <p>{formValues.usernameName}</p>

      <h3>Age</h3>
      <p>{formValues.age}</p>

      <h3>City</h3>
      <p>{formValues.city}</p>

      <h3>Gender</h3>
      <p>{formValues.gender}</p>

      <h3>Looking For</h3>
      <p>{formValues.lookingFor}</p>

      <h3>Headline</h3>
      <p>{formValues.headline}</p>

      <h3>Self Summary</h3>
      <p>{formValues.selfSummary}</p>

      <h3>Most embarrasing thing you're willing to admit</h3>
      <p>{formValues.embarrassingAdmition}</p>

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
