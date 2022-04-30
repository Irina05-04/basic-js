const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let amount = n.toString().length;
  let max = 0, buff = 0;
  for(let i = 0; i < amount; i++){
    buff = parseInt(n/Math.pow(10,(i+1)))*Math.pow(10,i) + parseInt(n % Math.pow(10,i));
    if(buff > max){
      max = buff;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
