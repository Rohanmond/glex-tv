import { useData } from '../../contexts';
import { PlayListCard } from './components/PlayListCard/PlayListCard';
import './PlayList.css';
export const PlayList = () => {
  const { state } = useData();
  console.log(state);
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
              <PlayListCard playlist={el} key={el._id} type={'playlists'} />
            );
          })}
      </div>
    </>
  );
};
