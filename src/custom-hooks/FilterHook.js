import { useData } from '../contexts/data-context';

export const useFilter = () => {
  const { state } = useData();
  const { videos, filter } = state;
  let newData = [...videos];
  if (!filter.category || filter.category === 'all')
    return { filteredData: newData };
  newData = newData.filter((el) =>
    el.categories.find((cat) => cat === filter.category)
  );
  return { filteredData: newData };
};
