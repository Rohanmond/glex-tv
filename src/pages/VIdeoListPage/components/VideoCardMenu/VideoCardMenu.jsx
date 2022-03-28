import './VideoCardMenu.css';
export const VideoCardMenu = ({ menuItems, video }) => {
  return (
    <div className='video-card-menu-outer-container'>
      <div className='video-card-menu-container'>
        {menuItems &&
          menuItems.map((item) => {
            console.log(typeof item.clickHandler);
            return (
              <div
                className='video-card-menu-item'
                key={item.id}
                onClick={(e) => {
                  item.clickHandler(e, video, item.id);
                }}
              >
                {item.icon}
                <p>{item.text}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
