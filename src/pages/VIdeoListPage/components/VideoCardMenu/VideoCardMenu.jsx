import './VideoCardMenu.css';
export const VideoCardMenu = () => {
  return (
    <div className='video-card-menu-outer-container'>
      <div className='video-card-menu-container'>
        <div className='video-card-menu-item'>
          <span className='material-icons-outlined'>watch_later</span>
          <p>Save to Watch Later</p>
        </div>
        <div className='video-card-menu-item'>
          <span className='material-icons-outlined'>playlist_play</span>
          <p>Save to Playlist</p>
        </div>
        <div className='video-card-menu-item'>
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};
