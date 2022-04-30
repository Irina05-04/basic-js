const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let result = {};
  let buff = '';
  for(let i = 0; i < domains.length; i++){
    let str = '.' + domains[i];
    domains[i] = str;
  }
  for(let i = 0; i < domains.length; i++){
    let count = 1;
    while(domains[i].length > 0){
      if(domains[i].includes('.')){
      let index = domains[i].lastIndexOf('.');
      var element = domains[i].slice(index, (domains[i].length));
      domains[i] = domains[i].slice(0,index);
      for(let j = 1; j < domains.length; j++){
      if(domains[j].includes(element.toString())){
      let indexElement = domains[j].lastIndexOf(`${element}`);
      domains[j] = domains[j].slice(0,indexElement);
      count++;
    }
  }
  }
  buff += element;
  result[buff.toString()] = count;
  count = 1;
}
  }
  return result;
}

module.exports = {
  getDNSStats
};
