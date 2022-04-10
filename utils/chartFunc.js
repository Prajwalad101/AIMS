export const getItemsByMonth = (items) => {
  console.log(items);
  const initialData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  items.forEach((item) => {
    const time = item.createdAt;
    const date = new Date(time);
    const month = date.getMonth();
    initialData[month]++;
  });

  return initialData;
};
