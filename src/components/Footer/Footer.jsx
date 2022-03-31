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
      <NavLink to={'/videos'} className={toggleActive}>
        <span className='material-icons-outlined footer-icon'>home</span>
      </NavLink>
      <NavLink to={'playlist'} className={toggleActive}>
        <span className='material-icons-outlined footer-icon'>
          playlist_play
        </span>
      </NavLink>
      <NavLink to={'/profile'} className={toggleActive}>
        <span class='material-icons-outlined footer-icon'>person</span>
      </NavLink>
    </div>
  );
};
