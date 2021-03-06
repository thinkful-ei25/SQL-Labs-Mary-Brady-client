import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="sign-up"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {error}
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <Field
          component={Input}
          className="input-field"
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty]}
        />
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <Field
          component={Input}
          className="input-field"
          type="password"
          name="password"
          id="password"
          validate={[required, nonEmpty]}
        />
        <button
          className="form-button"
          disabled={this.props.pristine || this.props.submitting}
        >
          Log in
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
