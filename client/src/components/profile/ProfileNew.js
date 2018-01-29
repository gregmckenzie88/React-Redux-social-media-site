import React, { Component } from "react";
import { reduxForm } from "redux-form";
import ProfileForm from "./ProfileForm.js";
import ProfileReview from "./ProfileReview.js";
import { connect } from 'react-redux';

class ProfileNew extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return (
        <ProfileReview onCancel={() => this.setState({ showReview: false })} />
      );
    }

    if(this.props.auth){
      return (
        <ProfileForm initialValues={this.props.auth.profile} onSurveySubmit={() => this.setState({ showReview: true })} />
      );
    }

    return (
      <ProfileForm onSurveySubmit={() => this.setState({ showReview: true })} />
    );
  }
  render() {
    return <div className="container">{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

ProfileNew = connect(mapStateToProps)(ProfileNew);

export default reduxForm({
  form: 'profileForm'
})(ProfileNew);
