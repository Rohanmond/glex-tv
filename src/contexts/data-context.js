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
  addToLikedVideosService,
  deleteAllHistoriesService,
  deleteHistoryService,
  deleteLikedVideosService,
  deletePlayListService,
  deleteVideoFromWatchLaterService,
  deleteVideoPlaylistService,
  getAllCategoriesService,
  getAllHistoryService,
  getAllPlaylistsService,
  getAllVideosService,
  getLikedVideosService,
  getWatchLaterService,
  postHistoryService,
  postPlaylistService,
  postVideoPlaylistService,
  postWatchLaterService,
  updateAllVideosService,
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
        const videosRes = await getAllVideosService();
        if (videosRes.status === 200) {
          dispatch({
            type: ACTION_TYPE.INITIAL_DATA_FETCH,
            payload: { videos: videosRes.data.videos },
          });
        }

        const categoriesRes = await getAllCategoriesService();
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
      getAllHistory();
      getAllPlaylist();
      getWatchLater();
      getLikedVideos();
    } else {
      dispatch({
        type: ACTION_TYPE.RESET,
      });
    }
  }, [token]);
  const updateAllVideos = async ({ videoId, comments }) => {
    try {
      const res = await updateAllVideosService({ videoId, comments });
      if (res.status === 200) {
        dispatch({
          type: ACTION_TYPE.INITIAL_DATA_FETCH,
          payload: { videos: res.data.videos },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getAllHistory = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const historyRes = await getAllHistoryService({ encodedToken: token });
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
  const postHistory = async ({ video }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const historyRes = await postHistoryService({
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

  const deleteHistory = async ({ videoId }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const historyRes = await deleteHistoryService({
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

  const deleteAllHistory = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const historyRes = await deleteAllHistoriesService({
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

  const getAllPlaylist = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const playlistRes = await getAllPlaylistsService({ encodedToken: token });
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
  const postPlaylist = async ({ title }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    const playlist = { title };
    try {
      const playlistRes = await postPlaylistService({
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

  const deletePlaylist = async ({ playlistId }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const playlistRes = await deletePlayListService({
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

  const postSingleVideoPlaylist = async ({ playlistId, video }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const playlistRes = await postVideoPlaylistService({
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

  const deleteSingleVideoFromPlaylist = async ({ playlistId, videoId }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const response = await deleteVideoPlaylistService({
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

  const getWatchLater = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const watchlaterRes = await getWatchLaterService({ encodedToken: token });
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

  const postWatchLater = async ({ video }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      if (state.laters.some((el) => el._id === video._id)) {
        console.log('already added in your watch later');
        return;
      }
      const watchlaterRes = await postWatchLaterService({
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

  const deleteVideoFromWatchLater = async ({ videoId }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const watchlaterRes = await deleteVideoFromWatchLaterService({
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

  const getLikedVideos = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const likedRes = await getLikedVideosService({ encodedToken: token });
      if (likedRes.status === 201 || likedRes.status === 200) {
        dispatch({
          type: ACTION_TYPE.SET_LIKED,
          payload: { likes: likedRes.data.likes },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addToLikeVideos = async ({ video }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const likedRes = await addToLikedVideosService({
        encodedToken: token,
        video,
      });
      if (likedRes.status === 201 || likedRes.status === 200) {
        dispatch({
          type: ACTION_TYPE.SET_LIKED,
          payload: { likes: likedRes.data.likes },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteLikedVideos = async ({ videoId }) => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const likedRes = await deleteLikedVideosService({
        encodedToken: token,
        videoId,
      });
      if (likedRes.status === 201 || likedRes.status === 200) {
        dispatch({
          type: ACTION_TYPE.SET_LIKED,
          payload: { likes: likedRes.data.likes },
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
        getAllHistory,
        postHistory,
        deleteAllHistory,
        deleteHistory,
        playlistModalState,
        setPlaylistModalState,
        postPlaylist,
        getAllPlaylist,
        deletePlaylist,
        postSingleVideoPlaylist,
        deleteSingleVideoFromPlaylist,
        postWatchLater,
        getWatchLater,
        deleteVideoFromWatchLater,
        getLikedVideos,
        addToLikeVideos,
        deleteLikedVideos,
        updateAllVideos,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
