import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CommentForm from "../CommentForm";

describe("Comment Form tests", () => {
  test("The form fields update with user input", () => {
    const fakeComment = {
      author: "Jo Jo",
      commentText: "All my life I have waited for someone like you..."
    };

    const { getByLabelText, getByPlaceholderText } = render(<CommentForm />);
    const authorInput = getByLabelText("Name:");
    const commentInput = getByPlaceholderText("Leave a comment...");

    //fire the event
    fireEvent.change(authorInput, { target: { value: fakeComment.author } });
    fireEvent.change(commentInput, {
      target: { value: fakeComment.commentText }
    });

    expect(authorInput.value).toBe(fakeComment.author);
    expect(commentInput.value).toBe(fakeComment.commentText);
  });
});
