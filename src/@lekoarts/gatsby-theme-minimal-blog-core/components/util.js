export const renameKey = (obj, oldKey, newKey) => {
  if (obj[oldKey]) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }
};

export function sortByDate(obj) {
  obj.map(post => renameKey(post, "published_at", "date"));
  obj.sort((a, b) => new Date(b.date) - new Date(a.date));
}
