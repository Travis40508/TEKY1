//Arrays

var agesInClass = [31, 38, 39, 45, 23, 71];

console.log("I dread whenever I am the age of " + agesInClass[5]);

for (i = 0; i <=10; i++) {
  console.log("Number: " + i);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < numbers.length; i++) {
  console.log("Number: " + numbers[i]);
}

var empty = 0;  //adds all of the numbers in the array together. MAKE SURE you call it within the index instead of just adding it.
for (var x in numbers) {
  empty = empty + numbers[x];
}
console.log(empty);

var i = 0;
while (i < 100) {
  i = i + 1;
  console.log(i);
}

for (i = 0; i <=50; i++) {
  if (i == 45) {
    console.log("man, it's been a short week");
  } else {
    console.log(i);
  }
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

for (var num in array) {
  total = total + array[num];
}
console.log(total);

for (i = 0; i < array.length; i++) {
  total = total + array[i];
}
console.log(total);