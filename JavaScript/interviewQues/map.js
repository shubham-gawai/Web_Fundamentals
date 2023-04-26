const products = [
    {
        product : 'noodles',
        price:150
    },
    {
        product : 'momos',
        price:165
    },
    {
        product : 'french-fries',
        price:120
    },
    {
        product : 'fried-rice',
        price:110
    },
    {
        product : 'burger',
        price:250
    },

];
   

// op : add 50 to all prices 
const newProduct = products.map((ele)=>{
    return ele.price+50
});
console.log(newProduct);


