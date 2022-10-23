
var arr = ["Apple", "Oppo", "Micromax", "Lava", "Canvas"];

for(var i=0; i<arr.length; i++){
    console.log("Brand" + " " +arr[i]);
}


arr.forEach(function(element,index) {
    console.log(index, element);
});

arr.forEach(function(element,index) {
    console.log(element+" Brand");
});