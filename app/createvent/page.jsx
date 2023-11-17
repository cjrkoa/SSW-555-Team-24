"use client"

import React from 'react';
import { Fragment, useState, useEffect } from "react";

export const AddEvent = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [language, setLanguage] = useState("");
    const [currency, setCurrency] = useState('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
      }, [])

    return(
        <Fragment>
            <body role="createevent" />
            <h1>Enter information to create a new event below</h1>
            <div class="grid gap-1 grid-cols-2 grid-rows-1">
                <div class="grid gap-3 grid-cols-1 grid-rows-1">
                    <div class="inline-flex gap-2">
                        <h1>Name</h1>
                        <input name="name" class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(input) => setName(input)} />
                    </div>
                    <div class="inline-flex gap-2">
                        <h1>Date</h1>
                        <input name="date" class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={() => setDate()}/>
                    </div>
                    <div class="inline-flex gap-2">
                        <h1>Price</h1>
                        <input name="price" class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={() => setPrice()}/>
                    </div>
                    <div class="inline-flex gap-2">
                        <h1>Category</h1>
                        <input name="category" class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={() => setCategory()}/>
                    </div>
                    <div class="inline-flex gap-2">
                        <h1>Type</h1>
                        <input name="type" class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={() => setType()}/>
                    </div>
                    <div class="inline-flex gap-2">
                        <h1>Language</h1>
                        <input name="language" class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={() => setLangauge()}/>
                    </div>
                    <div class="inline-flex gap-2">
                        <h1>Currency</h1>
                        <input name="currency" class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={() => setCurrency()}/>
                    </div>
                        <button class="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => console.log(name)}>Submit</button>
                </div>
            </div>
        </Fragment>
    );
}
export default AddEvent;