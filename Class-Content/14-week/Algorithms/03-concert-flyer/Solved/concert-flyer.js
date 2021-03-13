// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
  var magazineWords = magazine.split(' ');
  var flyerWords = flyer.split(' ');

  var magazineMap = {};
  var flyerMap = {};

  for (var i = 0; i < magazineWords.length; i++) {
    var word = magazineWords[i];
    if (!magazineMap[word]) {
      magazineMap[word] = 1;
    } else {
      magazineMap[word]++;
    }
  }

  for (var i = 0; i < flyerWords.length; i++) {
    var word = flyerWords[i];
    if (!flyerMap[word]) {
      flyerMap[word] = 1;
    } else {
      flyerMap[word]++;
    }
  }

  for (var key in flyerMap) {
    if (magazineMap[key] !== flyerMap[key]) {
      return false;
    }
  }

  return true;
};
