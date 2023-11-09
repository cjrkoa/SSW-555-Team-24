import React from "react";
import { Fragment } from "react";
import "../styles/SignIn_SignUp.css";

export default function SignUp() {
  return (
    <Fragment>
      <div className="page-container">
        <div className="primary-container">
          <h1 className="primary-heading">Create Account</h1>
          <form className="form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="First Name" placeholder="First Name" required />
            <input type="Last Name" placeholder="Last Name" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="secondary-container">
          <h2 className="secondary-question">Already have an account?</h2>
          <a href="/signin"><button>Sign In Here</button></a>
        </div>
      </div>
    </Fragment>
  );
}
