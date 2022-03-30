import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useData } from '../../../../contexts';
import './PlayListCard.css';
import { useOutsideClickHandler } from '../../../../custom-hooks/OutSideClickHandlerHook';
import { ACTION_TYPE } from '../../../../constants/constant';
import { VideoCardMenu } from '../../../VIdeoListPage/components/VideoCardMenu/VideoCardMenu';

export const PlayListCard = ({ playlist, menuItems, type }) => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const ref = useRef(null);
  const { resetMenu } = useOutsideClickHandler(ref);
  const { _id, videos, title, menu } = playlist;

  useEffect(() => {
    if (resetMenu) {
      dispatch({
        type: ACTION_TYPE.RESET_MENU,
      });
    }
  }, [resetMenu, dispatch]);

  return (
    <div className='playlist-card-container'>
      <div
        className='playlist-card-image-container'
        onClick={() => navigate(`/playlist/${_id}`)}
      >
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
          <span className='material-icons-outlined'>playlist_play</span>
        </div>
      </div>
      <div className='playlist-card-header-container font-wt-bold'>
        <p className='playlist-card-header'>{title}</p>
        <div
          className='playlist-card-header-menu'
          ref={ref}
          onClick={() => {
            dispatch({
              type: ACTION_TYPE.MENU_TOGGLE,
              payload: { _id, type },
            });
          }}
        >
          <span className='material-icons-outlined'>more_vert</span>
          {menu && <VideoCardMenu menuItems={menuItems} video={playlist} />}
        </div>
      </div>
    </div>
  );
};
