# 🐛 Code Not Following ESLint Rules

Work with a partner to resolve the following issues:

* As a developer on a team, I want my team's codebase to follow uniform formatting and styling, using ESLint rules.

## Expected Behavior

The code in [Unsolved/example.js](Unsolved/example.js) should pass all tests and rules listed in [Unsolved/.eslintrc.json](Unsolved/.eslintrc.json), and it should not have red underlines.

## Actual Behavior

The code in [Unsolved/example.js](Unsolved/example.js) does not pass most rules listed in [Unsolved/.eslintrc.json](Unsolved/.eslintrc.json), and it does have red underlines.

## Steps to Reproduce the Problem

1. Install the [VS Code EsLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

2. From the command line, run `npm install` in the [Unsolved](./Unsolved) folder.

3. Open [Unsolved/example.js](Unsolved/example.js) in your code editor. You may see an ESLINT Icon that shows in red on the bottom bar to the far right of VS Code. If so, click on ESLINT, and a popup should appear. Click on allow anywhere. If you completed the previous steps correctly, you should see red annotations under different parts of the code. Hovering over each one displays a popover that lists an ESLint rule being broken.

    * Alternatively, you can run `npm run test` to get a list of code styling errors and where they occur.

---

## 💡 Hints

How can we better understand the rules in [Unsolved/.eslintrc.json](Unsolved/.eslintrc.json) using the [ESLint documentation on rules](https://eslint.org/docs/rules/)?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can we ensure that the code passes all ESLint checks before merging a GitHub pull request? 

Use [Google](https://www.google.com) or another search engine to research this.
