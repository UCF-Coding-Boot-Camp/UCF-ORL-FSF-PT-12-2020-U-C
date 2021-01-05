var eventType = document.querySelector("#event-type"); 
var keyEventsEl = document.querySelector("#key-events");

function keydownAction(event) {
  // The key property holds the value of the key press
  var keyPress = event.key;
  // The code property holds the key's code 
  var keyCode = event.code;
  // Updates content on page
  document.querySelector("#key").textContent = keyPress;
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyupAction() {
  // Updates event to KEYUP Event when key is released
  document.querySelector("#status").innerHTML = "KEYUP Event";
}
// Adds listener for keydown event
document.addEventListener("keydown", keydownAction);
// Adds listener for keyup event
document.addEventListener("keyup", keyupAction);
