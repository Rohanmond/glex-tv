import './VideoCardMenu.css';
export const VideoCardMenu = ({ menuItems, videoId }) => {
  return (
    <div className='video-card-menu-outer-container'>
      <div className='video-card-menu-container'>
        {/* {menuItems &&
          menuItems.map((item) => {
            console.log(typeof item.clickHandler);
            return (
              <div
                className='video-card-menu-item'
                key={item.id}
                onClick={(e) => {
                  console.log('vs');
                  //   item.clickHandler(e, videoId);
                }}
              >
                {item.icon}
                <p
                  onClick={(e) => {
                    console.log('vs');
                  }}
                >
                  {item.text}
                </p>
              </div>
            );
          })} */}
        <div
          className='video-card-menu-item'
          onClick={(e) => {
            // e.stopPropagation();
            console.log('vs');
            //   item.clickHandler(e, videoId);
          }}
        >
          <span className='material-icons-outlined'>watch_later</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};
