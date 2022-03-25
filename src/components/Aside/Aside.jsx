import './Aside.css';
export const Aside = () => {
  return (
    <ul className='video-list-aside-container'>
      <li className='video-list-aside-item'>
        <span className='material-icons-outlined'>home</span>
        <p className='video-list-aside-item-text'>Home</p>
      </li>
      <li className='video-list-aside-item'>
        <span className='material-icons-outlined'>playlist_play</span>
        <p className='video-list-aside-item-text'>Playlist</p>
      </li>
      <li className='video-list-aside-item'>
        <span className='material-icons-outlined'>history</span>
        <p className='video-list-aside-item-text'>History</p>
      </li>
      <li className='video-list-aside-item'>
        <span className='material-icons-outlined'>favorite_border</span>
        <p className='video-list-aside-item-text'>Liked Videos</p>
      </li>
      <li className='video-list-aside-item'>
        <span className='material-icons-outlined'>watch_later</span>
        <p className='video-list-aside-item-text'>Watch Later</p>
      </li>
    </ul>
  );
};
