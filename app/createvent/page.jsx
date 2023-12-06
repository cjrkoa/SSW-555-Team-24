"use client"

import React from 'react';
import { Fragment, useState } from "react";
import "../styles/Createvent.css";

const axios = require("axios");

export default function AddEvent() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [ages, setAges] = useState("");
    const [language, setLanguage] = useState("English");
    const [currency, setCurrency] = useState("USD");

    const eventSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: name,
            date: date,
            location: location,
            price: price,
            category: category,
            ages: ages,
            language: language,
            currency: currency,
        };
        try {
            const response = await axios.post("http://localhost:5000/newevent", data);
            console.log("Message:", response.data);
        } catch (error) {
            const err =  error;
            console.log("Error", err);
        }
    };

    return(
        <Fragment>
            <h1 className="Enter-Info">Enter information to create a new event below</h1>
            <div className="Div-1">
                <form action="" className='Form'>
                    <div className="Field-Wrap">
                        <label className="Label-Width">Name</label>
                        <input 
                            name="name" 
                            className="Input-Box" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="Field-Wrap">
                        <label className="Label-Width">Date</label>
                        <input 
                            name="date"
                            type="date" 
                            className="Input-Box" 
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="Field-Wrap">
                        <label className="Label-Width">Location</label>
                        <input 
                            name="location" 
                            className="Input-Box"
                            onChange={e => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="Field-Wrap">
                        <label className="Label-Width">Price</label>
                        <input 
                            name="price"
                            type="number" 
                            className="Input-Box" 
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="Field-Wrap">
                        <label className="Label-Width">Category</label>
                        <input 
                            name="category" 
                            className="Input-Box" 
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            required
                        />
                    </div>
                    <div className="Field-Wrap">
                        <label className="Label-Width">Ages</label>
                        <input 
                            name="ages" 
                            className="Input-Box" 
                            value={ages}
                            onChange={e => setAges(e.target.value)}
                            required
                        />
                    </div>
                    <div className="Field-Wrap">
                        <label className="Label-Width">Language</label>
                        <input 
                            name="language" 
                            className="Input-Box" 
                            value={language}
                            onChange={e => setLanguage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="Field-Wrap">
                        <label className="Label-Width">Currency</label>
                        <input 
                            name="currency" 
                            className="Input-Box" 
                            value={currency}
                            onChange={e => setCurrency(e.target.value)}
                            required
                        />
                    </div>
                    <button 
                        className="Submit-Button" 
                        onClick={ eventSubmit }>
                            Submit
                    </button>
                </form>
            </div>
        </Fragment>
    );
}