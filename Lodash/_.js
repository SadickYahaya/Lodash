const _ = {
    // _.clamp() METHOD
    clamp(number, lowerBound, upperBound){
      let lowerClampedValue = Math.max(number, lowerBound);
      let clampedValue = Math.min(lowerClampedValue, upperBound);
      return clampedValue;
    },
    
    //.inRange() METHOD
    inRange(number, startVal, endVal){
      if (typeof(endVal) === 'undefined'){
        startVal = endVal;
        start = 0;
        return true;
      }
       if (startVal > endVal){
        let tempVal = endVal;
        endVal = startVal;
        startVal = tempVal;
      } 
      let isInRange;
      if (startVal <= number && number < endVal){
        isInRange = true;
      } else {
        isInRange = false;
      }
      return isInRange;
    },
    
    //.words() METHOD
    words(string){
        let words = string.split(' ')
        return words;
      },

    //.pad() METHOD
    pad(string, length){
      if (length <= string.length){
        return string;
      }
      const difference = length - string.length;
      let startPaddingLength = Math.floor(difference / 2);
      let endPaddingLength = difference - startPaddingLength;
      let paddedString = ' '.repeat(startPaddingLength) + string +  ' '.repeat(endPaddingLength);
      return paddedString;
    },
  
    //.has() METHOD
    has(object, key){
      let hasValue;
      if (!object.hasOwnProperty(key)){
        hasValue = false;
        return hasValue;
      } else { 
        hasValue = true;
        return hasValue;
      }
    },
    
    //.invert METHOD
    invert(object){
      let invertedObj = {};
      for (let key in object){
        let originalValue = object[key];
        invertedObj[originalValue] = key;
      }
      return invertedObj;
    },
  
    //.findKey METHOD
    findKey(object, predicate){
      for (let key in object){
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue === true){
          return key
        }
      }
      return undefined;
    },

    //.drop() METHOD
    drop(array, number){
      if (typeof(number) === 'undefined'){
        number = 1;
      }
      let droppedArray = array.slice(number);
      return droppedArray;
    },
  
    //.dropWhile METHOD
    dropWhile(array, predicate){
      let dropNumber = array.findIndex((element, index) => {
        return !predicate(element, index, array)
      });  
      let droppedArray = this.drop(array, dropNumber)
      return droppedArray;
    },
  
    //.chunk METHOD
    chunk(array, size){
      if(typeof(size) === "undefined"){
        size = 1
      }
      const arrayChunks = [];
      for (i = 0; i < array.length; i += size){
        let counter = 0;
        counter = counter + size;
        let arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk)
        // console.log(arrayChunks);
      }
      return arrayChunks;
    }
  
  };
  
  
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;