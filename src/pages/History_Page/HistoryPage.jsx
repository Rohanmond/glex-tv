import { useData } from '../../contexts';
import VideoCard from '../VIdeoListPage/components/VideoCard/VideoCard';
import './HistoryPage.css';
export const HistoryPage = () => {
  const { state, DeleteAllHistory, DeleteHistory } = useData();

  const reversedHistoryArray = [...state.history].reverse();

  const clickHandler = (e, video, menuId) => {
    e.stopPropagation();
    switch (menuId) {
      case 0: {
        DeleteHistory({ videoId: video._id });
        break;
      }
      case 1: {
        console.log('hello', video);
        break;
      }
      case 2: {
        console.log('heY');
        break;
      }
      case 3: {
        console.log('3rd');
        break;
      }
      default:
        break;
    }
  };
  const VIDEO_CARD_HOME_MENU = [
    {
      id: 0,
      clickHandler: clickHandler,
      danger: true,
      icon: <span className='material-icons-outlined'>close</span>,
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
      {reversedHistoryArray.length > 0 && (
        <div className='history-page-header-container'>
          <h3>History</h3>
          <p>{reversedHistoryArray.length} videos</p>
        </div>
      )}
      <div className='history-list-container'>
        {reversedHistoryArray.length === 0 && (
          <h2>Looks like you havn't watched anything yet</h2>
        )}
        {reversedHistoryArray.length > 0 &&
          reversedHistoryArray.map((video) => {
            return (
              <VideoCard
                video={video}
                key={video._id}
                menuItems={VIDEO_CARD_HOME_MENU}
                type={'history'}
              />
            );
          })}
        {reversedHistoryArray.length > 0 && (
          <div className='history-clear-all-button-container'>
            <button
              className='btn btn-primary background-danger brd-rd-semi-sq history-clear-all-button'
              onClick={DeleteAllHistory}
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </>
  );
};
