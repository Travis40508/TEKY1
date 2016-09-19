var studentScore = 90;

if (studentScore >= 90) {
  console.log("Congratulations! You've gotten an A!");
} else if(studentScore >= 80) {
  console.log("Sweet, keep it up! You've gotten a B!");
} else if(studentScore >= 70) {
  console.log("A C is Average... you can do better...");
} else if(studentScore >= 60) {
  console.log("A D?! You can do better than that!!");
} else {
  console.log("You Failed... make sure you study next time...");
}

var timesWeBeatPatriotsLastSeason = 0;
var timesTheyBeatUs = 2;

if (timesWeBeatPatriotsLastSeason > timesTheyBeatUs) {
	console.log("We are just better at football.");
} else if (timesTheyBeatUs > timesWeBeatPatriotsLastSeason) {
	console.log("Yea, well Andrew Luck was hurt.");
} else if (timesWeBeatPatriotsLastSeason == timesTheyBeatUs) {
	console.log("They were really lucky.");
} else {
	console.log("Patriots just cheat.");
}