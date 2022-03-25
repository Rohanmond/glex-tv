import './VideoCard.css';
const VideoCard = ({ element }) => {
  const { _id, title, creator } = element;
  return (
    <div className='video-card-container'>
      <div className='video-card-image-container'>
        <img
          className='img-responsive video-card-image'
          src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
          alt={title}
        />
      </div>
      <div className='video-card-header-container font-wt-bold'>
        <p className='video-card-header'>{title}</p>
        <span class='material-icons-outlined video-card-header-menu'>
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
