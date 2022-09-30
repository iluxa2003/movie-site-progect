const graphql = require("graphql");
const comment = require("../models/comment");
const comments = require("../models/comment");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
} = graphql;

const commentType = new GraphQLObjectType({
  name: "comment",
  fields: () => ({
    movie_id: { type: GraphQLString },
    userName: { type: GraphQLString },
    rating: { type: GraphQLString },
    comment: { type: GraphQLString },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addComment: {
      type: commentType,
      args: {
        movie_id: { type: GraphQLString },
        userName: { type: GraphQLString },
        rating: { type: GraphQLString },
        comment: { type: GraphQLString },
      },
      resolve(parent, args) {
        const comment = new comments({
          movie_id: args.movie_id,
          userName: args.userName,
          rating: args.rating,
          comment: args.comment,
        });
        return comment.save();
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    comment: {
      type: new GraphQLList(commentType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return comments.find({ movie_id: args.id });
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
