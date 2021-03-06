import { ACTION_TYPE } from '../constants/constant';

export const InitialState = {
  filter: {
    search: '',
    category: '',
  },

  categories: [],
  videos: [],
  history: [],
  playlists: [],
  laters: [],
  likes: [],
};
export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_DATA_FETCH: {
      if (action.payload.videos) {
        return {
          ...state,
          videos: action.payload.videos.map((video) => {
            return { ...video, menu: false };
          }),
        };
      }
      if (action.payload.categories) {
        return { ...state, categories: action.payload.categories };
      }
      return { ...state };
    }
    case ACTION_TYPE.FILTER_CHANGE:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.FILTER_TYPE]: action.payload.FILTER_VALUE,
        },
      };
    case ACTION_TYPE.FILTER_CLEAR:
      return {
        ...state,
        filter: { search: '', category: '' },
      };
    case ACTION_TYPE.MENU_TOGGLE:
      switch (action.payload.type) {
        case 'videos':
          return {
            ...state,
            videos: state.videos.map((video) => {
              if (video._id === action.payload._id)
                return { ...video, menu: !video.menu };
              return video;
            }),
          };
        case 'history':
          return {
            ...state,
            history: state.history.map((video) => {
              if (video._id === action.payload._id)
                return { ...video, menu: !video.menu };
              return video;
            }),
          };
        case 'likes':
          return {
            ...state,
            likes: state.likes.map((video) => {
              if (video._id === action.payload._id)
                return { ...video, menu: !video.menu };
              return video;
            }),
          };
        case 'watch_later':
          return {
            ...state,
            laters: state.laters.map((video) => {
              if (video._id === action.payload._id)
                return { ...video, menu: !video.menu };
              return video;
            }),
          };
        case 'playlists':
          return {
            ...state,
            playlists: state.playlists.map((play) => {
              if (play._id === action.payload._id)
                return { ...play, menu: !play.menu };
              return play;
            }),
          };
        case 'playlist':
          return {
            ...state,
            playlists: state.playlists.map((play) => {
              if (play._id === action.payload.playlist_id)
                return {
                  ...play,
                  videos: play.videos.map((video) => {
                    if (video._id === action.payload._id)
                      return { ...video, menu: !video.menu };
                    return video;
                  }),
                };
              return play;
            }),
          };

        default:
          return state;
      }

    case ACTION_TYPE.RESET_MENU:
      return {
        ...state,
        videos: state.videos.map((video) => {
          return { ...video, menu: false };
        }),
        history: state.history.map((video) => {
          return { ...video, menu: false };
        }),
        playlists: state.playlists.map((play) => {
          return {
            ...play,
            menu: false,
            videos: play.videos.map((video) => {
              return { ...video, menu: false };
            }),
          };
        }),
        laters: state.laters.map((video) => {
          return { ...video, menu: false };
        }),
      };
    case ACTION_TYPE.SET_HISTORY:
      return {
        ...state,
        history: action.payload.history.map((video) => {
          return { ...video, menu: false };
        }),
      };
    case ACTION_TYPE.SET_LIKED:
      return {
        ...state,
        likes: action.payload.likes.map((video) => {
          return { ...video, menu: false };
        }),
      };
    case ACTION_TYPE.SET_PLAYLIST:
      return {
        ...state,
        playlists: action.payload.playlists.map((play) => {
          return {
            ...play,
            menu: false,
            videos: play.videos.map((video) => {
              return { ...video, menu: false };
            }),
          };
        }),
      };
    case ACTION_TYPE.SET_SINGLE_PLAYLIST: {
      return {
        ...state,
        playlists: state.playlists.map((list) => {
          if (list._id === action.payload.playlist._id)
            return {
              ...action.payload.playlist,
              videos: action.payload.playlist.videos.map((video) => {
                return { ...video, menu: false };
              }),
            };
          return list;
        }),
      };
    }
    case ACTION_TYPE.SET_WATCH_LATER: {
      return {
        ...state,
        laters: action.payload.laters.map((video) => {
          return { ...video, menu: false };
        }),
      };
    }
    case ACTION_TYPE.RESET: {
      return { ...state, history: [], playlists: [], laters: [], likes: [] };
    }

    default:
      return state;
  }
};
