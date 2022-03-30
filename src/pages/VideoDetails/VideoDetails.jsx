import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './VideoDetails.css';
import { useAuth, useData } from '../../contexts';
import VideoCard from '../VIdeoListPage/components/VideoCard/VideoCard';
import { ACTION_TYPE } from '../../constants/constant';
import { PlayListModal } from '../Playlist_Page/components/PlayListModal/PlayListModal';

export const VideoDetails = () => {
  const { videoId } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  const {
    state,
    PostHistory,
    PostWatchLater,
    dispatch,
    showPlaylistModal,
    setPlaylistModalState,
    DeleteVideoFromWatchLater,
  } = useData();
  const video = state.videos.find((ele) => ele._id === videoId) || {};
  const { title, creator } = video;
  const otherVideos = state.videos.filter((ele) => ele._id !== videoId);
  useEffect(() => {
    window.scrollTo(0, 0);
    PostHistory({ video });
  }, [videoId]);

  const watchlaterHandler = () => {
    state.laters.some((el) => el._id === videoId)
      ? DeleteVideoFromWatchLater({ videoId })
      : PostWatchLater({ video });
  };
  const savePlaylistHandler = () => {
    setPlaylistModalState(video);
  };
  const clickHandler = (e, video, id) => {
    switch (id) {
      case 1: {
        if (!token) {
          navigate('/login', { replace: true });
        }
        PostWatchLater({ video });
        dispatch({
          type: ACTION_TYPE.RESET_MENU,
        });
        break;
      }
      case 2: {
        if (!token) {
          navigate('/login', { replace: true });
        }
        setPlaylistModalState(video);
        break;
      }
      case 3: {
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
      {showPlaylistModal && <PlayListModal video={video} />}
      {video && (
        <div className='video-details-outer-container'>
          <section className='details-video-section'>
            <div className='details-video-container'>
              <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${videoId}`}
                title='YouTube video player'
                frameBorder='0'
                style={{ borderRadius: '0.5rem' }}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen={true}
              ></iframe>
            </div>
            <div className='details-video-footer'>
              <div className='details-video-footer-text'>
                <h3>{title}</h3>
                <p className='color-text-secondary'>{creator}</p>
              </div>

              <div className='details-video-footer-buttons'>
                <div className='details-video-footer-button'>
                  <i className='fas fa-heart'></i>
                  <p>Like</p>
                </div>
                <div
                  className={`details-video-footer-button ${
                    state.laters.some((el) => el._id === videoId) &&
                    'fill-watch-later'
                  }`}
                  onClick={watchlaterHandler}
                >
                  <i className='fas fa-clock'></i>
                  <p>Watch Later</p>
                </div>
                <div
                  className='details-video-footer-button'
                  onClick={savePlaylistHandler}
                >
                  <i className='fas fa-bookmark'></i>
                  <p>Save</p>
                </div>
                <div className='details-video-footer-button'>
                  <i className='fas fa-share-alt'></i>
                  <p>Copy Link</p>
                </div>
              </div>
            </div>
            <hr className='hr' />
          </section>
          <div className='video-list-container'>
            {otherVideos.map((el) => {
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
        </div>
      )}
    </>
  );
};
