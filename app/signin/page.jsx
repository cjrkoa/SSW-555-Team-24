"use client"

import React from "react";
import { Fragment, useState } from "react";
import "../styles/SignIn_SignUp.css";

const axios = require("axios");

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const login = async (event) => {
    event.preventDefault();
    axios.post("/login", {
      username: username,
      password: password
    })
    .then(response => {
      console.log(response)
      if(response.status === 200) {
        this.props.updateUser({
          loggedIn: true,
          username: response.data.username
        })
        
        this.setState({
          redirectTo: "/"
        })
      }
    }).catch(error => { console.log(error) })
  }

  return (
    <Fragment>
      <div className="page-container">
        <div className="primary-container">
          <h1 className="primary-heading">Sign In</h1>
          <form className="form" action="/login" method="POST">
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
            <button 
              type="submit"
              onClick={(e) => {
                login(e);
              }}
            >
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
