import React, { Component } from "react";
import axios from "axios";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    axios.get("/comments").then(response => {
      console.log(response);
      this.setState({ comments: response.data });
    });
    // fetch("/comments")
    //   .then(res => res.json())
    //   .then(comments => this.setState({ comments }));
  }

  render() {
    console.log(this.state.comments);

    return <div>hi</div>;
  }
}

export default Article;
