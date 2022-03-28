import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../auth.css';
import { useAuth } from '../../../contexts';

export const Login = () => {
  const navigate = useNavigate();
  const { loginHandler, token } = useAuth();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
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
    loginHandler(loginForm.email, loginForm.password);
  };
  return (
    <div className='auth-outer-container'>
      <div className='auth-box'>
        <div className='auth-header font-wt-bold text-xl'>Login</div>
        <form className='auth-form' onSubmit={submitHandler}>
          <div className='auth-input-container'>
            <label htmlFor='email'>Email</label>
            <input
              className='auth-input'
              value={loginForm.email}
              id='email'
              type='email'
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              required
            />
          </div>
          <div className='auth-input-container'>
            <label htmlFor='password'>Password</label>
            <input
              className='auth-input'
              value={loginForm.password}
              id='password'
              type='password'
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              required
            />
          </div>

          <div className='auth-input-btn-container'>
            <input
              className='btn btn-primary background-primary brd-rd-semi-sq'
              type='submit'
              value={'Login'}
            />
          </div>
          <div className='auth-input-btn-container'>
            <input
              onClick={() =>
                setLoginForm({ email: 'rohan@gmail.com', password: '1234abcd' })
              }
              className='btn btn-primary background-primary brd-rd-semi-sq'
              type='submit'
              value={'Test Login'}
            />
          </div>
          <div className='auth-link-container'>
            <p className='font-wt-semibold' onClick={() => navigate('/signup')}>
              Don't have an account? Signup
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
