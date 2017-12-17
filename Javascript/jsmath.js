/* Math 1
Write a function called zero_negativity(). 
This function should take an array. 
Return true if the input array contains no negative numbers, return false if it does.

Math 2
Write a function called is_even(). 
This function should take an number. 
Return true if the input number is even, return false if the number is odd.

Math 3
Write a function called how_many_even(). 
This function should take an array. 
Return the total number of elements in the array that are even. You may call is_even() to solve this.

Math 4
Write a function called create_dummy_array().
 This function should take a number n. 
 Return an array of random numbers between 0 and 9 with the length of n.

Math 5
Write a function called random_choice(). 
This function should take an array.
 Return a random element of the array, based on its length. 
 This function should never return undefined. */

 function zero_negativity(x){
    if(x.constructor === Array){
        console.log("true");
    }
   
    else{
        console.log('false');
    }
 }
 //zero_negativity([1,2,3]);



 function even(x){
     if(x.constructor === Array){
         for(let i=0;i<x.length; i++){
             if (x[i]%2 === 0 ){
                 console.log("True");
             }
             else if(x[i]%2 !== 0 ){
                 console.log('False');
             }
         }
     }
     else if(x.constructor !== Array){
         console.log("oops!!");
     }
 }
 //even([1,2,3]);
 //even("hi");

 function how_many_even(x){
     if(x.constructor === Array){
         let evencount = 0;
         for(let i=0;i<x.length;i++){
            if (x[i]%2 === 0 ){
                evencount= evencount +1;
            }
         }
         console.log(evencount);
  
     }
     

 }
 //how_many_even([1,2,3,4,5,6,8]);
 function create_dummy_array(x){
    let randNum= Math.floor(Math.random() * x);
    return randNum;
 }
 //let numbertest = create_dummy_array(4);
 //console.log(numbertest);

 /*Write a function called random_choice(). 
 This function should take an array.
  Return a random element of the array, based on its length. 
  This function should never return undefined. */
function random_choice(x){
        if(x.constructor === Array){
        let listlength = x.length
        let randNum= Math.floor(Math.random()*listlength);
        //console.log(randNum);
        return x[randNum];
        

}
}
let randtest = random_choice([9,2,3]);
console.log(randtest);