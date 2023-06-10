function sort(obj, data) {
  const initialData = [];
  const finalData = [];

  for (const key in obj) {
    if (data.includes(key)) {
      const index = data.indexOf(key);
      initialData.splice(index, 0, { key, value: obj[key] });
    } else {
      finalData.push({ key, value: obj[key] });
    }
  }
  finalData.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...initialData, ...finalData];
}

export default { sort };
