import { NavLink } from 'react-router-dom';
import './Aside.css';
export const Aside = () => {
  const toggleActive = ({ isActive }) => {
    return isActive ? 'nav-link-active' : 'nav-link';
  };

  return (
    <ul className='video-list-aside-container'>
      <NavLink to={'/videos'} className={toggleActive}>
        <li className='video-list-aside-item'>
          <span className='material-icons-outlined'>home</span>
          <p className='video-list-aside-item-text'>Home</p>
        </li>
      </NavLink>

      <NavLink to={'/playlist_page'} className={toggleActive}>
        <li className='video-list-aside-item' title='playlist'>
          <span className='material-icons-outlined'>playlist_play</span>
          <p className='video-list-aside-item-text'>Playlist</p>
        </li>
      </NavLink>
      <NavLink to={'/history_page'} className={toggleActive}>
        <li className='video-list-aside-item'>
          <span className='material-icons-outlined'>history</span>
          <p className='video-list-aside-item-text'>History</p>
        </li>
      </NavLink>
      <NavLink to={'/liked_page'} className={toggleActive}>
        <li className='video-list-aside-item'>
          <span className='material-icons-outlined'>favorite_border</span>
          <p className='video-list-aside-item-text'>Liked Videos</p>
        </li>
      </NavLink>
      <NavLink to={'/watch_later'} className={toggleActive}>
        <li className='video-list-aside-item'>
          <span className='material-icons-outlined'>watch_later</span>
          <p className='video-list-aside-item-text'>Watch Later</p>
        </li>
      </NavLink>
    </ul>
  );
};
