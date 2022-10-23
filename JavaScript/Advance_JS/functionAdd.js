//  ways of funtion call : we can call the function many times as we want : 

/*  1. first passing the arguments in the function call directly */

   function addFirst(x,y){
   
      console.log(x+y);
   }
   addFirst(10,60);
   addFirst(30,20);


/*  2. second one is to call the function direcetly with no arguments but the parameters will be passed in the body : */
   function add(x,y){
      var x = 12;
      var y = 14;
      console.log(x+y);
   }
   add();
   add();


/*  3. to call multiple operations intitialize the arguments into variables */
   function addNum(num1, num2){
      var x = num1;
      var y = num2;
      console.log(x+y);
   }
   addNum(20,10);
   addNum(100,100);
   addNum(200,200);
 