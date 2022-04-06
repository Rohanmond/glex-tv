import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../auth.css';
import { useAuth, useData } from '../../../contexts';
import { ACTION_TYPE } from '../../../constants/constant';

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useData();
  const { loginHandler, token } = useAuth();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (token) {
      dispatch({
        type: ACTION_TYPE.RESET_MENU,
      });
      navigate(location.state?.from?.pathname || '/', { replace: true });
    }
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
              placeholder='rohan@gmail.com'
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
              placeholder='1234abcd'
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
            <span className='font-wt-semibold'>Don't have an account?</span>
            <span
              className='auth-link font-wt-semibold'
              onClick={() =>
                navigate('/signup', { state: { from: location.state?.from } })
              }
            >
              Signup
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
