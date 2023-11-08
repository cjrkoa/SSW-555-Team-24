import { Fragment } from "react";
import './SignIn.css';

export default function SignIn() {
  return (
    <Fragment>
      <div className="sign-in-page">
        <div className="sign-in-container">
          <h1 className="sign-in-heading">Sign In</h1>
          <form className="sign-in-form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="bg-yellow-200 rounded hover:bg-yellow-300 hover:text-black transition duration-300">Sign In</button>
          </form>
        </div>
        <div className="sign-up-container">
          <h2 className="sign-up-question">{"Don't have an account?"}</h2>
          <a href="/signup"><button>Create Account</button></a>
        </div>
      </div>
    </Fragment>
  );
}
