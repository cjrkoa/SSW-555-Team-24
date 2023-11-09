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
    const signInPage = container.querySelector(".page-container");
    expect(signInPage).toBeInTheDocument();
  });

  it("renders sign-in container", () => {
    const signInContainer = container.querySelector(".primary-container");
    expect(signInContainer).toBeInTheDocument();
  });

  it("renders sign-in heading with correct text", () => {
    const signInHeading = screen.getByRole("heading", { name: "Sign In" });
    expect(signInHeading).toBeInTheDocument();
    expect(signInHeading).toHaveClass("primary-heading");
  });

  it("renders sign-in form", () => {
    const signInForm = container.querySelector(".form");
    expect(signInForm).toBeInTheDocument();
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
    const signUpContainer = container.querySelector(".secondary-container");
    expect(signUpContainer).toBeInTheDocument();
  });

  it("renders sign-up question with correct text", () => {
    const signUpQuestion = screen.getByText("Don't have an account?");
    expect(signUpQuestion).toBeInTheDocument();
    expect(signUpQuestion).toHaveClass("secondary-question");
  });

  it("renders create account button with correct text", () => {
    const createAccountButton = screen.getByRole("button", {
      name: "Create Account",
    });
    expect(createAccountButton).toBeInTheDocument();
  });
});
