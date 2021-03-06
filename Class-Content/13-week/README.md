# Unit 13: Object-Relational Mapping (ORM)

## Overview:

A database is essential to any application that collects data. Larger applications typically collect more data&mdash;making data management more complex. For example, we might have to compare data across databases, migrate an app's existing database, or even use various types of databases. **Object-relational mapping (ORM)** makes these tasks more manageable by helping us to interact with databases using JavaScript.

We can choose from many ORM tools, but for this unit we will use Sequelize. A popular JavaScript ORM that uses object-oriented programming, Sequelize enables us to communicate with Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server using Node.js. It also helps make relationships between the data easier to recognize and leverage. Thus, we can see how the data interacts much better than we could with plain SQL.

## Key Topics

The following topics will be covered in this unit:

* [Sequelize](https://sequelize.org/master/)

  * [Models](https://sequelize.org/master/manual/model-basics.html)

  * [Data types](https://sequelize.org/master/manual/model-basics.html#data-types)
  
  * [Associations](https://sequelize.org/master/manual/assocs.html)

  * [Model querying](https://sequelize.org/master/manual/model-querying-basics.html)

  * [Method instances](https://sequelize.org/master/manual/model-basics.html#taking-advantage-of-models-being-classes)

  * [Validation and constraints](https://sequelize.org/master/manual/validations-and-constraints.html)

* [dotenv](https://www.npmjs.com/package/dotenv)

* [async and await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

* [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

* [RESTful routes](https://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_web_services)

* [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

* [bcrypt](https://www.npmjs.com/package/bcrypt)

* [ESLint](https://eslint.org/docs/user-guide/configuring)

## Learning Objectives

You will be employer-ready if you are able to:

* Connect to a database using Sequelize and environment variables.

* Create and configure a Sequelize model.

* Perform CRUD operations with Sequelize methods.

* Write a script to seed a database with initial data.

* Convert asynchronous code to synchronous code using `async` and `await`.

* Catch errors using `try...catch`.

* Ensure that HTTP requests respond with the correct status code.

* Use validation tools on a Sequelize model.

* Encrypt a password using `bcrypt`.

* Automate functionality using Sequelize Hooks.

* Create and run a custom method on a Sequelize instance.

* Implement and know when to use different Sequelize associations for one-to-one, one-to-many, and many-to-many relationships.

* Perform subqueries using a combination of Sequelize methods and plain SQL syntax.

* Enforce code styling for an application using ESLint.

* Deploy an application with a MySQL database to Heroku.

## Technical Interview Preparation

You will be employer-competitive if you are able to solve the following algorithms and successfully complete the assessments.

### Algorithms

Practicing algorithm-based interview questions is one of the best ways to prepare for interviews. Watch the `📹 Let's Code` video(s) for tips and tricks on how to solve the algorithm.

* [01: Double Triple Map](./03-Algorithms/01-double-triple-map)

  * 📹 [Let's Code Double Triple Map!](https://2u-20.wistia.com/medias/pz1ugrv0yu)

* [02: Array Intersection](./03-Algorithms/02-array-intersection)

* [03: Squares of a Sorted Array](./03-Algorithms/03-squares-of-a-sorted-array)

### Assessments

Assess your knowledge by answering technical interview questions and solving coding challenges.

* [Unit 13 Technical Interview Preparation](https://forms.gle/xH18Tn3PwctkCUBi9)

## Homework

In the homework for this unit, you will create an e-commerce back end. You will be given a working Express.js API that you will have to configure using Sequelize. Once finished, you should be able to connect to the database, and you should have functioning CRUD commands.

## Career Connection

Career Services material for this unit is located in the [Career Connection folder](./04-Career-Connection/README.md). For more information about Career Services, including coding milestones, demo days, technical toolkits, workshops, and additional resources, visit the [Career Services website](https://mycareerspot.org/).

## Heads-Up

In the next unit, we will return to full-stack development and explore an architecture called Model-View-Controller (MVC). We will also cover a templating engine called Handlebars.js. Finally, we will touch on front-end authentication.

## Resources

Here are some additional resources to help solidify the topics covered in this unit.

### Git Guide

Refer to the Git Guide to review the git concept for this unit. Watch the `📹 Git Guide` video for an additional walkthrough of the git concept.

  * 📖 [Git Guide: ESLint](./01-Activities/27-Evr_Eslint)

  * 📹 [Git Guide Video: ESLint](https://2u-20.wistia.com/medias/8enml3wuio)

### Full-Stack Blog Posts

Check out the [Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/) for additional resources, like walkthroughs, articles, and installation guides.

  * 📖 [Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
