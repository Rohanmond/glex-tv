import { useNavigate } from 'react-router-dom';
import './Nav.css';
export const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className='navigation home-nav'>
      <div className='nav-mobile-up'>
        <div className='nav-left'>
          <div className='nav-logo-container'>
            <div className='nav-logo-link'>
              <img
                className='hero-logo'
                src='https://res.cloudinary.com/donqbxlnc/image/upload/v1647974532/Glex_TV_1_1_mqmdec.png'
                alt='hero logo'
              />
            </div>
          </div>
        </div>
        <div className='nav-mid nav-desktop'>
          <div className='search-container'>
            <input
              placeholder='search'
              className='nav-search nav-text-input'
              type='search'
            />
            <div className='input-search-button'>
              <span className='material-icons-outlined'>search</span>
            </div>
          </div>
        </div>
        <div className='nav-right'>
          <ul className='nav-links'>
            <li className='nav-link-item'>
              <button
                className='btn btn-primary background-secondary brd-rd-semi-sq nav-link-item-btn'
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            </li>
            <li className='nav-link-item nav-mob'>
              <div className='badge-container'>
                <div className='badge-icon'>
                  <span className='material-icons-outlined'>menu</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='nav-mobile-down nav-mobile'>
        <input
          placeholder='search'
          className='nav-search brd-rd-semi-sq nav-text-input'
          type='search'
        />
      </div>
    </nav>
  );
};
