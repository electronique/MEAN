var test = '1,3,4,5,6';

//to remove number
function removeNum(string, val){
   var arr = string.split(',');
   for(var i in arr){
      if(arr[i] == val){
         arr.splice(i, 1);
         i--;
      }
  }            
 return arr.join(',');
}

var str = removeNum(test,3);  
console.log(str);  
 // output 1,4,5,6