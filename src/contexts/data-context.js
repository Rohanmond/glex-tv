import { createContext, useReducer, useContext, useEffect } from 'react';
import { ACTION_TYPE } from '../constants/constant';
import { DataReducer, InitialState } from '../reducers/reducer';
import {
  DeleteAllHistoriesService,
  DeleteHistoryService,
  GetAllCategories,
  GetAllHistoryService,
  GetAllPlaylistsService,
  GetAllVideos,
  PostHistoryService,
  PostPlaylistService,
} from '../Services/services';
import { useAuth } from './auth-context';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);
  const { token } = useAuth();

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
    }
  }, [token]);

  const GetAllHistory = async () => {
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
  const PostPlaylist = async ({ playlist }) => {
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
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        GetAllHistory,
        PostHistory,
        DeleteAllHistory,
        DeleteHistory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
