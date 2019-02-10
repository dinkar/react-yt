export const formatNumber = num => {
  return num
    .toString()
    .split('')
    .reverse()
    .reduce((acc, cur, idx) => {
      if (idx && idx % 3 === 0) {
        acc.push(',');
      }
      acc.push(cur);
      return acc;
    }, [])
    .reverse()
    .join('');
};
