const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  n = n.split('-');
  if (n.length != 6) return false;
  for(const el of n){
    if((el.slice(0,1) >= 0 && el.slice(0,1) <= 9) || (el.slice(0,1) >= 'A' && el.slice(0,1) <= 'F')){
      if((el.slice(1,1) >= 0 && el.slice(1,1) <= 9) || (el.slice(1,1) >= 'A' && el.slice(1,1) <= 'F')){
        return true;
      }
      else return false;
    }
    else return false;
    }
}
module.exports = {
  isMAC48Address
};
