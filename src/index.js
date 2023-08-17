module.exports = function towelSort (matrix) {
  let result;
  if(matrix === undefined) {
    result = [];
  } else {
  result = matrix.reduce((acc, cur, i) => {
    return acc.concat((!(i % 2) ? cur : cur.reverse()));
  }, []);
}
  return result
}