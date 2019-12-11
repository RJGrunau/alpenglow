import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      commentText: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <form>
        <div>
          <label htmlFor="author">Name:</label>
          <input
            type="text"
            id="author"
            placeholder="your name"
            required
            value={this.state.author}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="commentText"
            rows="10"
            columns="60"
            required
            placeholder="Leave a comment..."
            value={this.state.commentText}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button type="submit">Add your voice</button>
        </div>
      </form>
    );
  }
}

export default CommentForm;
