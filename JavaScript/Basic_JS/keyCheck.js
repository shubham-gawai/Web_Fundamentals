/*      Write a function so that it returns true if the age of all the key(Alan,Jeff etc.)
        is greater than 18 and returns false if it does not.
*/
 
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};
 
let temp = [];
let val = Object.values(users);

let bol = val.filter((el)=>
{
    if(el.age>18){
        temp.push(true);
    }else {
        temp.push(false);
    }
    
})

if(temp.includes(false)){
   console.log(false);
}else {
    console.log(true);
}
