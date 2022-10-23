// to access each and every element ftoom the array we use foreach method in array 

var names = ['johny', 'depp', 'barton', 'nebula'];

names.forEach(function(elements,index){
    console.log(elements);                  // print only elements 
});


names.forEach(function(elements,index){
    console.log(index);                     // print only index
});


names.forEach(function(elements,index){
    console.log(elements,index);            // print elements and index both 
});