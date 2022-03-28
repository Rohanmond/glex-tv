export const ACTION_TYPE = {
  INITIAL_DATA_FETCH: 'INITIAL_DATA_FETCH',
  FILTER_CHANGE: 'FILTER_CHANGE',
  FILTER_CLEAR: 'FILTER_CLEAR',
  MENU_TOGGLE: 'ACTIVE_MENU',
  RESET_MENU: 'RESET_MENU',
};
export const FILTER = {
  SEARCH: 'search',
  CATEGORY: 'category',
};
const clickHandler = (e, videoId) => {
  console.log(e, videoId);
};
export const VIDEO_CARD_HOME_MENU = [
  {
    id: 1,
    clickHandler: clickHandler,
    icon: <span className='material-icons-outlined'>watch_later</span>,
    text: 'Save to Watch Later',
  },
  {
    id: 2,
    clickHandler,
    icon: <span className='material-icons-outlined'>playlist_play</span>,
    text: 'Save to Playlist',
  },
  {
    id: 3,
    clickHandler,
    icon: <span class='material-icons-outlined'>share</span>,
    text: 'Share',
  },
];
