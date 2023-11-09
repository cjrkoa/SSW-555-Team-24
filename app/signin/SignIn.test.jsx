import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignIn from "./page";

describe("SignIn Component", () => {
  // Before each test, render the SignIn component
  let container = null;
  beforeEach(() => {
    const renderResult = render(<SignIn />);
    container = renderResult.container;
  });

  it("renders sign-in page container", () => {
    const signInPage = container.querySelector(".sign-in-page");
    expect(signInPage).toBeInTheDocument();
    expect(signInPage).toHaveClass("sign-in-page");
  });

  it("renders sign-in container", () => {
    const signInContainer = container.querySelector(".sign-in-container");
    expect(signInContainer).toBeInTheDocument();
    expect(signInContainer).toHaveClass("sign-in-container");
  });

  it("renders sign-in heading with correct text", () => {
    const signInHeading = screen.getByRole("heading", { name: "Sign In" });
    expect(signInHeading).toBeInTheDocument();
    expect(signInHeading).toHaveClass("sign-in-heading");
  });

  it("renders sign-in form", () => {
    const signInForm = container.querySelector(".sign-in-form");
    expect(signInForm).toBeInTheDocument();
    expect(signInForm).toHaveClass("sign-in-form");
  });

  it("renders email input", () => {
    const emailInput = screen.getByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();
  });

  it("renders password input", () => {
    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders sign-in submit button with correct text", () => {
    const submitButton = screen.getByRole("button", { name: "Sign In" });
    expect(submitButton).toBeInTheDocument();
  });

  it("renders sign-up container", () => {
    const signUpContainer = container.querySelector(".sign-up-container");
    expect(signUpContainer).toBeInTheDocument();
    expect(signUpContainer).toHaveClass("sign-up-container");
  });

  it("renders sign-up question with correct text", () => {
    const signUpQuestion = screen.getByText("Don't have an account?");
    expect(signUpQuestion).toBeInTheDocument();
    expect(signUpQuestion).toHaveClass("sign-up-question");
  });

  it("renders create account button with correct text", () => {
    const createAccountButton = screen.getByRole("button", {
      name: "Create Account",
    });
    expect(createAccountButton).toBeInTheDocument();
  });
});
