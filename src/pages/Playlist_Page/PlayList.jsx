import { useData } from '../../contexts';
import { PlayListCard } from './components/PlayListCard/PlayListCard';
import './PlayList.css';
export const PlayList = () => {
  const { state, DeletePlaylist } = useData();
  console.log(state);
  const clickHandler = (e, playlist, id) => {
    switch (id) {
      case 1: {
        DeletePlaylist({ playlistId: playlist._id });
        console.log('play delete');
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
      icon: <span className='material-icons-outlined'>close</span>,
      text: 'Remove from playlist',
    },
  ];
  return (
    <>
      <div className='playlist-header-container'>
        <h3>Playlists</h3>
        <p>{state.playlists.length} playlists</p>
      </div>
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
