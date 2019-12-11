import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const ArticleContainer = styled.div`
  width: 100%;
  max-width: 960px;
`;
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      article: []
    };
  }

  async componentDidMount() {
    // axios.get("/comments").then(response => {
    //   // console.log(response);
    //   this.setState({ comments: response.data });
    // });
    axios.get("/article").then(response => {
      console.log(response);
      this.setState({ article: response.data });
    });
  }

  render() {
    return (
      <>
        {this.state.article.map(part => (
          <ArticleContainer>
            <div>
              <h1>{part.title}</h1>
              <div>{part.author}</div>
              <div>{part.date}</div>
            </div>
          </ArticleContainer>
        ))}
      </>
    );
  }
}

export default Article;
