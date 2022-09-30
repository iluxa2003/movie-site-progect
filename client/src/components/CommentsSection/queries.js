import { gql } from "@apollo/client";

export const commentsMutation = new gql(`
  mutation ($id:String!,$username:String!,$stars:String!,$comment:String!){
    addComment(movie_id: $id , userName: $username , rating: $stars , comment: $comment) {   
      movie_id
      userName
      rating
      comment
    }
  }
`);

export const commentsQuery = new gql(`
  query ($id:ID){
    comment(id: $id) {
      movie_id
      userName
      rating
      comment
    }
  }
`);
