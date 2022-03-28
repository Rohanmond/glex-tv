import { useData } from '../../contexts';
import VideoCard from '../VIdeoListPage/components/VideoCard/VideoCard';
import './HistoryPage.css';
export const HistoryPage = () => {
  const { state, DeleteAllHistory } = useData();

  const clickHandler = (e, video, id) => {
    switch (id) {
      case 1: {
        console.log('hello');
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
  console.log(state.history);
  return (
    <div className='history-list-container'>
      {state.history.length > 0 &&
        state.history.map((video) => {
          return (
            <VideoCard
              video={video}
              key={video._id}
              menuItems={VIDEO_CARD_HOME_MENU}
              type={'history'}
            />
          );
        })}
      <div className='history-clear-all-button-container'>
        <button
          className='btn btn-primary background-danger brd-rd-semi-sq history-clear-all-button'
          onClick={DeleteAllHistory}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};
