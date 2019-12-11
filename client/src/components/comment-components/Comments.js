import React, { Component } from "react";
import axios from "axios";
import CommentList from "../comment-components/CommentList";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          id: 1,
          author: "Joe Joe",
          comment: "Hell yeah dude"
        },
        {
          id: 2,
          author: "Dirt Bag",
          comment: "Dog, you gotta go big or shut up"
        },
        {
          id: 3,
          author: "Melinda Briggs",
          comment: "This! 100% this!"
        },
        {
          id: 4,
          author: "Grumpy",
          comment:
            "I have never encountered such a bigger piece overwrought bull shit"
        }
      ]
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
      <div>
        {comments && comments.length ? (
          <CommentList comments={comments} />
        ) : null}
      </div>
    );
  }
}

export default Comments;
