# 🐛 Users Route Is Missing Data

Work with a partner to resolve the following issues:

* As a user, I want to see the books I own and a count of how many of those are short novels.

## Expected Behavior

When a request is made for user data, the response includes a `shortBooks` property that counts the books with between 100 and 300 pages.

## Actual Behavior

The user data in the response does not include a `shortBooks` property.

## Steps to Reproduce the Problem

1. Run `node seeds.js` from the command line to seed the database.

2. Run `npm start` to start the server.

3. In Insomnia Core, make a GET request to `/api/readers/1`.

4. Note that the response data does not include a `shortBooks` property.

---

## 💡 Hints

How could you obtain this short novel count using a regular SQL query?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How would you build a many-to-many relationship using Sequelize?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.