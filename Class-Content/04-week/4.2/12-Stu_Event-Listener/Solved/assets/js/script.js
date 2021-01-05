var count = 0;
//  Select increment and decrement button elements
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// Updates count on page
function setCounterText() {
  countEl.textContent = count;
}
// Attach event listener to increment button element
incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
});

// Attach event listener to decrement button element
decrementEl.addEventListener("click", function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});
