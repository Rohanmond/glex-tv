import { useNavigate } from 'react-router-dom';
import { useData } from '../../contexts';

import { PlayListCard } from './components/PlayListCard/PlayListCard';
import './PlayList.css';
export const PlayList = () => {
  const { state, deletePlaylist } = useData();
  const navigate = useNavigate();

  const clickHandler = (e, playlist, id) => {
    switch (id) {
      case 1: {
        deletePlaylist({ playlistId: playlist._id });
        break;
      }
      default:
        break;
    }
  };
  const PLAYLIST_CARD_MENU = [
    {
      id: 1,
      clickHandler,
      danger: true,
      icon: <span class='material-icons-outlined'>delete</span>,
      text: 'Remove playlist',
    },
  ];
  return (
    <>
      {state.playlists.length === 0 && (
        <div className='history-empty-space-filler'>
          <p className='text-lg font-wt-semibold text-align-center'>
            Looks like you havn't add any playlist yet
          </p>
          <button
            onClick={() => navigate('/videos')}
            className='btn btn-primary background-secondary brd-rd-semi-sq'
          >
            Explore
          </button>
        </div>
      )}
      <div className='playlists-container'>
        {state.playlists.length > 0 &&
          state.playlists.map((el) => {
            return (
              <PlayListCard
                playlist={el}
                key={el._id}
                type={'playlists'}
                menuItems={PLAYLIST_CARD_MENU}
              />
            );
          })}
      </div>
    </>
  );
};
