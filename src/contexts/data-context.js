import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ACTION_TYPE } from '../constants/constant';
import { DataReducer, InitialState } from '../reducers/reducer';
import {
  DeleteAllHistoriesService,
  DeleteHistoryService,
  DeletePlayListService,
  DeleteVideoFromWatchLaterService,
  DeleteVideoPlaylistService,
  GetAllCategories,
  GetAllHistoryService,
  GetAllPlaylistsService,
  GetAllVideos,
  GetWatchLaterService,
  PostHistoryService,
  PostPlaylistService,
  PostVideoPlaylistService,
  PostWatchLaterService,
} from '../Services/services';
import { useAuth } from './auth-context';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);
  const [playlistModalState, setPlaylistModalState] = useState(null);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const videosRes = await GetAllVideos();
        if (videosRes.status === 200) {
          dispatch({
            type: ACTION_TYPE.INITIAL_DATA_FETCH,
            payload: { videos: videosRes.data.videos },
          });
        }

        const categoriesRes = await GetAllCategories();
        if (categoriesRes.status === 200) {
          dispatch({
            type: ACTION_TYPE.INITIAL_DATA_FETCH,
            payload: { categories: categoriesRes.data.categories },
          });
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  useEffect(() => {
    if (token) {
      GetAllHistory();
      GetAllPlaylist();
      GetWatchLater();
    } else {
      dispatch({
        type: ACTION_TYPE.RESET,
      });
    }
  }, [token]);

  const GetAllHistory = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const historyRes = await GetAllHistoryService({ encodedToken: token });
      if (historyRes.status === 200 || historyRes.status === 201) {
        dispatch({
          type: ACTION_TYPE.SET_HISTORY,
          payload: { history: historyRes.data.history },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const PostHistory = async ({ video }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const historyRes = await PostHistoryService({
        video,
        encodedToken: token,
      });
      if (historyRes.status === 200 || historyRes.status === 201) {
        dispatch({
          type: ACTION_TYPE.SET_HISTORY,
          payload: { history: historyRes.data.history },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const DeleteHistory = async ({ videoId }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const historyRes = await DeleteHistoryService({
        videoId,
        encodedToken: token,
      });
      if (historyRes.status === 200 || historyRes.status === 201) {
        dispatch({
          type: ACTION_TYPE.SET_HISTORY,
          payload: { history: historyRes.data.history },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const DeleteAllHistory = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const historyRes = await DeleteAllHistoriesService({
        encodedToken: token,
      });
      if (historyRes.status === 200 || historyRes.status === 201) {
        dispatch({
          type: ACTION_TYPE.SET_HISTORY,
          payload: { history: historyRes.data.history },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const GetAllPlaylist = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const playlistRes = await GetAllPlaylistsService({ encodedToken: token });
      if (playlistRes.status === 200 || playlistRes.status === 201) {
        dispatch({
          type: ACTION_TYPE.SET_PLAYLIST,
          payload: { playlists: playlistRes.data.playlists },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const PostPlaylist = async ({ title }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    const playlist = { title };
    try {
      const playlistRes = await PostPlaylistService({
        playlist,
        encodedToken: token,
      });
      if (playlistRes.status === 201 || playlistRes.status === 200) {
        dispatch({
          type: ACTION_TYPE.SET_PLAYLIST,
          payload: { playlists: playlistRes.data.playlists },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const DeletePlaylist = async ({ playlistId }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const playlistRes = await DeletePlayListService({
        playlistId,
        encodedToken: token,
      });
      if (playlistRes.status === 201 || playlistRes.status === 200) {
        dispatch({
          type: ACTION_TYPE.SET_PLAYLIST,
          payload: { playlists: playlistRes.data.playlists },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const PostSingleVideoPlaylist = async ({ playlistId, video }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const playlistRes = await PostVideoPlaylistService({
        playlistId,
        video,
        encodedToken: token,
      });
      if (playlistRes.status === 201 || playlistRes.status === 200)
        dispatch({
          type: ACTION_TYPE.SET_SINGLE_PLAYLIST,
          payload: { playlist: playlistRes.data.playlist },
        });
    } catch (err) {
      console.log(err);
    }
  };

  const DeleteSingleVideoFromPlaylist = async ({ playlistId, videoId }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const response = await DeleteVideoPlaylistService({
        playlistId,
        videoId,
        encodedToken: token,
      });
      if (response.status === 201 || response.status === 200) {
        dispatch({
          type: ACTION_TYPE.SET_SINGLE_PLAYLIST,
          payload: { playlist: response.data.playlist },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const GetWatchLater = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const watchlaterRes = await GetWatchLaterService({ encodedToken: token });
      if (watchlaterRes.status === 200 || watchlaterRes.status === 201) {
        dispatch({
          type: ACTION_TYPE.SET_WATCH_LATER,
          payload: { laters: watchlaterRes.data.laters },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const PostWatchLater = async ({ video }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      if (state.laters.some((el) => el._id === video._id)) {
        console.log('already added in your watch later');
        return;
      }
      const watchlaterRes = await PostWatchLaterService({
        video,
        encodedToken: token,
      });
      if (watchlaterRes.status === 201 || watchlaterRes.status === 200) {
        dispatch({
          type: ACTION_TYPE.SET_WATCH_LATER,
          payload: { laters: watchlaterRes.data.laters },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const DeleteVideoFromWatchLater = async ({ videoId }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const watchlaterRes = await DeleteVideoFromWatchLaterService({
        videoId,
        encodedToken: token,
      });
      if (watchlaterRes.status === 201 || watchlaterRes.status === 200) {
        dispatch({
          type: ACTION_TYPE.SET_WATCH_LATER,
          payload: { laters: watchlaterRes.data.laters },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        GetAllHistory,
        PostHistory,
        DeleteAllHistory,
        DeleteHistory,
        playlistModalState,
        setPlaylistModalState,
        PostPlaylist,
        GetAllPlaylist,
        DeletePlaylist,
        PostSingleVideoPlaylist,
        DeleteSingleVideoFromPlaylist,
        PostWatchLater,
        GetWatchLater,
        DeleteVideoFromWatchLater,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
