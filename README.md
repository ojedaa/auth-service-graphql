# Auth Service Challenge

### We have a problem!

An awesome new startup company need to implement a way to allow their employees to log into the admin website, but they have no idea how to do it, so they hire one of the best back-end developers in the tech industry to solve this challenge, are you ready?

### The task

Develop a functional service for user authentication, the service must implement a GraphQL server with login and signup resolvers, the login resolver will receive an email and a password, when the user sends the data, the service must verify if the user exist into a Mongo database and generate a Json Web Token with the user email as payload, then return it as a response, however if the user doesn't exist the service must return an error indicating the reason. Finally, the signup resolver must receive name, email and password, then a service must verify email duplicity into the DB returning an error or inserting the data into the DB, the password must not be stored as plain text.

### Previous steps:
- Create a free [MongoDB Atlas](https://account.mongodb.com/account/register) account.
- Setup a new free cluster.
- Get connection uri.

 ### Points to qualify

- Clean code
- Cohesion
- Separation of concerns


## RUN 
npm install
## RUN 
npm run dev