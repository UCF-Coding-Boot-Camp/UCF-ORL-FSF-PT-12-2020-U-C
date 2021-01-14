# Unit 06: Server-Side APIs

## Overview
Up to this point, the work we’ve done is entirely *client*-side; that is, our programs only contain code that is executed and data that is generated within the browser (aka, on the client). In this unit, we will use the jQuery AJAX method to make requests to *server*-side APIs. 

When we manipulate the DOM using JavaScript or jQuery, we are leveraging the DOM API. An API, or application programming interface, is a set of protocols that allows us to hook into the functionality of another application and use it within our own. The DOM API is an example of a **client-side API**. There are numerous client-side web APIs that extend the functionality of the browser. One such API is XMLHttpRequest, which allows us to communicate with server-side APIs. 

Companies and organizations that collect and store data often make that data available to web developers to use in their applications. A **server-side API** is one or more URLs, or endpoints, where we can make requests for data stored on a third-party server.

When we make a request to a server-side API, we have no control over how long the response will take to resolve. This can create issues when dynamically generating HTML in the DOM because our JavaScript might execute before we receive the data we need to render elements. AJAX (asynchronous JavaScript and XML) is the integration of several technologies to address this asynchronicity of the client-server request-response pattern. 

XML, or extensible markup language, is a specification for encoding documents (similar to HTML). It was the standard format for data exchange for many years but has been largely replaced by JSON, though we still refer to this approach as AJAX. The fetch API was recently introduced to make it easier to use the XMLHttpRequest object without the need for a third-party library such as jQuery.

## Key Topics
The following topics will be covered in this unit:
* JSON
* AJAX
* HTTP GET requests
* Server-side APIs

## Comprehension Check
You will be employer-ready if you can answer the following questions:
1. What is JSON?
2. How does the client-server relationship work?
3. What is an API?

## Learning Objectives
You will be employer-competitive if you are able to:
* Explain the difference between a client-side and server-side API
* Explain the client-server model and request-response pattern
* Explain and implement HTTP GET requests and handle responses using AJAX
* Parse JSON to dynamically generate HTML
* Explain the benefits and challenges of working with asynchronous JavaScript
* Explain and execute callbacks to handle asynchronous HTTP requests

## Homework: Weather Dashboard
Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. In this homework assignment, your challenge is to build a weather dashboard using the OpenWeather API.

## Helpful Links
* [MDN AJAX: Getting Started](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
* [Wikipedia: Web API](https://en.wikipedia.org/wiki/Web_API)
* [Wikipedia: AJAX](https://en.wikipedia.org/wiki/Ajax_(programming))
* [MDN: XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [jQuery](https://api.jquery.com/)

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
