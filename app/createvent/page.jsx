"use client"

import React from 'react';
import { Fragment, useState } from "react";

export const AddEvent = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [language, setLanguage] = useState("English");
    const [currency, setCurrency] = useState("USD");

    async function onSubmit(e, event) {
         // When a post request is sent to the create url, we'll add a new record to the database.
        await fetch("mongodb+srv://jocampo:juan_SSW555@clusterssw555.yvtizbm.mongodb.net/Events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
    }

    return(
        <Fragment>
            <h1 class="p-1 text-center">Enter information to create a new event below</h1>
            <div class="grid gap-1 grid-cols-5 grid-rows-1">
                <div></div>
                <div class="col-span-3 p-5">
                    <div class="inline-flex gap-2 p-1 w-full">
                        <h1 class="p-2">Name</h1>
                        <input 
                            name="name" 
                            class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required 
                        />
                    </div>
                    <div class="inline-flex gap-2 p-1 w-full">
                        <h1 class="p-2">Date</h1>
                        <input 
                            name="date"
                            type="date" 
                            class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div class="inline-flex gap-2 p-1 w-full">
                        <h1 class="p-2">Price</h1>
                        <input 
                            name="price"
                            type="number" 
                            class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div class="inline-flex gap-2 p-1 w-full">
                        <h1 class="p-2">Category</h1>
                        <input 
                            name="category" 
                            class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            required
                        />
                    </div>
                    <div class="inline-flex gap-2 p-1 w-full">
                        <h1 class="p-2">Type</h1>
                        <input 
                            name="type" 
                            class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={type}
                            onChange={e => setType(e.target.value)}
                            required
                        />
                    </div>
                    <div class="inline-flex gap-2 p-1 w-full">
                        <h1 class="p-2">Language</h1>
                        <input 
                            name="language" 
                            class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={language}
                            onChange={e => setLanguage(e.target.value)}
                            required
                        />
                    </div>
                    <div class="inline-flex gap-2 p-1 w-full">
                        <h1 class="p-2">Currency</h1>
                        <input 
                            name="currency" 
                            class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={currency}
                            onChange={e => setCurrency(e.target.value)}
                            required
                        />
                    </div>
                        <button 
                            class="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full" 
                            onClick={() => {
                                const event = {
                                    name: name,
                                    date: date,
                                    price: price,
                                    category: category,
                                    type: type,
                                    language: language,
                                    currency: currency,
                                };
                                console.log(event);
                                onSubmit(event);
                            }}>
                                Submit
                        </button>
                </div>
            </div>
        </Fragment>
    );
}
export default AddEvent;