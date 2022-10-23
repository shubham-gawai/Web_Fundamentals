// calling the function inside an Object : 

var obj = {
    name : 'Shubham',
    getCity : function (){
        console.log('Delhi');
    },
    marks : [90,87,78,96]
}

obj.getCity();              // acces the function data using key

console.log(obj.name);      // acces the regular data in the key 

console.log(obj.marks[3]);  // access the data from an array contain by object 