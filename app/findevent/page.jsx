"use client"

import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';

export default function findevent() {
    const [search, setSearch] = useState("Enter Event Name Here");
    const [events, setEvents] = useState([]);

    const event = {
        name: "Example",
        date: "05-14-2024",
        price: "0",
        category: "University",
        type: "Graduation",
        language: "English",
        currency: "USD",
    };

    useEffect(() => {
        axios.get("http://localhost:5000/event").then(res => {
          setEvents(res.data);
        })
      }, [])

    return (
        <Fragment>
            <div className="grid gap-3 grid-cols-4">
                <div className="col-span-4 p-3 gap-2 inline-flex">
                    <input 
                        name="name" 
                        className="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={search}
                        onChange={e => setSearch(e.target.value)} 
                        />
                    <button
                        className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => console.log(search) }
                    >
                        Search
                    </button>
                </div>
                <div className="col-span-3">
                    <div className="grid gap-3 grid-cols-3 grid-rows-4">
                        <Card 
                            event={event}
                            />
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-5 text-left h-full">
                    <h1 className="text-center">Filter Events</h1>
                    <div className="grid gap-3 grid-cols-2">
                        <div>
                            <label className="w-full">
                                Entertainment: <input type="checkbox" name="myCheckbox" defaultChecked={true}/>
                            </label>
                            <label>
                                Professional: <input type="checkbox" name="myCheckbox" defaultChecked={true}/>
                            </label>
                            <label>
                                Free: <input type="checkbox" name="myCheckbox" defaultChecked={true}/>
                            </label>
                            <label>
                                Family: <input type="checkbox" name="myCheckbox" defaultChecked={true}/>
                            </label>
                            <label>
                                Outside: <input type="checkbox" name="myCheckbox" defaultChecked={true}/>
                            </label>
                            <label>
                                Nighttime: <input type="checkbox" name="myCheckbox" defaultChecked={true}/>
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="w-full">
                                10+: <input type="checkbox" name="myCheckbox" defaultChecked={true}/>
                            </label>
                            <label className="w-full">
                                16+: <input type="checkbox" name="myCheckbox" defaultChecked={true}/>
                            </label>
                            <label className="w-full">
                                18+: <input type="checkbox" name="myCheckbox" defaultChecked={true}/>
                            </label>
                            <label className="w-full">
                                21+: <input type="checkbox" name="myCheckbox" defaultChecked={true}/>
                            </label>
                        </div>
                            <button 
                            className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full col-span-2" 
                            onClick={() => {
                                console.log(event);
                            }}>
                                Apply Filters
                        </button>
                    </div>
                </div>    
            </div>
        </Fragment>
    )
}