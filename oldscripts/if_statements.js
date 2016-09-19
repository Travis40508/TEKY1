var bankAccount = 5000;
var debt = 6000;
var difference = bankAccount - debt;

if (difference > 0) {
  console.log("Geez, Money Bags...")
} else {
  console.log("Time to hit the cheese line...")
}

var chromeBook = true;
var macBook = false;

if (chromeBook && macBook) {
  console.log("You have both?!")
} else {
  console.log("Eh, who needs two, anyway?")
}

if (chromeBook || macBook) {
  console.log("Eh, one is good enough")
} else {
  console.log("That's ok! Exercise is a good thing!")
}