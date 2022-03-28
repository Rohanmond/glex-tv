import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../contexts';
import '../auth.css';

export const Signup = () => {
  const navigate = useNavigate();
  const { signupHandler, token } = useAuth();
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

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
    // console.log(typeof signupHanlder);
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
              onChange={(e) =>
                setSignupForm({ ...signupForm, name: e.target.value })
              }
              required
            />
          </div>
          <div className='auth-input-container'>
            <label htmlFor='email'>Email</label>
            <input
              className='auth-input'
              id='email'
              value={signupForm.email}
              type='email'
              onChange={(e) =>
                setSignupForm({ ...signupForm, email: e.target.value })
              }
              required
            />
          </div>
          <div className='auth-input-container'>
            <label htmlFor='password'>Password</label>
            <input
              className='auth-input'
              id='password'
              type='password'
              value={signupForm.password}
              onChange={(e) =>
                setSignupForm({ ...signupForm, password: e.target.value })
              }
              required
            />
          </div>
          <div className='auth-input-container'>
            <label htmlFor='conf-password'>Confirm Password</label>
            <input
              className='auth-input'
              id='conf-password'
              type='password'
              value={signupForm.confirm_password}
              onChange={(e) =>
                setSignupForm({
                  ...signupForm,
                  confirm_password: e.target.value,
                })
              }
              required
            />
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
