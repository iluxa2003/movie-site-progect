import "./CommentsSection.css";
import Comment from "./Comment";
import { useState } from "react";
const CommentsSection = (props) => {
  const [comment, setComment] = useState("");

  const [messages, setMessages] = useState([]);
  const [review, setReview] = useState("1 star");
  const commentHandler = (event) => {
    setComment(event.target.value);
  };
  const commentAddHandler = () => {
    const message = {
      review: review,
      userName: props.userName,
      comment: comment,
    };
    setMessages((prevMessages) => {
      return [...prevMessages, message];
    });
    refresh();
  };
  const reviewHandler = (event) => {
    setReview(event.target.value);
  };
  const refresh = () => {
    setComment("");
    setReview("1 star");
  };
  return (
    <section className="comments-section">
      <h1>User comments</h1>
      <div className="comments-section__comment-editor-wrapper">
        <textarea
          value={comment}
          className="comments-section__comment-editor"
          onInput={commentHandler}
        ></textarea>
        <h3>My review:</h3>
        <select onChange={reviewHandler} value={review}>
          <option value="1 star">1 star</option>
          <option value="2 stars">2 stars</option>
          <option value="3 stars">3 stars</option>
          <option value="4 stars">4 stars</option>
          <option value="5 stars">5 stars</option>
        </select>
        <button
          onClick={commentAddHandler}
          className="comments-section__comment-editor-button"
        >
          Submit
        </button>
      </div>
      <div className="comments-section__written-comments">
        {messages.map((message) => {
          return <Comment item={message} key={Math.random()} />;
        })}
      </div>
    </section>
  );
};

export default CommentsSection;
