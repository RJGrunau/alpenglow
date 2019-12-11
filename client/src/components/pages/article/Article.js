import React, { Component } from "react";
import axios from "axios";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      article: []
    };
  }

  // async componentDidMount() {
  //   axios.get("/comments").then(response => {
  //     // console.log(response);
  //     this.setState({ comments: response.data });
  //   });
  //   axios.get("/article").then(response => {
  //     console.log(response);
  //     this.setState({ article: response.data });
  //   });
  // }

  render() {
    return <div></div>;
  }
}

export default Article;
