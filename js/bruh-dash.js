var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {

    return array.shift();

      
  },

  // returns the last element of an array
  last: function (array) {
    
    return array.pop();

  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, x) {

    return array.indexOf(x);

  

  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (array, x) {

    return array.lastIndexOf(x);



  },

  // returns an array with all elements except for the last element
  initial: function (array) {

    array.pop()
    return array;



  },
  
  // returns an array with all falsey values removed
  compact: function(array) {
    
    console.log(array.filter(Boolean));
    return array.filter(Boolean);
    },


  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, x) {

    var newArray = array.slice(x,array.length-1);
    return newArray;

  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, n){
    var newArray = [];
    if (n === 0){
      return array;
    } else if ((n === null) || (n === undefined) || (n === ' ')) {
      newArray = array.slice(1);
      return newArray;
    } else {
      newArray = array.slice(n)
      return newArray;
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, n) {
    var newArray = [];
    if(n === 0){
      return array;
    } else if((n === null) || (n === undefined) || (n === ' ')){
      array.pop();
      return array;
    } else {
      newArray = array.slice(0, (array.length - n));
      return newArray;
    }

  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, n) {
    var newArray = [];
    if(n === 0){
      return newArray;
    } else if((n === null) || (n === undefined) || (n === ' ')){
      newArray = array.slice(0,1);
      return newArray;
    } else{
      newArray = array.slice(0,n);
      return newArray;
    }

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (array, n) {
    var newArray = [];
    if(n === 0){
      return newArray;
    } else if ((n === 0) || (n === null) || (n === undefined)){
      newArray.push(array.pop());
      return newArray;
    } else{
      newArray = array.slice(-n);
      return newArray;
    }

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(array, value , start , end) {

    var newArray = array;

    
    for (var i = 0; i < newArray.length; i++){
      if((typeof start !== 'number') || (typeof end !== 'number')){
        newArray[i] = value;
      } else if(i >= start && i <= end-1){
        newArray[i] = value;
      } else{
        continue;
      }
    } return newArray;    

  },

  // removes all given values from an array
  pull: function (array, ...value) {

    for (var i = 0; i < value.length; i++){
      array.splice(array.indexOf(value[i]),1);
    }
    return array;

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (array, indexes) {
    var newArray = [];
    indexes.sort(function(a,b){return b-a});

    for(var i = 0; i < indexes.length; i++){
      newArray.push(...array.splice((indexes[i]),1));
    } newArray.sort(function(a,b){return a-b});
      return newArray;

  },

  // can also use using slice;

  // creates an array excluding all the specified values
  without: function(array, ...values) {
    var newArray = array;
    for(let i = 0; i < values.length; i++){
      newArray.splice(array.indexOf(values[i]),1);
    }
    return newArray;

  },

  // returns an array with specified values excluded
  difference: function(array, values) {
    var newArray = [];
    for(let i = 0; i < array.length; i++){
      if(array.indexOf(values[i]) !== -1){
        continue;
      } else{
        newArray.push(array[i]);
      }
    } return newArray;

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (...array) {
    let newArray = [];
    let pushArray = [];
    
    for (let x = 0; x < array[1].length; x++){
      pushArray = [];
      for(let i = 0; i < array.length; i++){
          pushArray.push(array[i][x]);
        } newArray.push(pushArray);
      }
      
      return newArray;
      

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (array) {
    let newArray = [];
    let unZip = [];
   
    for(let i = 0; i < array[1].length; i++){
      unZip = [];
      for (let x = 0; x < array.length; x++){
        unZip.push(array[x][i]);
      } newArray.push(unZip);
     
     
    } return newArray;

  },

  // creates an array of elements into groups of length of specified size
  // chunk: function (arr, counter){

  //   let newArr = [];

  //   for(let i = 0; i < arr.length; i += counter){
  //     console.log('hello');
  //   }

  // },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, func) {

    let valObj = Object.values(collection);
    let keyObj = Object.keys(collection)
  
   for(let i = 0; i < valObj.length; i++){
       let item = valObj[i];
       let key = keyObj[i];
       func(item,key);
   }
   

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(collection, func) {

    let newArr = [];
    let valObj = Object.values(collection);
    let keyObj = Object.keys(collection);

    for(let i = 0; i < valObj.length; i++){
      let item = valObj[i];
      let key = keyObj[i];
      newArr.push(func(item,key));
    }
      return newArr;
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(collection, x) {
    let newArr = [];
    for (let key2 in x){
     for(let key in collection){
      
     }
    }

  


  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
