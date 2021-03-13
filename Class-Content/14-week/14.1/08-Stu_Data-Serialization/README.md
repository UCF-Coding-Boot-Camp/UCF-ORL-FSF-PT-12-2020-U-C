# 🐛 Main View Is Not Displaying Food Items 

Work with a partner to resolve the following issues:

* As a party guest, I would like to view a full menu of food items that other guests will bring to the party.

## Expected Behavior

* When a party guest views the page, they see a menu of food items.

## Actual Behavior

* When a party guest views the page, no food items appear on the menu.

## Steps to Reproduce the Problem

1. Run `npm install`. 

2. Confirm that the MySQL server is turned on.

3. Run `CREATE DATABASE dish_db;` to create a new database.

4. Return to your console and run `node seeds/index.js` to seed the database.

5. Run `npm start`.

6. Navigate to http://localhost:3001/ in your browser.

## Assets

The following image demonstrates the web application's appearance and functionality:

![The "Potluck Party!" webpage displays a list of dishes and the name of the guest who will bring each one.](images/Full-Menu.png)

---

## 💡 Hints

How can you change your route so that the View will display the menu?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How else could you serialize data down to the properties that you need? 

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.