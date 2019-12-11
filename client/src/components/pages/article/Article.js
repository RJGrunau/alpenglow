import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Image } from "../../../images/lib_ridge.png";

const Article = styled.article`
  width: 100%;
  max-width: 960px;
  margin: 50px auto 25px auto;
`;
const ArticleContainer = styled.div`
  width: 100%;
  max-width: 960px;
  text-align: left;

  > p {
    line-height: 1.5em;
    font-size: 18px;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
`;

const ArticleImage = styled.picture`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const ArticleImageContainer = styled.div`
  width: 100%;
  margin: 10px 0 25px 0;
`;
class ArticlePage extends Component {
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
      <Article>
        {this.state.article.map(part => (
          <>
            <ArticleContainer>
              <div>
                <h1 data-testid="title">{part.title}</h1>
                <div data-testid="author">{part.author}</div>
                <div data-testid="pub-date">{part.date}</div>
              </div>
            </ArticleContainer>
            <ArticleImageContainer>
              <ArticleImage>
                <img src={Image} width="100%" alt="climber on Mt. Rainer" />
              </ArticleImage>
            </ArticleImageContainer>
            <ArticleContainer data-testid="article-text">
              <p>{part.text}</p>
            </ArticleContainer>
          </>
        ))}
      </Article>
    );
  }
}

export default ArticlePage;
