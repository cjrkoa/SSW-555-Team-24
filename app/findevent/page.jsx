"use client"

import React, { Fragment, useState, useEffect, Children } from 'react';
import Card from '../../components/Card';
import GoogleMapComponent from '../../components/GoogleMapComponent';
import "../styles/Findevent.css";

const axios = require("axios");

export default function FindEvent({filter, query}) {
    const [search, setSearch] = useState("Enter Event Name Here");
    const [events, setEvents] = useState([]);
    const [type, setType] = useState("Filter By Type");
    const [category, setCategory] = useState("Filter By Category");

    useEffect((filter, query) => {
        switch(filter) {
        case "name":
            axios.get("http://localhost:5000/events:name", {params: {name: query}}).then(res => {
                setEvents(res.data);
                //console.log(res.data);
            });
            break;
        default:
            axios.get("http://localhost:5000/events").then(res => {
                setEvents(res.data);
                //console.log(res.data);
            });
        }
    }, []);

    return (
        <Fragment>
            <div className="grid gap-3 grid-cols-4">
                <div className="col-span-4 p-3 gap-2 inline-flex">
                    <input 
                        className="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder={search}
                        onChange={e => setSearch(e.target.value)} 
                        />
                    <button
                        className="bg-yellow-200 hover:bg-yellow-300 hover:text-black transition duration-300 font-semibold py-2 px-4 rounded-full"
                        onClick={() => console.log(search) }
                    >
                        Search
                    </button>
                </div>
                <div className='col-span-4 gap-2'>
                    <GoogleMapComponent/>
                </div>

                <div className="col-span-3">
                    <div className="grid gap-3 grid-cols-3 grid-rows-4">
                    {Children.map(events.keys(), key =>
                        <Card event={events.at(key)} />    
                    )}
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-5 text-left h-full">
                    <h1 className="text-center">Filter Events</h1>
                    <div className="p-3">
                        <input  
                            className="bg-stone-50 border border-gray-300 text-gray-900 p-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder={category}
                            onChange={e => setCategory(e.target.value)} 
                        />
                    </div>
                    <div className="p-3">
                        <input  
                            className="bg-stone-50 border border-gray-300 text-gray-900 p-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder={type}
                            onChange={e => setType(e.target.value)} 
                        />
                    </div>
                        <button 
                        className="bg-yellow-200 hover:bg-yellow-300 hover:text-black transition duration-300 font-semibold py-2 px-4 rounded-full w-full col-span-2" 
                        onClick={() => {
                            console.log("Apply Filters")
                        }}>
                            Apply Filters
                    </button>
                </div>    
            </div>
        </Fragment>
    )
}