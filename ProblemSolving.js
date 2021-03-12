function numGardens(arr) {
  let row = arr.length;
  let col = arr[0].length;

  let count = 0;
  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      if (arr[i][j] == 0) {
        if (findingNoHope(i, j, row, col, arr)) count++;
      }
    }
  }
  return count;
}

function findingNoHope(i, j, row, col, arr) {
  if (i < 0 || i >= row || j < 0 || j >= col) return false;
  if (arr[i][j] == 1) return true;

  arr[i][j] = 1;

  if (
    findingNoHope(i - 1, j, row, col, arr) &&
    findingNoHope(i + 1, j, row, col, arr) &&
    findingNoHope(i, j - 1, row, col, arr) &&
    findingNoHope(i, j + 1, row, col, arr)
  ) {
    return true;
  } else {
    arr[i][j] = 0;
    return false;
  }
}
