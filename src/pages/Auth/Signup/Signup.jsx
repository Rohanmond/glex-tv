import '../auth.css';
export const Signup = () => {
  return (
    <div className='auth-outer-container'>
      <div className='auth-box'>
        <div className='auth-header font-wt-bold text-xl'>Signup</div>
        <form className='auth-form'>
          <div className='auth-input-container'>
            <label htmlFor='name'>Name</label>
            <input className='auth-input' id='name' type='text' required />
          </div>
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
          <div className='auth-input-container'>
            <label htmlFor='conf-password'>Confirm Password</label>
            <input
              className='auth-input'
              id='conf-password'
              type='password'
              required
            />
          </div>

          <div className='auth-input-btn-container'>
            <input
              className='btn btn-primary background-secondary brd-rd-semi-sq'
              type='submit'
              value={'signup'}
            />
          </div>
          <div className='auth-link-container'>
            <p className='font-wt-semibold'>Already have an account? Login</p>
          </div>
        </form>
      </div>
    </div>
  );
};
