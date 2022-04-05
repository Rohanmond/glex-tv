import { useData } from '../../contexts';
import VideoCard from '../VIdeoListPage/components/VideoCard/VideoCard';
import './LikedPage.css';
export const LikedPage = () => {
  const { deleteLikedVideos, postWatchLater, setPlaylistModalState, state } =
    useData();
  const clickHandler = (e, video, menuId) => {
    switch (menuId) {
      case 0: {
        deleteLikedVideos({ videoId: video._id });
        break;
      }
      case 1: {
        postWatchLater({ video });
        break;
      }
      case 2: {
        setPlaylistModalState(video);
        break;
      }
      default:
        break;
    }
  };

  const LIKES_MENU = [
    {
      id: 0,
      clickHandler,
      danger: true,
      icon: <span className='material-icons-outlined'>close</span>,
      text: 'Remove from likes',
    },
    {
      id: 1,
      clickHandler,
      icon: <span className='material-icons-outlined'>watch_later</span>,
      text: 'Add to watch later',
    },
    {
      id: 2,
      clickHandler,
      icon: <span className='material-icons-outlined'>playlist_play</span>,
      text: 'Save to Playlist',
    },
  ];
  return (
    <>
      <div className='watch-later-header-container'>
        <h3>Likes</h3>
        <p>{state.likes.length} videos</p>
      </div>
      <div className='watch-later-container'>
        {state.likes.length > 0 &&
          state.likes.map((video) => {
            return (
              <VideoCard
                video={video}
                key={video._id}
                menuItems={LIKES_MENU}
                type={'likes'}
              />
            );
          })}
      </div>
    </>
  );
};
