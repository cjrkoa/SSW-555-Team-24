"use client"

import { Fragment, useState } from "react";

export default function AddEvent() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [language, setLanguage] = useState("");
    const [currency, setCurrency] = useState('');
    const trigger_CI = 0;
    
    return(
        <Fragment>
            <h1>Enter information to create a new event below</h1>
            <div class="grid gap-1 grid-cols-1 grid-rows-1">
                <div class="inline-flex">
                    <h1>name</h1>
                    <input name="name" onChange={() => setName()} />
                </div>
                <div class="inline-flex">
                    <h1>date</h1>
                    <input name="date" onChange={() => setDate()}/>
                </div>
                <div class="inline-flex">
                    <h1>price</h1>
                    <input name="price" onChange={() => setPrice()}/>
                </div>
                <div class="inline-flex">
                    <h1>category</h1>
                    <input name="category" onChange={() => setCategory()}/>
                </div>
                <div class="inline-flex">
                    <h1>type</h1>
                    <input name="type" onChange={() => setType()}/>
                </div>
                <div class="inline-flex">
                    <h1>language</h1>
                    <input name="language" onChange={() => setLangauge()}/>
                </div>
                <div class="inline-flex">
                    <h1>currency</h1>
                    <input name="currency" onChange={() => setCurrency()}/>
                </div>
                
                <button onClick={() => console.log(name)}>Submit</button>
            </div>
        </Fragment>
    );
}