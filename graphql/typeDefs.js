const path = require('path');
const {makeExecutableSchema} = require("graphql-tools")
const { mergeTypeDefs,} = require('@graphql-tools/merge');
const userType = require('./types/userType');
const authType = require('./types/authType');
const types = [userType, authType]

module.exports = mergeTypeDefs(types)