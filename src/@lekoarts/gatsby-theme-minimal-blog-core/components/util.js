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

export function mergeTagsAddCount(arr1, arr2) {
  const combined = [...arr1, ...arr2];

  const reducer = (acc, cur) => {
    if (cur.fieldValue in acc) {
      acc[cur.fieldValue] += cur.totalCount;
    } else {
      acc[cur.fieldValue] = cur.totalCount;
    }
    return acc;
  };

  const tagWithCount = combined.reduce(reducer, {});

  // Sort all tags in alphabetical order from A to Z
  return Object.entries(tagWithCount)
    .sort()
    .reduce((acc, tag) => {
      acc.push({ fieldValue: tag[0], totalCount: tag[1] });
      return acc;
    }, []);
}
