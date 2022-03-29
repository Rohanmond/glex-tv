import { useData } from '../../contexts';
import { PlayListCard } from './components/PlayListCard/PlayListCard';
import './PlayList.css';
export const PlayList = () => {
  const { state } = useData();
  console.log(state);
  return (
    <>
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
