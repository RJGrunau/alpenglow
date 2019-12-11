import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CommentList from "../commentList";

describe("Comment List tests", () => {
  test("It renders a list of comments", () => {
    const fakeCommentOne = {
      id: 1,
      author: "Chad",
      comment:
        "Speaking as man with a daughter I think we need to do a better job ..."
    };
    const fakeCommentTwo = {
      id: 2,
      author: "Meghan",
      comment:
        "Chad, if you needed to have a daughter to realize that sexism exits then you ..."
    };

    const props = {
      comments: [fakeCommentOne, fakeCommentTwo]
    };

    const { getByText } = render(<CommentList {...props} />);
    const firstComment = getByText(fakeCommentOne.comment);
    const firstAuthor = getByText(fakeCommentOne.author);
    const secondComment = getByText(fakeCommentTwo.comment);
    const secondAuthor = getByText(fakeCommentTwo.author);

    // we don't care what the specific content of the comment is, just that it is there.
    expect(firstComment).toBeDefined();
    expect(firstAuthor).toBeDefined();
    expect(secondComment).toBeDefined();
    expect(secondAuthor).toBeDefined();
  });

  //what about a test that handles a case where there are no comments?
});
