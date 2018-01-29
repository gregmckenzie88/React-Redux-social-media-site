import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from 'react-router-dom';
import ProfileField from "./ProfileField.js";

class ProfileForm extends Component {

  renderFields(props) {
    return (
      <div>
        <div style={{margin: '0 auto', maxWidth: '600px'}}>
          <h2 style={{marginBottom: '20px'}}>Tell us about yourself!</h2>
          <Field
            type="text"
            name="usernameName"
            label="User Name"
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
            name="description"
            label="Description"
            component={ProfileField}
          />
          <Field
            type="text"
            name="primary"
            label="Primary Discipline"
            component={ProfileField}
          />
          <Field
            type="text"
            name="additionalSkills"
            label="Additional Skills"
            component={ProfileField}
          />
          <Field
            type="text"
            name="equipment"
            label="Equipment"
            component={ProfileField}
          />
          <Field
            type="text"
            name="unions"
            label="Unions"
            component={ProfileField}
          />
          <Field
            type="text"
            name="imdb"
            label="Link to IMDB"
            component={ProfileField}
          />
          <Field
            type="text"
            name="vimeo"
            label="Link to Vimeo"
            component={ProfileField}
          />
          <Field
            type="text"
            name="youTube"
            label="Link to YouTube"
            component={ProfileField}
          />
        </div>
      </div>
    );
  }



  render(props) {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderFields()}
        <div style={{margin: '0 auto', maxWidth: '600px'}}>
          <Link style={{marginRight: '15px'}} className="btn btn-danger" to="/">Cancel</Link>
          <button className="btn btn-success" type="submit">Review</button>
        </div>

      </form>
    );
  }
}

function validate(values){
  const errors = {};

  // if(!values.firstName){
  //   errors.firstName = "What's your first name?"
  // }
  //
  // if(!values.lastName){
  //   errors.lastName = "What's your last name?"
  // }
  return errors;
}

export default reduxForm({
  validate,
  form: "profileForm",
  destroyOnUnmount: false
})(ProfileForm);
