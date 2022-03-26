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
        {state.videos.length > 0 &&
          state.videos.map((el) => {
            return <VideoCard video={el} key={el._id} />;
          })}
      </div>
    </>
  );
};
