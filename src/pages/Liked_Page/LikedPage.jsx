import { useNavigate } from 'react-router-dom';
import { useData } from '../../contexts';
import VideoCard from '../VIdeoListPage/components/VideoCard/VideoCard';
import './LikedPage.css';
export const LikedPage = () => {
  const { deleteLikedVideos, postWatchLater, setPlaylistModalState, state } =
    useData();
  const navigate = useNavigate();
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
      icon: <span class='material-icons-outlined'>delete</span>,
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
      {state.likes.length === 0 && (
        <div className='history-empty-space-filler'>
          <p className='text-lg font-wt-semibold text-align-center'>
            Looks like you havn't liked any video yet
          </p>
          <button
            onClick={() => navigate('/videos')}
            className='btn btn-primary background-secondary brd-rd-semi-sq'
          >
            Explore
          </button>
        </div>
      )}

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
