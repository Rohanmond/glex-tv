import { useNavigate } from 'react-router-dom';
import { ACTION_TYPE } from '../../constants/constant';
import { useData } from '../../contexts';
import { toastHandler, ToastType } from '../../utils/utils';
import VideoCard from '../VIdeoListPage/components/VideoCard/VideoCard';
import './HistoryPage.css';
export const HistoryPage = () => {
  const {
    state,
    deleteAllHistory,
    deleteHistory,
    postWatchLater,
    dispatch,
    setPlaylistModalState,
  } = useData();
  const navigate = useNavigate();
  const reversedHistoryArray = [...state.history].reverse();

  const clickHandler = (e, video, menuId) => {
    switch (menuId) {
      case 0: {
        deleteHistory({ videoId: video._id });
        dispatch({ type: ACTION_TYPE.RESET_MENU });
        break;
      }
      case 1: {
        postWatchLater({ video });
        dispatch({ type: ACTION_TYPE.RESET_MENU });
        break;
      }
      case 2: {
        setPlaylistModalState(video);
        dispatch({ type: ACTION_TYPE.RESET_MENU });
        break;
      }
      case 3: {
        navigator.clipboard.writeText(`localhost:3001/video/${video._id}`);
        toastHandler(ToastType.Info, 'Link copied to clipboard');
        dispatch({
          type: ACTION_TYPE.RESET_MENU,
        });
        break;
      }
      default:
        break;
    }
  };
  const HISTORY_MENU = [
    {
      id: 0,
      clickHandler: clickHandler,
      danger: true,
      icon: <span class='material-icons-outlined'>delete</span>,
      text: 'Remove from Watch History',
    },
    {
      id: 1,
      clickHandler: clickHandler,
      icon: <span className='material-icons-outlined'>watch_later</span>,
      text: 'Save to Watch Later',
    },
    {
      id: 2,
      clickHandler,
      icon: <span className='material-icons-outlined'>playlist_play</span>,
      text: 'Save to Playlist',
    },
    {
      id: 3,
      clickHandler,
      icon: <span className='material-icons-outlined'>share</span>,
      text: 'Share',
    },
  ];

  return (
    <>
      {reversedHistoryArray.length === 0 && (
        <div className='history-empty-space-filler'>
          <p className='text-lg font-wt-semibold text-align-center'>
            Looks like you havn't seen any video yet
          </p>
          <button
            onClick={() => navigate('/videos')}
            className='btn btn-primary background-secondary brd-rd-semi-sq'
          >
            Explore
          </button>
        </div>
      )}
      {reversedHistoryArray.length > 0 && (
        <div className='history-page-header-container'>
          <h3>History</h3>
          <p>{reversedHistoryArray.length} videos</p>
        </div>
      )}
      <div className='history-list-container'>
        {reversedHistoryArray.length > 0 &&
          reversedHistoryArray.map((video) => {
            return (
              <VideoCard
                video={video}
                key={video._id}
                menuItems={HISTORY_MENU}
                type={'history'}
              />
            );
          })}
        {reversedHistoryArray.length > 0 && (
          <div className='history-clear-all-button-container'>
            <button
              className='btn btn-primary background-danger brd-rd-semi-sq history-clear-all-button'
              onClick={deleteAllHistory}
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </>
  );
};
