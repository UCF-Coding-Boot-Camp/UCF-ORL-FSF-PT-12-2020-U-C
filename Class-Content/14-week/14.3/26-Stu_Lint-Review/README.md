# 🐛 Fix Project's ESLint Rules

Work with a partner to resolve the following issues:

* As a developer, I don't want to see warnings when I use the `**` exponentiation operator.

* As a developer, I want to discourage other team members from explicitly assigning variables to `undefined`.

## Expected Behavior

* The project's ESLint rules allow the use of `**` operators. 

* ESLint displays an error when variables are assigned to `undefined`. For example, `let x = undefined;` is unnecessary, because `let x;` on its own is sufficient.

## Actual Behavior

* ESLint displays an error when developers use `**` operators. For example, `let x = 5 ** 2;`.

* Developers can assign variables to `undefined` without any warning from ESLint.

## Steps to Reproduce the Problem

1. Run `npm install` to install the ESLint dependencies.

2. Open `index.js` in VS Code.

3. Note the underlined error on line 6.

---

## 💡 Hints

How do you adjust the rules for an ESLint configuration? And in which version of JavaScript were `**` exponentiation operators introduced?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What other options can you add to your ESLint config file?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
