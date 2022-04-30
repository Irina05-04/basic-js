const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let str = "";
  let buff = [];
  let count = 0;
  if(Array.isArray(members)){
  for(let i = 0; i < members.length; i++){
  
    if(typeof(members[i]) == 'string'){
      buff.push(members[i].trim().toUpperCase().slice(0,1));
      count ++;
    }
  }
  if(count > 0){
    buff = buff.sort();
    for(let i = 0; i < buff.length; i++){
      str += buff[i];
  }
  }
}
  else{
  str = false;
  }

  return str;
}

module.exports = {
  createDreamTeam
};
