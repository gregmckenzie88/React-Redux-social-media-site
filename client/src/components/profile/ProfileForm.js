import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from 'react-router-dom';
import ProfileField from "./ProfileField.js";

class ProfileForm extends Component {



  renderFields(props) {
    console.log(this.props);
    return (
      <div>
        <Field
          type="text"
          name="usernameName"
          label="User Name"
          component={ProfileField}
        />
        <Field
          type="text"
          name="age"
          label="Age"
          component={ProfileField}
        />
        <Field
          type="text"
          name="city"
          label="City"
          component={ProfileField}
        />
        <Field
          type="text"
          name="gender"
          label="Gender"
          component={ProfileField}
        />
        <Field
          type="text"
          name="lookingFor"
          label="Looking for"
          component={ProfileField}
        />
        <Field
          type="text"
          name="headline"
          label="Headline"
          component={ProfileField}
        />
        <Field
          type="text"
          name="selfSummary"
          label="Self Summary"
          component={ProfileField}
        />
        <Field
          type="text"
          name="embarrassingAdmition"
          label="Most Embarssing thing you're willing to admit"
          component={ProfileField}
        />
      </div>
    );
  }



  render(props) {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderFields()}
        <Link className="btn btn-danger" to="/">Cancel</Link>
        <button className="btn btn-success" type="submit">Review</button>
      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.firstName){
    errors.firstName = "What's your first name?"
  }

  if(!values.lastName){
    errors.lastName = "What's your last name?"
  }


  return errors;
}

export default reduxForm({
  validate,
  form: "profileForm",
  destroyOnUnmount: false
})(ProfileForm);
