"use client"

import React from "react";
import { Fragment, useState } from "react";
import "../styles/SignIn_SignUp.css";

const axios = require("axios");

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const submitUser = async (event) => {
    const user = {
      username: email,
      password: password,
    };
    axios.post("http://localhost:5000/users", user)
      .then(response => {
        console.log(response);
        alert(response);
        if(response.data) {
          alert("Successfully Registered, Redirecting To Login Page");
          this.setState({
            redirectTo: "/signin"
          });
        } else { console.log("Error Registering Account") }
      }).catch(error => {alert(error)});
  }

  return (
    <Fragment>
      <div className="page-container">
        <div className="primary-container">
          <h1 className="primary-heading">Create Account</h1>
          <form className="form">
            <input 
              name="email" 
              type="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)} 
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
              onClick={() => {
                if(password === confirmPassword){ 
                  submitUser();
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
