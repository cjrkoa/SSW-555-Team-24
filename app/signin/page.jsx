"use client"

import React from "react";
import { Fragment, useState } from "react";
import "../styles/SignIn_SignUp.css";
import { useRouter } from "next/navigation";
import { login } from "../db";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useRouter();

  return (
    <Fragment>
      <div className="page-container">
        <div className="primary-container">
          <h1 className="primary-heading">Sign In</h1>
          <form className="form" method="POST">
            <input 
                name="username" 
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}  
                required 
              />
            <input 
                name="password" 
                type="password"
                placeholder="Password" 
                onChange={e => setPassword(e.target.value)} 
                required 
              />
            <button type="refresh" onClick={(e) => login(e, username, password, router)}>
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
