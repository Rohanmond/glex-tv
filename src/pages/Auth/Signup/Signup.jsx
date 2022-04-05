import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts';
import '../auth.css';
import {
  validateEmail,
  validateOnlyString,
  validatePassword,
} from '../../../utils/utils';

export const Signup = () => {
  const navigate = useNavigate();
  const { signupHandler, token } = useAuth();
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const resetFormError = {
    name: '',
    email: '',
    password: '',
    'confirm-password': '',
  };
  const [formError, setFormError] = useState(resetFormError);

  useEffect(() => {
    let id;
    if (token) {
      id = setTimeout(() => {
        navigate('/videos');
      }, 500);
    }
    return () => clearTimeout(id);
  }, [token, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    let flagErr = false;
    let newFormError = {};
    Object.keys(formError).forEach((key) => {
      newFormError[key] = '';
      if (signupForm[key] === '' && key !== 'confirm-password') {
        newFormError[key] = `${key} shouldn't be empty`;
        flagErr = true;
      }
    });
    if (signupForm.password !== signupForm.confirm_password) {
      flagErr = true;
      newFormError['confirm-password'] =
        "Password and confirm password didn't matched";
    }
    if (flagErr) {
      setFormError(newFormError);
      return;
    }

    signupHandler(signupForm.email, signupForm.password, signupForm.name);
  };
  return (
    <div className='auth-outer-container'>
      <div className='auth-box'>
        <div className='auth-header font-wt-bold text-xl'>Signup</div>
        <form className='auth-form' onSubmit={submitHandler}>
          <div className='auth-input-container'>
            <label htmlFor='name'>Name</label>
            <input
              className='auth-input'
              value={signupForm.name}
              id='name'
              type='text'
              placeholder='Rohan Mondal'
              onChange={(e) => {
                setSignupForm({ ...signupForm, name: e.target.value });
                if (!validateOnlyString(e.target.value)) {
                  setFormError({
                    ...formError,
                    name: 'Name should be in strings',
                  });
                } else {
                  setFormError({ ...formError, name: '' });
                }
              }}
            />
            {formError.name && (
              <div className='err-msg font-wt-semibold'>{formError.name}</div>
            )}
          </div>
          <div className='auth-input-container'>
            <label htmlFor='email'>Email</label>
            <input
              className='auth-input'
              id='email'
              value={signupForm.email}
              type='email'
              placeholder='rohan@gmail.com'
              onChange={(e) => {
                setSignupForm({ ...signupForm, email: e.target.value });
                if (!validateEmail(e.target.value)) {
                  setFormError({
                    ...formError,
                    email: 'Email should be in correct format',
                  });
                } else {
                  setFormError({ ...formError, email: '' });
                }
              }}
            />
            {formError.email && (
              <div className='err-msg font-wt-semibold'>{formError.email}</div>
            )}
          </div>
          <div className='auth-input-container'>
            <label htmlFor='password'>Password</label>
            <input
              className='auth-input'
              id='password'
              type='password'
              placeholder='password'
              value={signupForm.password}
              onChange={(e) => {
                setSignupForm({ ...signupForm, password: e.target.value });
                if (!validatePassword(e.target.value)) {
                  setFormError({
                    ...formError,
                    password:
                      'Password should be in 8 to 20 chars and should have one digit',
                  });
                } else {
                  setFormError({ ...formError, password: '' });
                }
              }}
              onFocus={() =>
                setFormError({ ...formError, confirm_password: '' })
              }
            />
            {formError.password && (
              <div className='err-msg font-wt-semibold'>
                {formError.password}
              </div>
            )}
          </div>
          <div className='auth-input-container'>
            <label htmlFor='conf-password'>Confirm Password</label>
            <input
              className='auth-input'
              id='conf-password'
              type='password'
              placeholder='confirm password'
              value={signupForm.confirm_password}
              onChange={(e) =>
                setSignupForm({
                  ...signupForm,
                  confirm_password: e.target.value,
                })
              }
              onFocus={() =>
                setFormError({ ...formError, 'confirm-password': '' })
              }
            />
            {formError['confirm-password'] && (
              <div className='err-msg font-wt-semibold'>
                {formError['confirm-password']}
              </div>
            )}
          </div>

          <div className='auth-input-btn-container'>
            <input
              className='btn btn-primary background-primary brd-rd-semi-sq'
              type='submit'
              value={'signup'}
            />
          </div>
          <div className='auth-link-container'>
            <p className='font-wt-semibold' onClick={() => navigate('/login')}>
              Already have an account? Login
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
