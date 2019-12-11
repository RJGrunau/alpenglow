import React from "react";
import { render, fireEvent, wait, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import Comments from "../comments";

const commentOne = {
  id: 1,
  author: "Joe Bob",
  comment: "Yeah you did a thing so what"
};

const commentTwo = {
  id: 2,
  author: "Melinda Briggs",
  comment: "This! This 100%"
};

const comments = [commentOne, commentTwo];

describe("Comments Test", () => {
  afterEach(cleanup);

  beforeEach(() => {
    axios.get = jest.fn(() => Promise.resolve(comments));
  });

  test("it Renders a list of Comments", async () => {
    const { getByText } = render(<Comments />);

    await wait(() => getByText(commentOne.comment));

    const firstCommentAuthor = getByText(commentOne.author);
    const firstComment = getByText(commentOne.comment);
    const secondCommentAuthor = getByText(commentTwo.author);
    const secondComment = getByText(commentTwo.comment);

    expect(firstCommentAuthor).toBeDefined();
    expect(firstComment).toBeDefined();
    expect(secondCommentAuthor).toBeDefined();
    expect(secondComment).toBeDefined();
  });
});
