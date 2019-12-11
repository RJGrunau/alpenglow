import React, { Component } from "react";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    fetch("/comments")
      .then(res => res.json())
      .then(comments => this.setState({ comments }));
  }

  render() {
    console.log(this.state.comments);

    return <div>hi</div>;
  }
}

export default Article;
