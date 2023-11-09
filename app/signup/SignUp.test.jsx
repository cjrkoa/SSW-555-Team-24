import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUp from "./page";

describe("SignUp Component", () => {
  // Before each test, render the SignUp component
  let container = null;
  beforeEach(() => {
    const renderResult = render(<SignUp />);
    container = renderResult.container;
  });

  it("renders sign-up page container", () => {
    const signUpPage = container.querySelector(".sign-up-page");
    expect(signUpPage).toBeInTheDocument();
    expect(signUpPage).toHaveClass("sign-up-page");
  });

  it("renders sign-up container", () => {
    const signUpContainer = container.querySelector(".sign-up-container");
    expect(signUpContainer).toBeInTheDocument();
    expect(signUpContainer).toHaveClass("sign-up-container");
  });

  it("renders sign-up heading with correct text", () => {
    const signUpHeading = screen.getByRole("heading", { name: "Create Account" });
    expect(signUpHeading).toBeInTheDocument();
    expect(signUpHeading).toHaveClass("sign-up-heading");
  });

  it("renders sign-up form", () => {
    const signUpForm = container.querySelector(".sign-up-form");
    expect(signUpForm).toBeInTheDocument();
    expect(signUpForm).toHaveClass("sign-up-form");
  });

  it("renders email input", () => {
    const emailInput = screen.getByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();
  });

  it("renders password input", () => {
    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders first name input", () => {
    const firstNameInput = screen.getByPlaceholderText("First Name");
    expect(firstNameInput).toBeInTheDocument();
  });

  it("renders last name input", () => {
    const lastNameInput = screen.getByPlaceholderText("Last Name");
    expect(lastNameInput).toBeInTheDocument();
  });

  it("renders sign-up submit button with correct text", () => {
    const submitButton = screen.getByRole("button", { name: "Sign Up" });
    expect(submitButton).toBeInTheDocument();
  });

  it("renders sign-in container", () => {
    const signInContainer = container.querySelector(".sign-in-container");
    expect(signInContainer).toBeInTheDocument();
    expect(signInContainer).toHaveClass("sign-in-container");
  });

  it("renders sign-in question with correct text", () => {
    const signInQuestion = screen.getByText("Already have an account?");
    expect(signInQuestion).toBeInTheDocument();
    expect(signInQuestion).toHaveClass("sign-in-question");
  });

  it("renders create account button with correct text", () => {
    const createAccountButton = screen.getByRole("button", {
      name: "Sign In Here",
    });
    expect(createAccountButton).toBeInTheDocument();
  });
});
