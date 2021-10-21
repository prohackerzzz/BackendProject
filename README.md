# BackendProject
# This is the demo of translation api

## In this api I'd made a route that would translate a given text to the other desired language

This project is having a server.js which is the main file or we can say it's the entry point of application. 

In this project I'd used mysql for storing cache for our application
I'd attached a file documentation.docx which shows the difference between timings of translation. One image is a translation from api and one is translation from our database cache

I'd used translate library to translate our text.

I think we can implement pre-caching in our application by using previous translations of user. For ex :- if a user first translated a text to hindi and second time he translates the text to marathi. So third time when the user will translate the text we will cache the translation of others language as well.



