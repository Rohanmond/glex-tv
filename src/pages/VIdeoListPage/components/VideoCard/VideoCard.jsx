import { useNavigate } from 'react-router-dom';
import './VideoCard.css';
const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  console.log(video, video);
  const { _id, title, creator } = video;
  return (
    <div className='video-card-container'>
      <div
        className='video-card-image-container'
        onClick={() => navigate(`/video/${_id}`)}
      >
        <img
          className='img-responsive video-card-image'
          src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
          alt={title}
        />
      </div>
      <div className='video-card-header-container font-wt-bold'>
        <p className='video-card-header'>{title}</p>
        <span className='material-icons-outlined video-card-header-menu'>
          more_vert
        </span>
      </div>
      <div className='video-card-subheader-container'>
        <p className='video-card-subheader'>{creator}</p>
      </div>
    </div>
  );
};
export default VideoCard;
