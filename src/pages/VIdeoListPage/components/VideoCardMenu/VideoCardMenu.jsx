import { useData } from '../../../../contexts';
import './VideoCardMenu.css';

export const VideoCardMenu = ({ menuItems, video }) => {
  const { showPlaylistModal } = useData();
  console.log(showPlaylistModal, 'showplaylist');
  return (
    <div className='video-card-menu-outer-container'>
      <div className='video-card-menu-container'>
        {menuItems &&
          menuItems.map((item) => {
            return (
              <div key={item.id}>
                {showPlaylistModal && item.playlistModal}
                <div
                  className={`video-card-menu-item ${
                    item.danger && 'danger-color'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    item.clickHandler(e, video, item.id);
                  }}
                >
                  {item.icon}
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
