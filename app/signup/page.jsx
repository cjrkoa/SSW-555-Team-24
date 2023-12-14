"use client"

import React from "react";
import { Fragment, useState } from "react";
import "../styles/SignIn_SignUp.css";

const axios = require("axios");

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const submitUser = async (event) => {
    event.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    await axios.post("http://localhost:5000/users", user)
      .then(response => {
        console.log(response);
        if(response.data) {
          alert("Successfully Registered, Redirecting To Login Page");
          window.location.href = "/signin";
        } else { console.log("Error Registering Account") }
      }).catch(error => { console.log(error) });
  }

  return (
    <Fragment>
      <div className="page-container">
        <div className="primary-container">
          <h1 className="primary-heading">Create Account</h1>
          <form className="form">
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
            <input 
              name="password" 
              type="password"
              placeholder="Confirm Password"
              onChange={e => setConfirmPassword(e.target.value)} 
              required 
            />
            <button 
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if(password === confirmPassword){ 
                  submitUser(e);
                } 
                else alert("Passwords Do Not Match");
              }}
            >
              Sign Up
              </button>
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
