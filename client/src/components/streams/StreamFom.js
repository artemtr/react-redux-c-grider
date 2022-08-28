import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
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
    const id = this.props.allPropsFromStreamEdit.match.params.id;
    this.props.onSubmit(id, formValues);
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
export const StreamFormRedux = reduxForm({
  enableReinitialize: true,
  form: 'stream',
  validate,
})(StreamForm);
