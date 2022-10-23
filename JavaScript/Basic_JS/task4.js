//WAF to Print all those object whose brand name is Apple
var products = [
    {
      brand: "Apple",
      price: 90000,
    },
    {
      brand: "Oppo",
      price: 50000,
    },
    {
      brand: "oneplus",
      price: 60000,
    },
    {
      brand: "Samsung",
      price: 90000,
    },
    {
      brand: "Apple",
      price: 50000,
    },
    {
      brand: "Apple",
      price: 60000,
    },
  ];
  
function appleBrand(){

    products.forEach(function(element, index){
        if(element.brand == "Apple"){
            console.log(element);
        }
    });
}

appleBrand();