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
    
    return(
        <Fragment>
            <ui>
                <h1>name</h1>
                <input name="name" onChange={() => setName()} />
                <h1>date</h1>
                <input name="date" onChange={() => setDate()}/>
                <h1>price</h1>
                <input name="price" onChange={() => setPrice()}/>
                <h1>category</h1>
                <input name="category" onChange={() => setCategory()}/>
                <h1>type</h1>
                <input name="type" onChange={() => setType()}/>
                <h1>language</h1>
                <input name="language" onChange={() => setLangauge()}/>
                <h1>currency</h1>
                <input name="currency" onChange={() => setCurrency()}/>
                <button onClick={() => console.log(name)}>Submit</button>
            </ui>
        </Fragment>
    );
}