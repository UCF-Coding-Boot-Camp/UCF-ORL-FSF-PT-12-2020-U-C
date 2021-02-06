// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
  var charMap = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char in charMap) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
};
