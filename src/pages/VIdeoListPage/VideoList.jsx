import { useLocation, useNavigate } from 'react-router-dom';
import { ChipsContainer } from '../../components';
import { ACTION_TYPE } from '../../constants/constant';
import { useAuth, useData } from '../../contexts';
import { useFilter } from '../../custom-hooks/FilterHook';
import { toastHandler, ToastType } from '../../utils/utils';
import VideoCard from './components/VideoCard/VideoCard';
import './VideoList.css';

export const VideoList = () => {
  const { filteredData } = useFilter();
  const { token } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { setPlaylistModalState, postWatchLater, dispatch } = useData();

  const clickHandler = async (e, video, id) => {
    switch (id) {
      case 1: {
        if (!token) {
          navigate('/login', { state: { from: location } });
          return;
        }
        const msg = await postWatchLater({ video });

        if (msg) toastHandler(ToastType.Info, msg);
        else toastHandler(ToastType.Info, 'Already added to wishlist');
        dispatch({
          type: ACTION_TYPE.RESET_MENU,
        });

        break;
      }
      case 2: {
        if (!token) {
          navigate('/login', { state: { from: location } });
          return;
        }
        setPlaylistModalState(video);
        dispatch({
          type: ACTION_TYPE.RESET_MENU,
        });
        break;
      }
      case 3: {
        navigator.clipboard.writeText(
          `https://glex-tv.vercel.app/video/${video._id}`
        );
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

  return (
    <>
      <div>
        <ChipsContainer />
      </div>
      <div className='video-list-container'>
        {filteredData.length > 0 &&
          filteredData.map((el) => {
            return (
              <VideoCard
                video={el}
                key={el._id}
                menuItems={VIDEO_CARD_HOME_MENU}
                type={'videos'}
              />
            );
          })}
      </div>
    </>
  );
};
