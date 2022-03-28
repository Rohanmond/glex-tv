import { ChipsContainer } from '../../components';
import { VIDEO_CARD_HOME_MENU } from '../../constants/constant';
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
            return (
              <VideoCard
                video={el}
                key={el._id}
                menuItems={VIDEO_CARD_HOME_MENU}
              />
            );
          })}
      </div>
    </>
  );
};
