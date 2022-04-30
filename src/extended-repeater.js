const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */


function repeater(str, options) {
  let buff = '';
  if( str != null){
  str = str.toString();
  }
  else str = 'null';
 if(!options){
  return str;
 }
 if(options.hasOwnProperty('addition')){
   //if(options.addition || options.addition.toString() == 'null'){
   if(options.additionRepeatTimes){
     if(!options.additionSeparator){
      str += options.addition;
     for(let i = 0; i < options.additionRepeatTimes - 1; i++){
       str += '|';
       str += options.addition;
     }
   }
   else{
     str += options.addition;
     for(let i = 0; i < options.additionRepeatTimes - 1; i++){
      str += options.additionSeparator;
      str += options.addition;
    }
   }
    }
  else str += options.addition;
  //}
  }
   if(options.repeatTimes){
     buff = str;
     if(!options.separator){
      for(let i = 0; i < options.repeatTimes - 1; i++){
        str += '+';
        str += buff;
      }
     }
     else{
       buff = str;
      for(let i = 0; i < options.repeatTimes - 1; i++){
        str += options.separator;
        str += buff;
      }
     }
   }
 
 return str;
}


module.exports = {
  repeater
};

