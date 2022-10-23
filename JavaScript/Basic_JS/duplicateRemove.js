
var arr = [10,20,30,10,50,90,90,100,20,30,40,20,40,10,100,10];

for(var i=0; i<arr.length; i++){
    if(arr[i]==arr[i+1]){
        console.log(arr[i]);
    }
}