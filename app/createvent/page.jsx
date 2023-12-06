"use client"

import React from 'react';
import { Fragment, useState } from "react";

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
            <h1 className="p-1 text-center">Enter information to create a new event below</h1>
            <div className="grid gap-1 grid-cols-5 grid-rows-1">
                <div></div>
                <div className="col-span-3 p-5">
                    <div className="inline-flex gap-2 p-1 w-full">
                        <h1 className="p-2">Name</h1>
                        <input 
                            name="name" 
                            className="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="inline-flex gap-2 p-1 w-full">
                        <h1 className="p-2">Date</h1>
                        <input 
                            name="date"
                            type="date" 
                            className="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inline-flex gap-2 p-1 w-full">
                        <h1 className="p-2">Location</h1>
                        <input 
                            name="location" 
                            className="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={e => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inline-flex gap-2 p-1 w-full">
                        <h1 className="p-2">Price</h1>
                        <input 
                            name="price"
                            type="number" 
                            className="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inline-flex gap-2 p-1 w-full">
                        <h1 className="p-2">Category</h1>
                        <input 
                            name="category" 
                            className="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inline-flex gap-2 p-1 w-full">
                        <h1 className="p-2">Ages</h1>
                        <input 
                            name="ages" 
                            className="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={ages}
                            onChange={e => setAges(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inline-flex gap-2 p-1 w-full">
                        <h1 className="p-2">Language</h1>
                        <input 
                            name="language" 
                            className="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={language}
                            onChange={e => setLanguage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inline-flex gap-2 p-1 w-full">
                        <h1 className="p-2">Currency</h1>
                        <input 
                            name="currency" 
                            className="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={currency}
                            onChange={e => setCurrency(e.target.value)}
                            required
                        />
                    </div>
                        <button 
                            className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full" 
                            onClick={ eventSubmit }>
                                Submit
                        </button>
                </div>
            </div>
        </Fragment>
    );
}