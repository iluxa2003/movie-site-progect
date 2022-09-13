const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } =
  graphql;

const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    id: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  user: {
    type: userType,
    args: {
      id: { type: GraphQLString },
    },
    resolve(parent, args) {},
  },
});

module.exports = new GraphQLSchema();
