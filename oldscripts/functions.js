function numberTest (value) {
  if (value % 2 == 0 ) {
    console.log ("The number is even");
  } else if (value % 2 == 1) {
    console.log ("The number is odd");
  }
  
}

numberTest(22);

function smallerNum (num1, num2) {
  if (num1 < num2) {
    return num1;
  } else if (num2 < num1) {
    return num2;
  }
}

var smallest = smallerNum (5, 4);
console.log(smallest);



function list (x, x1, x2, x3) {
  var array = [];
  array.push(x, x1, x2, x3);
  var i = 0;
  for (var num in array) {
    i = (i + array[num]); 
  }
  k = i/array.length;
  console.log(k);
}

list(1, 2, 3, 4);


function reverse (kentucky) {
  
  var m = kentucky;
  var message = "";
  for(l = m.length - 1; l >= 0; l--) {
    message = message + m[l];
  }
  console.log(message);
}

reverse ("Kentucky");

