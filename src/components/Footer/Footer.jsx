import { NavLink } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  const toggleActive = ({ isActive }) => {
    return isActive
      ? 'footer-element footer-nav-link-active'
      : 'footer-element footer-nav-link';
  };
  return (
    <div className='footer-container'>
      <NavLink to={'/watchlater'} className={toggleActive}>
        <span className='material-icons-outlined footer-icon'>watch_later</span>
      </NavLink>
      <NavLink to={'/playlist'} className={toggleActive}>
        <span className='material-icons-outlined footer-icon'>
          playlist_play
        </span>
      </NavLink>
      <NavLink to={'/history'} className={toggleActive}>
        <span className='material-icons-outlined footer-icon'>history</span>
      </NavLink>
      <NavLink to={'/likes'} className={toggleActive}>
        <span className='material-icons-outlined footer-icon'>
          favorite_border
        </span>
      </NavLink>
    </div>
  );
};
