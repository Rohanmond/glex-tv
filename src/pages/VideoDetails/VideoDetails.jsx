import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import './VideoDetails.css';
import { useAuth, useData } from '../../contexts';
import VideoCard from '../VIdeoListPage/components/VideoCard/VideoCard';
import { ACTION_TYPE } from '../../constants/constant';
import { PlayListModal } from '../Playlist_Page/components/PlayListModal/PlayListModal';
import { toastHandler, ToastType } from '../../utils/utils';

export const VideoDetails = () => {
  const { videoId } = useParams();
  const { token, user } = useAuth();
  const location = useLocation();
  const [commentInput, setCommentInput] = useState('');
  const [openCommentSection, setOpenCommentSection] = useState(false);
  const navigate = useNavigate();
  const {
    state,
    postHistory,
    postWatchLater,
    dispatch,
    showPlaylistModal,
    setPlaylistModalState,
    deleteVideoFromWatchLater,
    addToLikeVideos,
    deleteLikedVideos,
    updateAllVideos,
  } = useData();
  const video = state.videos.find((ele) => ele._id === videoId) || {};

  const { title, creator, _id, comments, release_date } = video || {};

  const otherVideos = state.videos.filter(
    (ele) =>
      ele._id !== videoId &&
      !video?.categories?.some((item) =>
        ele.categories.some((eleItem) => eleItem === item)
      )
  );
  useEffect(() => {
    window.scrollTo(0, 0);

    if (token) postHistory({ video });
  }, [videoId]);
  useEffect(() => {
    const id = setTimeout(() => {
      if (Object.keys(video).length === 0) navigate('/404');
    }, 3000);
    return () => clearTimeout(id);
  }, [video]);

  const watchlaterHandler = () => {
    if (!token) {
      navigate('/login', { state: { from: location } });
      return;
    }
    state.laters.some((el) => el._id === videoId)
      ? deleteVideoFromWatchLater({ videoId })
      : postWatchLater({ video });
  };
  const savePlaylistHandler = () => {
    if (!token) {
      navigate('/login', { state: { from: location } });
      return;
    }
    setPlaylistModalState(video);
  };
  const updateCommentHandler = () => {
    const comment = {
      _id: uuid(),
      user_name: user.name,
      comment: commentInput,
    };
    const newComments = comments.concat(comment);
    updateAllVideos({ videoId, comments: newComments });
    setCommentInput('');
    setOpenCommentSection(false);
  };
  const likeHandler = () => {
    if (!token) {
      navigate('/login', { state: { from: location } });
      return;
    }
    state.likes.some((el) => el._id === videoId)
      ? deleteLikedVideos({ videoId })
      : addToLikeVideos({ video });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://glex-tv.vercel.app/video/${video._id}`
    );
    toastHandler(ToastType.Info, 'Link copied to clipboard');
    dispatch({
      type: ACTION_TYPE.RESET_MENU,
    });
  };
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
      {showPlaylistModal && <PlayListModal video={video} />}
      {_id && (
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
                <p className='color-text-secondary release_date'>
                  {release_date}
                </p>
              </div>

              <div className='details-video-footer-buttons'>
                <div
                  className={`details-video-footer-button ${
                    state.likes.some((el) => el._id === videoId) && 'fill-like'
                  }`}
                  onClick={likeHandler}
                >
                  <i
                    className={`fa-thumbs-up ${
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
                  <span className='material-icons-outlined'>playlist_play</span>
                  <p className='font-wt-semibold'>Save</p>
                </div>
                <div
                  className='details-video-footer-button'
                  onClick={copyToClipboard}
                >
                  <i className='fas fa-share-alt'></i>
                  <p className='font-wt-semibold'>Share</p>
                </div>
              </div>
            </div>
            <hr className='hr' />
            {!user && <p>comments are turned off. Login to see comments</p>}
            {user && (
              <div className='video-details-comment-outer-component'>
                <p className='font-wt-semibold'>{comments.length} Comments</p>

                <div className='video-details-comment-input-container'>
                  <div className='comment-section-avatar'>{user?.name[0]}</div>
                  <input
                    id='comment-section'
                    value={commentInput}
                    onFocus={() => setOpenCommentSection(true)}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder='add your comment here'
                  />
                </div>

                {openCommentSection && (
                  <div className='comment-section-footer'>
                    <button
                      className='btn btn-primary background-danger brd-rd-semi-sq cancel-btn'
                      onClick={() => setOpenCommentSection(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className='btn btn-primary background-success brd-rd-semi-sq'
                      onClick={updateCommentHandler}
                    >
                      Submit
                    </button>
                  </div>
                )}
                <div className='video-details-comment-container'>
                  {comments.map((comment) => {
                    return (
                      <div key={comment._id} className='video-details-comment'>
                        <div className='comment-section-avatar'>
                          {comment.user_name[0]}
                        </div>
                        <div className='video-details-each-comment-container'>
                          <p className='font-wt-bold'>{comment.user_name}</p>
                          <p>{comment.comment}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
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
