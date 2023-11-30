"use client"

import React, { Fragment, useState } from 'react';
import Card from '../../components/Card';

export default function findevent() {
    const [search, setSearch] = useState("Enter Event Name Here");
    
    const event = {
        name: "Example",
        date: "05-14-2024",
        price: "0",
        category: "College",
        type: "Graduation",
        language: "English",
        currency: "USD",
    };

    return (
        <Fragment>
            <div class="grid gap-3 grid-cols-4">
                <div class="col-span-4 p-3 gap-2 inline-flex">
                    <input 
                        name="name" 
                        class="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={search}
                        onChange={e => setSearch(e.target.value)} 
                        />
                    <button
                        className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={ console.log(search) }
                    >
                        Search
                    </button>
                </div>
                <div class="col-span-3">
                    <div class="grid gap-3 grid-cols-3 grid-rows-4">
                        <Card 
                            props={event}
                            />
                        <Card 
                            props={event}
                            />
                        <Card 
                            props={event}
                            />
                        <Card 
                            props={event}
                            />
                        <Card 
                            props={event}
                        />
                        <Card 
                            props={event}
                        />
                        <Card 
                            props={event}
                            />
                        <Card 
                            props={event}
                            />
                        <Card 
                            props={event}
                        />
                        <Card 
                            props={event}
                            />
                        <Card 
                            props={event}
                            />
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-10 text-left w-screen h-full">
                    <h1>Put Filters Here</h1>
                </div>    
            </div>
        </Fragment>
    )
}