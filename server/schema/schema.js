const graphql = require("graphql");
const users = require("../models/user");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
} = graphql;

const userType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    id: { type: GraphQLID },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    adduser: {
      type: userType,
      args: {
        name: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        const user = new users({
          name: args.name,
          password: args.password,
        });
        return user.save();
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    user: {
      type: new GraphQLList(userType),
      resolve(parent, args) {
        return users.find({});
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
