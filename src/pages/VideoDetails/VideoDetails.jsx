import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './VideoDetails.css';
import { useData } from '../../contexts';
import VideoCard from '../VIdeoListPage/components/VideoCard/VideoCard';

export const VideoDetails = () => {
  const { videoId } = useParams();
  const { state } = useData();
  const video = state.videos.find((ele) => ele._id === videoId) || {};
  const { title, creator } = video;
  const otherVideos = state.videos.filter((ele) => ele._id !== videoId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);
  return (
    <>
      {video && (
        <div className='video-details-outer-container'>
          <section className='details-video-section'>
            <div className='details-video-container'>
              <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${videoId}`}
                title='YouTube video player'
                frameBorder='0'
                style={{ borderRadius: '0.5rem' }}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen=''
              ></iframe>
            </div>
            <div className='details-video-footer'>
              <div className='details-video-footer-text'>
                <h3>{title}</h3>
                <p className='color-text-secondary'>{creator}</p>
              </div>

              <div className='details-video-footer-buttons'>
                <div className='details-video-footer-button'>
                  <i class='fas fa-heart'></i>
                  <p>Like</p>
                </div>
                <div className='details-video-footer-button'>
                  <i class='fas fa-clock'></i>
                  <p>Watch Later</p>
                </div>
                <div className='details-video-footer-button'>
                  <i class='fas fa-bookmark'></i>
                  <p>Save</p>
                </div>
                <div className='details-video-footer-button'>
                  <i class='fas fa-share-alt'></i>
                  <p>Copy Link</p>
                </div>
              </div>
            </div>
            <hr className='hr' />
          </section>
          <div className='video-list-container'>
            {otherVideos.map((el) => {
              return <VideoCard video={el} key={el._id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};
