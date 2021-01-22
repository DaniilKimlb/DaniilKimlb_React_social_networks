const objectHelpers = (items, itemsId, userId, object) => {
  return items.map((u) => {
    if (u[itemsId] === userId) {
      return { ...u, ...object };
    }
    return u;
  });
};
export default objectHelpers;
