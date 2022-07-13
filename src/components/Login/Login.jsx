
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { authLogIn } from '../../Redux/authReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Input } from '../Common/FormControls/FormControls';
import { required, email } from '../Common/utils/validators';
import { Redirect } from 'react-router-dom';
import style from '../Common/FormControls/FormControls.module.css';
import loginStyle from './Login.module.css';


const LoginForm = (props) => {
  const { handleSubmit, pristine, reset } = props;
  return (
    <form className={loginStyle.loginForm} onSubmit={handleSubmit}>
      <div><Field
        name={'email'}
        component={Input}
        validate={[required, email]}
        type={'email'}
        placeholder={'Email...'} />
      </div>
      <div><Field
        name={'password'}
        component={Input}
        validate={[required]}
        type={'password'}
        placeholder={'Password...'} />
      </div>
      <div className={loginStyle.checkbox}>
        <label><Field
          name={'rememberMe'}
          component={Input}
          type={'checkbox'} /> remember me</label>
      </div>

      {props.error && <div><span className={style.formSummaryError}>{props.error}</span></div>}

      <button type="submit" >Log in</button>
      <button type="button" disabled={pristine} onClick={reset}>Clear Values</button>

    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
 
  const submitLoginForm = (formData) => {
    props.authLogIn(formData);
  }
  if (props.isAuth) return <Redirect to='/profile'/>
  
  return <div>
    <div>Login</div>
    <LoginReduxForm onSubmit={submitLoginForm} />
  </div>
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, { authLogIn }),
)(Login);