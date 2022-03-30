import { useNavigate } from 'react-router-dom';
import { useData } from '../../../../contexts';
import './PlayListCard.css';

export const PlayListCard = ({ playlist, menuItems, type }) => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  // const ref = useRef(null);
  // const { resetMenu } = useOutsideClickHandler(ref);
  const { _id, videos, title } = playlist;

  // useEffect(() => {
  //   if (resetMenu) {
  //     dispatch({
  //       type: ACTION_TYPE.RESET_MENU,
  //     });
  //   }
  // }, [resetMenu, dispatch]);

  return (
    <div className='playlist-card-container'>
      <div className='playlist-card-image-container'>
        {videos.length > 0 && (
          <img
            className='img-responsive playlist-card-image'
            src={
              videos.length > 0
                ? `https://i.ytimg.com/vi/${videos[0]._id}/maxresdefault.jpg`
                : ''
            }
            alt={title}
          />
        )}
        {videos.length === 0 && (
          <div className='playlist-image-placeholder'></div>
        )}
        <div className='playlist-card-number-wrapper'>
          <p>{videos.length}</p>
          <span class='material-icons-outlined'>playlist_play</span>
        </div>
      </div>
      <div className='playlist-card-header-container font-wt-bold'>
        <p className='playlist-card-header'>{title}</p>
        <div className='playlist-card-header-menu'>
          <span className='material-icons-outlined'>more_vert</span>
        </div>
      </div>
    </div>
  );
};
