import React from "react";
import {
  render,
  fireEvent,
  wait,
  cleanup,
  getByText
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import Comments from "../Comments";

// mock out the payload
const fakeCommentOne = {
  id: 1,
  author: "Chad",
  commentText:
    "Speaking as man with a daughter I think we need to do a better job ..."
};
const fakeCommentTwo = {
  id: 2,
  author: "Meghan",
  commentText:
    "Chad, if you needed to have a daughter to realize that sexism exits then you ..."
};

const comments = [fakeCommentOne, fakeCommentTwo];

describe("Comment Component Test", () => {
  afterEach(cleanup);

  beforeEach(() => {
    axios.get = jest.fn(() => Promise.resolve(comments));
  });

  test("It fetches Comments and renders them on the page", async () => {
    const { getByText } = render(<Comments />);

    // tells the test to stop running until the first comment is loaded
    await wait(() => getByText(fakeCommentOne.commentText));

    const firstCommentAuthor = getByText(fakeCommentOne.author);
    const firstCommentText = getByText(fakeCommentOne.commentText);
    const secondCommentAuthor = getByText(fakeCommentTwo.author);
    const secondCommentText = getByText(fakeCommentTwo.commentText);

    expect(firstCommentAuthor.textContent).toBe(fakeCommentOne.author);
    expect(firstCommentText.textContent).toBe(fakeCommentOne.commentText);
    expect(secondCommentText.textContent).toBe(fakeCommentTwo.commentText);
    expect(secondCommentAuthor.textContent).toBe(fakeCommentTwo.author);
  });

  // Can we write a test for when a story has no comments?
});
