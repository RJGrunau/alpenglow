import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import CommentList from "../comment-components/CommentList";

const CommentContainer = styled.div`
  width: 100%;
`;

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null
    };
  }

  componentDidMount() {
    // this.fetchComments();
  }

  // fetchComments() {
  //   axios
  //     .get("/comments")
  //     .then(comments => this.setState({ comments }))
  //     .catch(console.error);
  // }

  render() {
    const { comments } = this.state;
    return (
      <CommentContainer>
        {comments && comments.length ? (
          <CommentList comments={comments} />
        ) : null}
      </CommentContainer>
    );
  }
}

export default Comments;
