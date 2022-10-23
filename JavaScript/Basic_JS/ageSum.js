// Write a function using reduce on the arr array to return the sum of all the arr's ages.


const arr= [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'sam', age: 10 }
];


const temp = [];

arr.forEach(function(name){
    temp.push(name.age);
});

var newValue = temp.reduce(function (initialValue, element) {
   
  return initialValue + element;
});

console.log(newValue);



