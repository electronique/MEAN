
function magic_multiply(x,y){
  let multiply= [];
  if(x.constructor === Array){
    for(let i =0; i<3; i++){
      multiply.splice(x[i],0,x[i]*y);
    }
    return multiply;
  }
  if(y.constructor != Number){
    let varText = "cannot multiply by string";
    return varText;
  }
  if(x.constructor === String){
    let name = x;
    let name2 = name.concat(x);
    let name3 = name2.concat(name2);
    return name3;
  }
    
  else {
   let multi2 = x * y;
   return multi2;
  }
  
}
let test1 = magic_multiply(5,2);
console.log(test1);

let test2 = magic_multiply(0, 0);
console.log(test2);

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

let test4 = magic_multiply(7, "three");
console.log(test4);
// "Error: Can not multiply by string"
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
 //=> "BrendoBrendoBrendoBrendo"