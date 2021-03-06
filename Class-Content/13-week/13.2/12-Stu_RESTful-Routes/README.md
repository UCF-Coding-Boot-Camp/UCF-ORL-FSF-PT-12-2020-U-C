# 🐛 Routes Return 200 Status Code Every Time

Work with a partner to resolve the following issues:

* As a developer, I want to see proper HTTP status codes returned so that I can be aware of any errors.

* As a developer, I want to use `try...catch` to properly catch errors when using `async` and `await`.

## Expected Behavior

* When there is no error with the request, the 200 status code is returned.

* When there is an internal server error, the 500 status code is returned.

* When a user does not exist in the database, the 404 status code is returned along with the following message:

  {
    "message": "No user with this id!"
  }

## Actual Behavior

* Whether there is an error with the request or if the user does not exist in the database, the 200 status code is returned.

## Steps to Reproduce the Problem

1. Run `npm start` in your command line to start the server.

2. Open Insomnia Core and make a GET request to `api/users/10`.

3. The 200 status code is returned.

---

## 💡 Hints

How do we return HTTP status codes?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What are some other common HTTP status codes?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved. 