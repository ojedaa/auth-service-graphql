let User = require("./user.type");
module.exports = `
  ${User}
  type Query {
    signup(name: String!, email: String!, password: String!): User!
  }
`;