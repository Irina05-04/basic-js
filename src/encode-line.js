const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = str.slice("");
  let count = 1;
  let result = "";
  for(let i = 0; i < arr.length; i++){
    while(arr[i] == arr[i+1]){
      i++;
      count++;
    }
    if(count == 1){
      result += `${arr[i]}`;
    }
    else
    result += `${count}${arr[i]}`;
    count = 1;
  }
  return result;
}

module.exports = {
  encodeLine
};
