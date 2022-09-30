import "./Comment.css";

const Comment = (props) => {
  return (
    <div className="comment">
      <div>{props.item.userName + ": " + props.item.rating}</div>
      <div className="comment__text">{props.item.comment}</div>
    </div>
  );
};

export default Comment;
