import React from "react";

const CommentCard = ({ ...comment }) => {
  return (
    <div>
      <div>{comment.author}</div>
      <article>{comment.comment}</article>
    </div>
  );
};

export default CommentCard;
