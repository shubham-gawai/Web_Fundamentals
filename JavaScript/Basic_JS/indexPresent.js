// using indexof can we find a certain element is present inside array or not 

var arr = ["Apple", "Oppo", "Micromax", "Lava", "Canvas"];
var i;
function elementCheck(elementName){

/* var status = arr.indexOf(elementName)
     
         if( status == -1){
             console.log(elementName, "does not exist in array");
         }
         else{
             console.log(elementName, "is present in the array");
     }
*/

        
    var status = arr.includes(elementName)
     
        if( status == false){
            console.log(elementName, "does not exist in array");
        }
        else{
            console.log(elementName, "is present in the array");
        }
    
    }
    elementCheck("Apple");
    elementCheck("Skoe");
    elementCheck("Oppo");
    elementCheck("Bloomer");

