import { useData } from '../contexts/data-context';
import { categoryFilter, searchFilter } from '../utils/utils';

export const useFilter = () => {
  const { state } = useData();
  const { videos, filter } = state;
  let newData = [...videos];
  newData = categoryFilter(newData, filter.category);
  newData = searchFilter(newData, filter.search);
  return { filteredData: newData };
};
