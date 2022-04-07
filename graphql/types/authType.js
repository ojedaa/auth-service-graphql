let Login = require("./login.type");
module.exports = /* GraphQL */ `
  ${Login}
  type Query {
    login(email: String!, password: String!): User!
  }
`;
