import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../actions/index';
import { connect } from 'react-redux';
class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="ui error message">{error}</div>;
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label htmlFor="name">{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field label="Enter title" name="title" component={this.renderInput} />
        <Field
          label="Enter des"
          name="description"
          component={this.renderInput}
        />
        <button type="submit" className="button primary ui">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'You must enter a name';
  }
  return errors;
};
const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
