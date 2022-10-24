function largestOfFour(arr) {

    var arrMax = [];
  
    for (var i = 0; i < arr.length; i++) {
  
      var max = 0;
  
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > max) {
          max = arr[i][j];
        }
        else if(arr[i][j] < max){
          max = arr[i][j];
        }
        
      }
  
      arrMax.push(max);
    }
  
    return arrMax;
  
  }
  
  var res = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
  console.log(res);
  
  // this code doesn't run for the elements less than 0 : optimize it 