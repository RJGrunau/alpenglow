import React, { Component } from "react";
import axios from "axios";
import CommentList from "../comment-components/CommentList";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments() {
    axios
      .get("/comments")
      .then(comments => this.setState({ comments }))
      .catch(console.error);
  }
  render() {
    const { comments } = this.state;
    return (
      <div>
        {comments && comments.length ? (
          <CommentList comments={comments} />
        ) : null}
      </div>
    );
  }
}

export default Comments;
