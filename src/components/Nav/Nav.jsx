import { useNavigate } from 'react-router-dom';
import { ACTION_TYPE, FILTER } from '../../constants/constant';
import { useAuth, useData, useTheme } from '../../contexts';
import './Nav.css';
import { useRef } from 'react';

export const Nav = () => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const { token } = useAuth();
  const searchRef = useRef();
  const { theme, changeTheme } = useTheme();
  const smallSearchRef = useRef();
  const searchHandler = (e) => {
    if (e.key === 'Enter') navigate('/videos');
    if (
      e.key === 'Enter' ||
      e.keyCode === 8 ||
      e.target.innerText === 'search'
    ) {
      dispatch({
        type: ACTION_TYPE.FILTER_CHANGE,
        payload: { FILTER_TYPE: FILTER.CATEGORY, FILTER_VALUE: '' },
      });
      dispatch({
        type: ACTION_TYPE.FILTER_CHANGE,
        payload: {
          FILTER_TYPE: FILTER.SEARCH,
          FILTER_VALUE: searchRef.current.value,
        },
      });
    }
  };
  const smallSearchHandler = (e) => {
    if (e.key === 'Enter') navigate('/videos');
    if (
      e.key === 'Enter' ||
      e.keyCode === 8 ||
      e.target.innerText === 'search'
    ) {
      dispatch({
        type: ACTION_TYPE.FILTER_CHANGE,
        payload: { FILTER_TYPE: FILTER.CATEGORY, FILTER_VALUE: '' },
      });
      dispatch({
        type: ACTION_TYPE.FILTER_CHANGE,
        payload: {
          FILTER_TYPE: FILTER.SEARCH,
          FILTER_VALUE: smallSearchRef.current.value,
        },
      });
    }
  };
  return (
    <nav className='navigation home-nav'>
      <div className='nav-mobile-up'>
        <div className='nav-left'>
          <div className='nav-logo-container'>
            <div className='nav-logo-link'>
              <img
                className='hero-logo'
                onClick={() => {
                  navigate('/videos');
                  searchRef.current.value = '';
                  smallSearchRef.current.value = '';
                  dispatch({ type: ACTION_TYPE.FILTER_CLEAR });
                }}
                src={
                  theme === 'dark'
                    ? 'https://res.cloudinary.com/donqbxlnc/image/upload/v1649084445/Glex_TV_2_b5vw64.png'
                    : 'https://res.cloudinary.com/donqbxlnc/image/upload/v1648991310/glex-tv-dark_1_dsgxw3.png'
                }
                alt='hero logo'
              />
            </div>
          </div>
        </div>
        <div className='nav-mid nav-desktop'>
          <div className='search-container'>
            <input
              ref={searchRef}
              placeholder='search'
              className='nav-search nav-text-input'
              type='search'
              onKeyDown={searchHandler}
            />
            <div onClick={searchHandler} className='input-search-button'>
              <span className='material-icons-outlined'>search</span>
            </div>
          </div>
        </div>
        <div className='nav-right'>
          <ul className='nav-links'>
            <li className='nav-link-item'>
              {!token && (
                <button
                  className='btn btn-primary background-secondary brd-rd-semi-sq nav-link-item-btn'
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              )}
              {token && (
                <i
                  onClick={() => navigate('/profile')}
                  className='fas fa-user-circle theme-btn'
                ></i>
              )}
            </li>
            <li className='nav-link-item'>
              <div
                className='nav-link-item-btn theme-btn'
                onClick={() => changeTheme()}
              >
                {theme === 'dark' ? (
                  <i class='fas fa-sun'></i>
                ) : (
                  <i class='fas fa-moon'></i>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='nav-mobile-down nav-mobile'>
        <input
          ref={smallSearchRef}
          placeholder='search'
          className='nav-search brd-rd-semi-sq nav-text-input'
          type='search'
          onKeyDown={smallSearchHandler}
        />
      </div>
    </nav>
  );
};
