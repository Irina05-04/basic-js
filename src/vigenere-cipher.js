const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 let alfabet  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
 const COUNT_LETTER = 26;
 
 class VigenereCipheringMachine {
   result = '';
   constructor(value){
     if(value == false){
 
     }
     this.value = value;
   }
   encrypt(string, key) {
    this.result = '';

    if(string == undefined || key == undefined){
      var e = new Error('Incorrect arguments!');
      throw e;
    }
     string  = string.toUpperCase();
     key = key.toUpperCase();
     let stringLenght = string.length;
     let countRepeat = Math.ceil(stringLenght / key.length);
     key = key.repeat(countRepeat);
     for(let i = 0, j = 0; i < string.length, j < key.length; i++, j++){
       let letterStr = string.slice(i, i+1);
       let letterKey = key.slice(j,j+1);
       if(alfabet.includes(letterStr)){
         let letterEncrypt = (alfabet.indexOf(letterStr) + alfabet.indexOf(letterKey)) % COUNT_LETTER;
         this.result += alfabet[letterEncrypt];
       }
       else{
         this.result += letterStr;
         j = j-1;
       }
       if(i == (string.length - 1)){break;}
     }
     if(this.value == false){
       let buff = this.result;
       this.result = '';
       for(let i = buff.length; i > 0; i--){
         let letterStr = buff.slice(i-1, i);
         this.result += letterStr;
       }
     }
     return this.result;
     
   }
   decrypt(string, key) {
    this.result = '';

    if(string == undefined || key == undefined){
      var e = new Error('Incorrect arguments!');
      throw e;
    }
     this.result = "";
     string  = string.toUpperCase();
     key = key.toUpperCase();
     let stringLenght = string.length;
     let countRepeat = Math.ceil(stringLenght / key.length);
     key = key.repeat(countRepeat);
     for(let i = 0, j = 0; i < string.length, j < key.length; i++, j++){
       let letterStr = string.slice(i, i+1);
       let letterKey = key.slice(j,j+1);
       if(alfabet.includes(letterStr)){
         let letterEncrypt = alfabet.indexOf(letterStr) - alfabet.indexOf(letterKey);
         if(letterEncrypt < 0) letterEncrypt = letterEncrypt + COUNT_LETTER;
         this.result += alfabet[letterEncrypt];
       }
       else{
         this.result += letterStr;
         j = j-1;
       }
       if(i == (string.length - 1)){break;}
     }
     if(this.value == false){
       let buff = this.result;
       this.result = '';
       for(let i = buff.length; i > 0; i--){
         let letterStr = buff.slice(i-1, i);
         this.result += letterStr;
       }
     }
     return this.result;
   }
 }

module.exports = {
  VigenereCipheringMachine
};
