import { useNavigate } from 'react-router-dom';
import './VideoCard.css';
import { useData } from '../../../../contexts';
import { ACTION_TYPE } from '../../../../constants/constant';
import { useRef, useEffect } from 'react';
import { useOutsideClickHandler } from '../../../../custom-hooks/OutSideClickHandlerHook';
import { VideoCardMenu } from '../VideoCardMenu/VideoCardMenu';

const VideoCard = ({ video, menuItems, type, playlist_id }) => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const ref = useRef(null);
  const { resetMenu } = useOutsideClickHandler(ref);
  const { _id, title, creator, menu } = video;

  useEffect(() => {
    if (resetMenu)
      dispatch({
        type: ACTION_TYPE.RESET_MENU,
      });
  }, [resetMenu, dispatch]);

  return (
    <div className='video-card-container'>
      <div
        className='video-card-image-container'
        onClick={() => navigate(`/video/${_id}`)}
      >
        <img
          className='img-responsive video-card-image'
          src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
          alt={title}
        />
      </div>
      <div className='video-card-header-container font-wt-bold'>
        <p className='video-card-header'>{title}</p>
        <div
          className='video-card-header-menu'
          ref={ref}
          onClick={() => {
            dispatch({
              type: ACTION_TYPE.MENU_TOGGLE,
              payload: { _id, type, playlist_id },
            });
          }}
        >
          <span className='material-icons-outlined'>more_vert</span>
          {menu && <VideoCardMenu menuItems={menuItems} video={video} />}
        </div>
      </div>
      <div className='video-card-subheader-container'>
        <p className='video-card-subheader'>{creator}</p>
      </div>
    </div>
  );
};
export default VideoCard;
