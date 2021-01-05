var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  // Prevent default action
  event.preventDefault();
  // Store tip and total calculations in variables
  var tipPercentage = tipEl.value * .01;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  // Update HTML with tip and total
  document.querySelector("#tip-amount").textContent = tipAmount;
  // Use toFixed() to limit to two decimal places
  document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}

// Add listener to submit element
submitEl.addEventListener("click", addTip);
