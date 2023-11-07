import { Fragment } from "react";
import './SignUp.css';

export default function SignIn() {
  return (
    <Fragment>
      <div className="sign-up-page">
        <div className="sign-up-container">
          <h1 className="sign-up-heading">Create Account</h1>
          <form className="sign-up-form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="First Name" placeholder="First Name" required />
            <input type="Last Name" placeholder="Last Name" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="sign-in-container">
          <h2 className="sign-in-question">Already have an account?</h2>
          <a href="/signin"><button>Sign In Here</button></a>
        </div>
      </div>
    </Fragment>
  );
}
