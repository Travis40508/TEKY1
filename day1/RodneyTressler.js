// Rodney "Travis" Tressler, TA - Matthew Watson, 09/17/16


//Problem 1
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
for (i = 0; i <= numArray.length -1; i++) {
  if (numArray[i] == 27) {
    var location1 = i + 1; // I realize it's technically at position [5], but for plain english purposes I'm adding 1.
  }
  
}

console.log("the number 27 is in the " +location1 + "th position!"); //prints out stored variable result for confirmation.


//Problem 2
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
var total = 0;

for (var num in numArray) {
  total = total + numArray[num];
}

console.log(total);


//Problem 3
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.pop;
console.log(array);



//Problem 4
function sumFunc(num1, num2) {
  var sum = num1 + num2;
  if (sum <= 25) {
    return true;
  } else if (sum > 25) {
    return false;
  }

}

//Problem 5
function sumString(string1, string2) {
  var sum = string1 + string2;
  if (sum.length > 12) {
    return("Error, string too long");
  } else {
    return(sum);
  }
}


//Problem 6
var num = 0;
while (num < 20) {
  num++;
  if (num <= 5) {
    console.log(num + " - Very Low Number");
  } else if (num <= 10) {
    console.log(num + " - Low Number");
  } else if (num <= 15) {
    console.log(num + " - High Number");
  } else {
    console.log(num + " - Very High Number");
  }
}
