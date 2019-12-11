import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CommentCard from "../CommentCard";

describe("Comment Card Tests", () => {
  test("It Renders a Comment and its Author", () => {
    // Arange the test
    const comment = {
      author: "Joe Bob Briggs",
      comment: "This story sucks"
    };

    // we're going to use get by text to find both the author and comment
    const { getByText } = render(<CommentCard {...comment} />);
    const author = getByText(comment.author);
    const commentText = getByText(comment.comment);

    expect(author.textContent).toBe(comment.author);
    expect(commentText.textContent).toBe(comment.comment);
  });
});
