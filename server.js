var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema, } = require('graphql');
const dotenv = require('dotenv').config();
let {dbConnection} = require("./database/config");
const typeDefs = require ("./graphql/types");
const publicResolver =require("./resolvers/public.resolver");

let root = {
    signup: publicResolver.signup,
    login:publicResolver.login
};

try {
    var app = express();
    dbConnection();
    
    app.use('/graphql', graphqlHTTP({
        schema:buildSchema(typeDefs),
        rootValue:root,
        graphiql: true,
    }));

    app.listen(process.env.PORT||4000);
    console.log(`Running a GraphQL API server at http://localhost:${process.env.PORT}/graphql`);
} catch (error) {
    console.log(error);
}