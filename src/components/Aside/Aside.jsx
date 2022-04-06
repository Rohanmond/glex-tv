import { NavLink } from 'react-router-dom';
import './Aside.css';
export const Aside = () => {
  const toggleActive = ({ isActive }) => {
    return isActive ? 'nav-link-active' : 'nav-link';
  };

  return (
    <ul className='video-list-aside-container'>
      <NavLink to={'/videos'} className={toggleActive}>
        <li className='video-list-aside-item' title='home'>
          <span className='material-icons-outlined'>home</span>
        </li>
      </NavLink>

      <NavLink to={'/playlist'} className={toggleActive}>
        <li className='video-list-aside-item' title='playlist'>
          <span className='material-icons-outlined'>playlist_play</span>
        </li>
      </NavLink>
      <NavLink to={'/history'} className={toggleActive}>
        <li className='video-list-aside-item' title='history'>
          <span className='material-icons-outlined'>history</span>
        </li>
      </NavLink>
      <NavLink to={'/likes'} className={toggleActive}>
        <li className='video-list-aside-item' title='liked videos'>
          <span className='material-icons-outlined'>favorite_border</span>
        </li>
      </NavLink>
      <NavLink to={'/watchlater'} className={toggleActive}>
        <li className='video-list-aside-item' title='watch later'>
          <span className='material-icons-outlined'>watch_later</span>
        </li>
      </NavLink>
    </ul>
  );
};
