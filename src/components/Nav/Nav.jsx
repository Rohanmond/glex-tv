import { useNavigate } from 'react-router-dom';
import { ACTION_TYPE, FILTER } from '../../constants/constant';
import { useAuth, useData } from '../../contexts';
import './Nav.css';
import { useRef } from 'react';

export const Nav = () => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const { token, logoutHandler } = useAuth();
  const searchRef = useRef();
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
                src='https://res.cloudinary.com/donqbxlnc/image/upload/v1647974532/Glex_TV_1_1_mqmdec.png'
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
                <span
                  onClick={logoutHandler}
                  class='material-icons-outlined nav-link-icon'
                >
                  person
                </span>
              )}
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
