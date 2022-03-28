import { useNavigate } from 'react-router-dom';
import '../auth.css';
export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='auth-outer-container'>
      <div className='auth-box'>
        <div className='auth-header font-wt-bold text-xl'>Login</div>
        <form className='auth-form'>
          <div className='auth-input-container'>
            <label htmlFor='email'>Email</label>
            <input className='auth-input' id='email' type='email' required />
          </div>
          <div className='auth-input-container'>
            <label htmlFor='password'>Password</label>
            <input
              className='auth-input'
              id='password'
              type='password'
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
              className='btn btn-secondary outlined-secondary brd-rd-semi-sq'
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
