# Concert Flyer

In this activity you will be writing code to create a function that takes in two strings: a concert flyer and a magazine. You will be checking if the words in the concert flyer could have been clipped from the magazine, e.g. if every instance of each word in the second string is found in the first string, return `true`, else return `false`.

## Instructions

* Open [Unsolved/concert-flyer.js](Unsolved/concert-flyer.js) in your code editor&mdash;this is the only file you will modify in this activity.

  * In this file you will be writing code in the body of the `concertFlyer` function to achieve the following:

    * If every instance of each word in the second string is found in the first string, return `true`, else return `false`.

    * See the following strings for an example:

      ```js
      var magazine = 'hello world';
      var flyer = 'hello';
      ```

    * Given the preceding strings, the following should be returned:

      ```js
      true;
      ```

    * For another example, see the following strings:

      ```js
      var magazine = 'Whats so amazing that keeps us stargazing';
      var flyer = 'stargazing whats keeps us so amazing';
      ```

    * Given the preceding strings, and because the word "Whats" is capitalized differently in each string, the following should be returned:

      ```js
      false;
      ```

    * Assume that neither string will be empty and that you won't need to deal with punctuation, but you will need to worry about capitalization.

* You can check whether your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that pass the tests will be denoted with a green check mark.

  * Functions that fail the tests will be denoted with a red X and an error message.


---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.