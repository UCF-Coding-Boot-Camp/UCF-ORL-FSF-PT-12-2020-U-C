const checkNumber = (num) => {
  if (!isNaN(num)) {
    console.log("Not a number!");
  }
  else if (num < 0) {
    console.log("Please provide a positive number.");
  }
  else if (num >= 1000) {
    console.log("This number is too big.");
  }
  else {
    console.log("Thank you!");
  }
};

checkNumber(12);
