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
        return { ...state, videos: action.payload.videos };
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
    default:
      return state;
  }
};
