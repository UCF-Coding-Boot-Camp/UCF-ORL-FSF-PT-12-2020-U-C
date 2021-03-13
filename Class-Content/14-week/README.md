# Unit 14: Model-View-Controller (MVC)

## Overview

In this unit we'll modularize applications following the **Model-View-Controller (MVC)** paradigm. MVC is an architectural pattern that structures a codebase in three distinct sections, according to a software design philosophy known as the **separation of concerns**.  

Rather than hardcode the HTML for many, many pages, we can dynamically generate the HTML using a template engine. In implementing a template engine, we are separating the concern of client-side rendering from other aspects of the application. This is the **View** layer in the MVC framework. The template engine we will learn and implement in this unit is Handlebars.js.

The **Model** is the data layer of the application. It is concerned with the structure of the database and the logic used to retrieve that data. We'll implement Sequelize as the ORM for querying the database. 

Last but not least is the **Controller**. Think of it as the intermediary between the View and the Model. The Controller handles input from the user, interacts with the Model to create, read, update, or delete data, and then returns the results of that query to the user via the View layer. We are already familiar with these operations in Express.js apps, but now we'll separate the client-side and server-side routes from each other.

Also in this unit, we'll cover user authentication. We'll build on the password hashing we learned in the previous module and learn to authenticate application users by verifying their credentials. We'll then use sessions and cookies to keep users logged in and authorized to view the content of the app.

## Key Topics

The following topics will be covered in this unit:

* [Model-View-Controller](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

* [Sequelize model](https://sequelize.org/master/class/lib/model.js~Model.html)

* [Handlebars.js](https://www.npmjs.com/package/express-handlebars)

  * [Expressions](https://handlebarsjs.com/guide/expressions.html)

  * [Built-in helpers](https://handlebarsjs.com/guide/builtin-helpers.html)

  * [Partials](https://handlebarsjs.com/guide/partials.html#basic-partials)

  * [Custom helpers](https://www.npmjs.com/package/express-handlebars#helpers)

* Sessions and Cookies

  * [express-session](https://www.npmjs.com/package/express-session)

  * [connect-session-store using Sequelize](https://www.npmjs.com/package/connect-session-sequelize) 

  * [Express.js session cookie](https://github.com/expressjs/session#cookie)

* [Express.js middleware](https://expressjs.com/en/guide/using-middleware.html)

* [ESLint](https://eslint.org/docs/user-guide/configuring)

* [Prettier](https://prettier.io/docs/en/index.html)

## Learning Objectives

You will be employer-ready if you are able to:

* Render dynamic HTML using a template engine, like Handlebars.js.

* Explain and implement MVC modularization in a full-stack web application.

* Configure Heroku for deployment of an application using MySQL.

* Explain the interactions between the Model, View, and Controller.

* Explain separation of concerns and its benefits.

* Implement user authentication.

## Technical Interview Preparation

You will be employer-competitive if you are able to solve the following algorithms and successfully complete the assessments.

### Algorithms

Practicing algorithm-based interview questions is one of the best ways to prepare for interviews. Watch the `📹 Let's Code` video(s) for tips and tricks on how to solve the algorithm.

* [01: Common Element](./03-Algorithms/01-common-element)

* [02: Permutation Substring](./03-Algorithms/02-permutation-substring)

* [03: Concert Flyer](./03-Algorithms/03-concert-flyer)

  * 📹 [Let's Code Concert Flyer!](https://2u-20.wistia.com/medias/42ac9axtbq)

### Assessments

Assess your knowledge by answering technical interview questions and solving coding challenges.

* [Unit 14 Technical Interview Questions](https://forms.gle/ETRxZ6CtutAfpwpg6)

## Homework

For this unit's homework, you'll be building a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the `express-session` npm package for authentication.

## Career Connection

Career Services material for this unit is located in the [Career Connection folder](./04-Career-Connection/README.md). For more information about Career Services, including coding milestones, demo days, technical toolkits, workshops, and additional resources, visit the [Career Services website](https://mycareerspot.org/).

## Heads-Up

Next week, you'll start working on your second group project! In the next class, you'll be assigned to your project groups and receive the project requirements. Be sure to look over the project requirements carefully, and be ready to brainstorm project ideas with your group.

## Resources

Here are some additional resources to help solidify the topics covered in this unit.

### Git Guide

Refer to the Git Guide to review the git concept for this unit. Watch the `📹 Git Guide` video for an additional walkthrough of the git concept.

  * 📖 [Git Guide: Prettier](./01-Activities/27-Evr_Prettier)

  * 📹 [Git Guide Video: Prettier](https://2u-20.wistia.com/medias/296lisxgqx) 

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
