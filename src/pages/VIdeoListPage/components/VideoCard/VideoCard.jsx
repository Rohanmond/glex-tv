import { useNavigate } from 'react-router-dom';
import './VideoCard.css';
import { useData } from '../../../../contexts';
import { ACTION_TYPE } from '../../../../constants/constant';
import { useRef } from 'react';
import { useOutsideClickHandler } from '../../../../custom-hooks/OutSideClickHandlerHook';

const VideoCard = ({ video, VideoCardMenu }) => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const ref = useRef(null);
  useOutsideClickHandler(ref);
  const { _id, title, creator, menu } = video;

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

        <span
          ref={ref}
          className='material-icons-outlined video-card-header-menu'
          onClick={() =>
            dispatch({ type: ACTION_TYPE.MENU_TOGGLE, payload: { _id } })
          }
        >
          more_vert
        </span>
        {menu && <VideoCardMenu />}
      </div>
      <div className='video-card-subheader-container'>
        <p className='video-card-subheader'>{creator}</p>
      </div>
    </div>
  );
};
export default VideoCard;
