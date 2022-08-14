let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

const gridRow = (grid, rowNum) => {
  const rowNumber = rowNum - 1;
  const resultRow = grid[rowNumber];
  return resultRow;
}

const gridColumn = (grid, colNum) => {
  const resultCol = [];
  for (let i = 0; i < grid.length; i++) {    
    const row = grid[i];
    const columnNum = row[colNum - 1];
    resultCol.push(columnNum);
  }
  return resultCol;
}


const gridSection = (grid, x, y) => {
  let resultSec = [];
  for (let i = y * 3; i <= y * 3 + 2; i++) {
    for (let j = x * 3; j <= x * 3 + 2; j++) {
      resultSec.push(grid[i][j]);
    }
  }
  return resultSec;
}


const includes1to9 = (arr) => {
  for (let num = 1; num <= 9; num++) {
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}

function sudokuIsValid(puzzle) {
  for (let i = 0; i < 9; i++) {
    if (!includes1to9(gridRow(puzzle, i+1)) || !includes1to9(gridColumn(puzzle, i+1))) {
      return false;
    }
  }
  for (let x = 0; x <= 2; x++) {
    for (let y = 0; y <= 2; y++) {
      if (!includes1to9(gridSection(puzzle, x % 3, y % 3))) {
        return false;
      }
    }  
  }
  return true;
}