function isPalindrome(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("noon"));
console.log(isPalindrome("horse"));
console.log(isPalindrome("racecar"));

function isAlsoPalindrome(str) {
    return str.split("").reverse().join("") === str;
};

console.log("===================")
console.log(isAlsoPalindrome("noon"));
console.log(isAlsoPalindrome("horse"));
console.log(isAlsoPalindrome("racecar"));