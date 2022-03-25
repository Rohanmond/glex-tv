import { ChipsContainer } from '../../components';
import { useData } from '../../contexts';
import VideoCard from './components/VideoCard/VideoCard';
import './VideoList.css';

export const VideoList = () => {
  const { state } = useData();

  return (
    <>
      <ChipsContainer />
      <div className='video-list-container'>
        {state.videos.map((el) => {
          return <VideoCard element={el} key={el._id} />;
        })}
      </div>
    </>
  );
};
