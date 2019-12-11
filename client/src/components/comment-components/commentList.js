import React from "react";
import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => {
  return (
    <section>
      {comments.map(comment => {
        <CommentCard key={comment.id} {...comment} />;
      })}
    </section>
  );
};

export default CommentList;
