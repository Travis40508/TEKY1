for (var i = 10; i >= 1; i--) {
  console.log("Lift off in " + i);
}

for (var x = 1; x <= 3; x++) {
  console.log("Have a Great Day");
} 



for (var x = 100; x >= 0; x = x - 10) {
  console.log(x);
}

for (var x = 100; x >= 0; x = x - 5) {
  console.log(x);
}

var score = 0;
while (score < 10) { //adds before printing as well.
  score++;
  console.log("Score: " + score);
}

var score = 0; //this one adds before printing, as long as the requirement is set.
do {
  score++;
  console.log(score);
} while(score < 10);

for (i = 0; i <= 100; i = i + 25) {
  if (i == 50) {
    console.log("Halfway There!");
  } else {
    console.log(i);
  }
}

var x = "funnel cakes must go";
for (var y = 0; y < x.length; y++) {
  console.log(x[y]);
} 

for (var letter in x) {  //very handy for arrays.
  console.log(x[letter]);
}