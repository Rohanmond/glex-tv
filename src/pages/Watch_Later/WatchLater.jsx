import { useNavigate } from 'react-router-dom';
import { useData } from '../../contexts';
import VideoCard from '../VIdeoListPage/components/VideoCard/VideoCard';
import './WatchLater.css';
export const WatchLater = () => {
  const { state, deleteVideoFromWatchLater, setPlaylistModalState } = useData();
  const reversedWatchLater = [...state.laters].reverse();
  const navigate = useNavigate();
  const clickHandler = (e, video, menuId) => {
    switch (menuId) {
      case 0: {
        deleteVideoFromWatchLater({ videoId: video._id });
        break;
      }
      case 1: {
        setPlaylistModalState(video);
        break;
      }
      default:
        break;
    }
  };

  const WATCH_LATER_MENU = [
    {
      id: 0,
      clickHandler,
      danger: true,
      icon: <span class='material-icons-outlined'>delete</span>,
      text: 'Remove from watch later',
    },
    {
      id: 1,
      clickHandler,
      icon: <span className='material-icons-outlined'>playlist_play</span>,
      text: 'Save to Playlist',
    },
  ];
  return (
    <>
      {reversedWatchLater.length === 0 && (
        <div className='history-empty-space-filler'>
          <p className='text-lg font-wt-semibold text-align-center'>
            There is no watch later video currently
          </p>
          <button
            className='btn btn-primary background-secondary brd-rd-semi-sq'
            onClick={() => navigate('/videos')}
          >
            Explore
          </button>
        </div>
      )}
      <div className='watch-later-container'>
        {reversedWatchLater.length > 0 &&
          reversedWatchLater.map((video) => {
            return (
              <VideoCard
                video={video}
                key={video._id}
                menuItems={WATCH_LATER_MENU}
                type={'watch_later'}
              />
            );
          })}
      </div>
    </>
  );
};
