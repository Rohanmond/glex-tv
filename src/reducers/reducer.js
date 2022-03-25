import { ACTION_TYPE } from '../constants/constant';

export const InitialState = {
  filter: {
    search: '',
    category: '',
  },
  categories: [],
  videos: [],
};
export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_DATA_FETCH: {
      if (action.payload.videos) {
      }
    }
    default:
      return state;
  }
};
