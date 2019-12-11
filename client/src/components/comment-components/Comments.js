import React, { Component } from "react";
import axios from "axios";
import CommentList from "./commentList";

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
    axios.get("/comments").then(response => {
      // console.log(response);
      this.setState({ comments: response.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.comments && comments.length ? (
          <CommentList comments={comments} />
        ) : null}
      </div>
    );
  }
}

export default Comments;
