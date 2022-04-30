const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let rows = matrix.length;
  let column = matrix[0].length;
  let buff = [];
  let result = [];
  for(let i = 0; i < rows; i++){
    result[i] = [];
  }
  for(let i = 0; i < column + 2; i++){
    buff[i] = [];
  }
  for(let i = 0; i < column + 2; i++){
    buff[0][i] = buff[rows + 1][i] = false;
  }
  for(let i = 0; i < rows + 2; i++){
    buff[i][0] = buff[i][column + 1] = false;
  }
  for(let i = 1; i < rows + 1; i++){
    for(let j = 1; j < column + 1; j++){
      buff[i][j] = matrix[i-1][j-1];
    }
  }
  for(let i = 1; i < rows + 1; i++){
    for(let j = 1; j < column + 1; j++){
      let count  = 0;
      if(buff[i-1][j-1] == true) count++;
      if(buff[i-1][j] == true) count++;
      if(buff[i-1][j+1] == true) count++;
      if(buff[i][j+1] == true) count++;
      if(buff[i+1][j+1] == true) count++;
      if(buff[i+1][j] == true) count++;
      if(buff[i+1][j-1] == true) count++;
      if(buff[i][j-1] == true) count++;
      result[i-1][j-1] = count;
    }
  }
return result;  

}

module.exports = {
  minesweeper
};
