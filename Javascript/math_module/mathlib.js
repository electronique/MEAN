module.exports = {
    
      add: function(num1, num2) { 
        console.log("the sum is:", num1 + num2);
      },
      multiply: function(num1, num2) {
        console.log("the result is:", num1 * num2);
      },
      square: function(num) {
        console.log("the result is:", Math.pow(num, 2));
      },
      random: function(num1, num2) {
        console.log("the result is:", Math.floor(Math.random()*35));

      }
  
  };