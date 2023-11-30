"use client"

import React from "react";
import { Fragment, useState } from "react";
import "../styles/SignIn_SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
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
            <input 
              name="First Name" 
              placeholder="First Name"
              onChange={e => setFirstName(e.target.value)} 
              required 
            />
            <input 
              name="Last Name" 
              placeholder="Last Name"
              onChange={e => setLastName(e.target.value)} 
              required 
            />
            <button 
              type="submit"
              onClick={() => {
                const user = {
                  email: email,
                  password: password,
                  firstName: firstName,
                  lastName: lastName,
                };

                if(password === confirmPassword){ 
                  //TODO: replace with submission to database when avalible
                  console.log(user);
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
