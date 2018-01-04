import React, { Component } from "react";
import { reduxForm } from "redux-form";
import ProfileForm from "./ProfileForm.js";
import ProfileReview from "./ProfileReview.js";

class ProfileNew extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return (
        <ProfileReview onCancel={() => this.setState({ showReview: false })} />
      );
    }

    return (
      <ProfileForm onSurveySubmit={() => this.setState({ showReview: true })} />
    );
  }
  render(props) {
    return <div className="container">{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'profileForm'
})(ProfileNew);
