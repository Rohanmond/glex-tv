import { createContext, useReducer, useContext, useEffect } from 'react';
import { ACTION_TYPE } from '../constants/constant';
import { DataReducer, InitialState } from '../reducers/reducer';
import {
  GetAllCategories,
  GetAllHistoryService,
  GetAllVideos,
} from '../Services/services';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);

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

  const GetAllHistory = async ({ encodedToken }) => {
    const historyRes = await GetAllHistoryService({ encodedToken });
    if (historyRes.status === 200 || historyRes.status === 201) {
    }
  };
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
