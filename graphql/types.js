let User = require("./types/user.type");
let Login = require("./types/login.type");
module.exports = `
  ${User}
  ${Login}
  type Query {
    signup(name: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): Login!
  }
`;