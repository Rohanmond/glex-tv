import './VideoCardMenu.css';
export const VideoCardMenu = ({ menuItems }) => {
  return (
    <div className='video-card-menu-outer-container'>
      <div className='video-card-menu-container'>
        {menuItems.map((item) => {
          return (
            <div className='video-card-menu-item' key={item.id}>
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
