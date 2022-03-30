import { useData } from '../../contexts';
import VideoCard from '../VIdeoListPage/components/VideoCard/VideoCard';
import './WatchLater.css';
export const WatchLater = () => {
  const { state, DeleteVideoFromWatchLater, setPlaylistModalState } = useData();
  const reversedWatchLater = [...state.laters].reverse();

  const clickHandler = (e, video, menuId) => {
    switch (menuId) {
      case 0: {
        DeleteVideoFromWatchLater({ videoId: video._id });
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
      icon: <span className='material-icons-outlined'>close</span>,
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
      <div className='watch-later-header-container'>
        <h3>Watch Later</h3>
        <p>{reversedWatchLater.length} videos</p>
      </div>
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
