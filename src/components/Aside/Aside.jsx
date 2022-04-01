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
          <p className='video-list-aside-item-text'>Home</p>
        </li>
      </NavLink>

      <NavLink to={'/playlist'} className={toggleActive}>
        <li className='video-list-aside-item' title='playlist'>
          <span className='material-icons-outlined'>playlist_play</span>
          <p className='video-list-aside-item-text'>Playlist</p>
        </li>
      </NavLink>
      <NavLink to={'/history'} className={toggleActive}>
        <li className='video-list-aside-item' title='history'>
          <span className='material-icons-outlined'>history</span>
          <p className='video-list-aside-item-text'>History</p>
        </li>
      </NavLink>
      <NavLink to={'/likes'} className={toggleActive}>
        <li className='video-list-aside-item' title='liked videos'>
          <span className='material-icons-outlined'>favorite_border</span>
          <p className='video-list-aside-item-text'>Liked Videos</p>
        </li>
      </NavLink>
      <NavLink to={'/watchlater'} className={toggleActive}>
        <li className='video-list-aside-item' title='watch later'>
          <span className='material-icons-outlined'>watch_later</span>
          <p className='video-list-aside-item-text'>Watch Later</p>
        </li>
      </NavLink>
    </ul>
  );
};
