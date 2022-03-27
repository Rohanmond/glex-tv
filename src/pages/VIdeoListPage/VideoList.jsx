import { ChipsContainer } from '../../components';
import { useFilter } from '../../custom-hooks/FilterHook';
import VideoCard from './components/VideoCard/VideoCard';
import './VideoList.css';

export const VideoList = () => {
  const { filteredData } = useFilter();

  return (
    <>
      <ChipsContainer />
      <div className='video-list-container'>
        {filteredData.length > 0 &&
          filteredData.map((el) => {
            return <VideoCard video={el} key={el._id} />;
          })}
      </div>
    </>
  );
};
