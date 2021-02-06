# 🐛 Fix Issue With Scoped Variable

Work with a partner to resolve the following issue(s):

* As a developer, I want my variables to be correctly scoped so that my functions work correctly.

## Expected Behavior

When a user runs the `addGreetingMessage` function, it should log the messages in the correct order inside the console.

```sh
Hello Tammy
How are you?
```
When a user runs the `calloutCounter` function, it should log the messages in the correct order inside the console.

```sh
5 Inside the loop
4 Inside the loop
3 Inside the loop
2 Inside the loop
1 Inside the loop
Outside of the loop
```

When a user runs the `countMatrix` function, it should log the entire matrix in the correct order inside the console.

```sh
1
2
3
4
5
6
7
8
9
```

## Actual Behavior

The current `addGreetingMessage` function logs:

```sh
Hello Tammy
Hello Tammy
```

The current `calloutCounter` function gives us an error when it is called.

The current `countMatrix` function logs:

```sh
1
2
3
```

## Steps to Reproduce the Problem

1. Navigate to the `Unsolved` folder from the command line.

2. Run `node index.js`.

3. Note the error that is printed.

## 💡 Hints

What does it mean when a variable is block scope?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is the difference between function scope and block scope?
  
Use [Google](https://www.google.com) or another search engine to research this.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.