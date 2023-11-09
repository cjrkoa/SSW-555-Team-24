import React from "react";
import { Fragment } from "react";
import "../styles/SignIn_SignUp.css";

export default function SignIn() {
  return (
    <Fragment>
      <div className="page-container">
        <div className="primary-container">
          <h1 className="primary-heading">Sign In</h1>
          <form className="form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">
              Sign In
            </button>
          </form>
        </div>
        <div className="secondary-container">
          <h2 className="secondary-question">{"Don't have an account?"}</h2>
          <a href="/signup">
            <button>
              Create Account
            </button>
          </a>
        </div>
      </div>
    </Fragment>
  );
}
