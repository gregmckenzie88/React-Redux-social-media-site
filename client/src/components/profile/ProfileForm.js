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
            label="Description -- Tell Us About Yourself!"
            component={ProfileField}
          />
          <Field
            type="text"
            name="primary"
            label="Primary Focus (Director, Producer, etc.)"
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

  const goodUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;

  if(!values.usernameName){
    errors.usernameName = "Username is required"
  }

  if(!values.primary){
    errors.primary = "Primary focus is required"
  }

  if(!values.city){
    errors.city = "City is required"
  }

  if(values.youTube && !values.youTube.match(goodUrl)){
    errors.youTube = "Please enter a valid URL"
  }

  if(values.vimeo && !values.vimeo.match(goodUrl)){
    errors.vimeo = "Please enter a valid URL"
  }

  if(values.imdb && !values.imdb.match(goodUrl)){
    errors.imdb = "Please enter a valid URL"
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "profileForm",
  destroyOnUnmount: false
})(ProfileForm);
