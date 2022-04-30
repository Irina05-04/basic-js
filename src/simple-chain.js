const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 function isInteger(num) {
  return (num ^ 0) === num;
}

const chainMaker = {
  str: '',
  arr: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    this.str += `( ${value} )~~`;
    //return this.str;
    this.arr.push(value);

    return this;

  },
  removeLink(position) {
    if(!isInteger(position) || !((parseInt(position) >= 0 || parseInt(position) <= 0)) || this.arr[position - 1] == undefined){
      this.arr = [];
      this.str = '';
      var e = new Error('You can\'t remove incorrect link!');
      throw e;
      
    }
    
    var re = this.arr[position - 1];
    this.str = this.str.replace(re, '');
    var re2 = /\(\s\s\)~~/gi;
    this.str = this.str.replace(re2, '');
    this.arr = this.arr.filter(el => el != re);
    return this;
  },
  reverseChain() {
    this.str = '';
    this.arr = this.arr.reverse();
    for(let i = 0; i < this.arr.length; i++){
      this.str += `( ${this.arr[i]} )~~`;
    }
    return this;
  },
  finishChain() {
    let index = this.str.lastIndexOf('~~');
    this.str = this.str.slice(0,index);
    this.arr = [];
    return this.str;
  }
};

module.exports = {
  chainMaker
};
