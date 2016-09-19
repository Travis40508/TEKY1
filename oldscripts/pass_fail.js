var score = Math.floor(Math.random() * (50 - 25) + 25);
var percentage = ((score - 25) * 100) / (50 - 25);


if (percentage > 50) {
  console.log("congratulations! you scored a " + percentage + "!");
} else {
  console.log("study up and try again next time, you only scored a " + percentage + "...");
}