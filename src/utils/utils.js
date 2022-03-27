export const searchFilter = (data, searchPattern) => {
  let newData = [...data];
  if (searchPattern === '') return newData;
  newData = newData.filter(
    (el) =>
      el.title.toLowerCase().includes(searchPattern?.toLowerCase()) ||
      el.creator.toLowerCase().includes(searchPattern?.toLowerCase())
  );
  return newData;
};

export const categoryFilter = (data, category) => {
  let newData = [...data];
  if (!category || category === 'all') return newData;
  return newData.filter((el) => el.categories.find((cat) => cat === category));
};
