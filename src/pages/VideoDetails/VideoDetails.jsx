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
    AddToLikeVideos,
    DeleteLikedVideos,
  } = useData();
  const video = state.videos.find((ele) => ele._id === videoId) || {};
  const { title, creator } = video;

  const otherVideos = state.videos.filter(
    (ele) =>
      ele._id !== videoId &&
      !video.categories.some((item) =>
        ele.categories.some((eleItem) => eleItem === item)
      )
  );
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
  const likeHandler = () => {
    state.likes.some((el) => el._id === videoId)
      ? DeleteLikedVideos({ videoId })
      : AddToLikeVideos({ video });
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
                <div
                  className={`details-video-footer-button ${
                    state.likes.some((el) => el._id === videoId) && 'fill-like'
                  }`}
                  onClick={likeHandler}
                >
                  <i
                    class={`fa-thumbs-up ${
                      state.likes.some((el) => el._id === videoId)
                        ? 'fas'
                        : 'far'
                    }`}
                  ></i>
                  {state.likes.some((el) => el._id === videoId) ? (
                    <p className='font-wt-semibold'>Liked</p>
                  ) : (
                    <p className='font-wt-semibold'>Like</p>
                  )}
                </div>
                <div
                  className={`details-video-footer-button ${
                    state.laters.some((el) => el._id === videoId) &&
                    'fill-watch-later'
                  }`}
                  onClick={watchlaterHandler}
                >
                  <i
                    className={`fa-clock ${
                      state.laters.some((el) => el._id === videoId)
                        ? 'fas'
                        : 'far'
                    }`}
                  ></i>
                  <p className='font-wt-semibold'>Watch Later</p>
                </div>
                <div
                  className='details-video-footer-button'
                  onClick={savePlaylistHandler}
                >
                  <span class='material-icons-outlined'>playlist_play</span>
                  <p className='font-wt-semibold'>Save</p>
                </div>
                <div className='details-video-footer-button'>
                  <i className='fas fa-share-alt'></i>
                  <p className='font-wt-semibold'>Share</p>
                </div>
              </div>
            </div>
            <hr className='hr' />
            <div className='video-details-comment-outer-component'>
              <p className='font-wt-semibold'>9 Comments</p>
              <div className='video-details-comment-input-container'>
                <div className='comment-section-avatar'>R</div>
                <input
                  id='comment-section'
                  placeholder='add your comment here'
                />
              </div>
              <div className='comment-section-footer'>
                <button className='btn btn-primary background-danger brd-rd-semi-sq cancel-btn'>
                  Cancel
                </button>
                <button className='btn btn-primary background-success brd-rd-semi-sq'>
                  Submit
                </button>
              </div>
              <div className='video-details-comment-container'>
                <div className='video-details-comment'>
                  <div className='comment-section-avatar'>R</div>
                  <div className='video-details-each-comment-container'>
                    <p className='font-wt-semibold'>Rohan Mondal</p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Atque quidem ipsum mollitia id itaque sit? Quae libero
                      corrupti a facilis eaque reprehenderit pariatur doloribus
                      itaque iure? Quisquam vero iusto obcaecati!
                    </p>
                  </div>
                </div>
                <div className='video-details-comment'>
                  <div className='comment-section-avatar'>R</div>
                  <div className='video-details-each-comment-container'>
                    <p className='font-wt-bold'>Rohan Mondal</p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Atque quidem ipsum mollitia id itaque sit? Quae libero
                      corrupti a facilis eaque reprehenderit pariatur doloribus
                      itaque iure? Quisquam vero iusto obcaecati!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className='video-details-list-container'>
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
