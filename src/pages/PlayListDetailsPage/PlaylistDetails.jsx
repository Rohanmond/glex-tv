import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../contexts';
import VideoCard from '../VIdeoListPage/components/VideoCard/VideoCard';
import './PlaylistDetails.css';
export const PlaylistDetials = () => {
  const { playlistId } = useParams();
  const { state, deleteSingleVideoFromPlaylist } = useData();
  const playlist = state.playlists.find(
    (playlist) => playlist._id === playlistId
  );
  const navigate = useNavigate();
  const clickHandler = (e, video, menuId) => {
    switch (menuId) {
      case 0: {
        deleteSingleVideoFromPlaylist({ playlistId, videoId: video._id });
        break;
      }

      default:
        break;
    }
  };
  const PLAYLIST_DETAILS_MENU = [
    {
      id: 0,
      clickHandler,
      danger: true,
      icon: <span class='material-icons-outlined'>delete</span>,
      text: 'Remove video from playlist',
    },
  ];

  return (
    <>
      {(!playlist || playlist.videos.length === 0) && (
        <div className='history-empty-space-filler'>
          <p className='text-lg font-wt-semibold text-align-center'>
            There is no video in your playlist
          </p>
          <button
            onClick={() => navigate('/videos')}
            className='btn btn-primary background-secondary brd-rd-semi-sq'
          >
            Explore
          </button>
        </div>
      )}
      {playlist && playlist.videos.length > 0 && (
        <div className='playlist-details-header-container'>
          <h3>{playlist.title}</h3>
          <p>{playlist.videos.length} videos</p>
        </div>
      )}
      <div className='playlist-details-container'>
        {playlist &&
          playlist.videos.length > 0 &&
          playlist.videos.map((video) => {
            return (
              <VideoCard
                video={video}
                key={video._id}
                menuItems={PLAYLIST_DETAILS_MENU}
                type={'playlist'}
                playlist_id={playlistId}
              />
            );
          })}
      </div>
    </>
  );
};
