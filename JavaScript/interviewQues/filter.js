const products = [
    {
        product : 'noodles',
        price:150
    },
    {
        product : 'momos',
        price:''
    },
    {
        product : 'french-fries',
        price:120
    },
    {
        product : 'fried-rice',
        price:''
    },
    {
        product : 'noodles',
        price:250
    },
    {
        product : 'noodles',
        price:50
    },
];
   

// op : where the price is empty dont print those properties
const newProduct = products.filter((e)=>{
    if(e.price===''){
        return false;
    }else{
        return true;
    }
});
console.log(newProduct);

