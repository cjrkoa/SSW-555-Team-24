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
            <input name="name" onChange={() => setName()} />
            <input name="date" onChange={() => setDate()}/>
            <input name="price" onChange={() => setPrice()}/>
            <input name="category" onChange={() => setCategory()}/>
            <input name="type" onChange={() => setType()}/>
            <input name="language" onChange={() => setLangauge()}/>
            <input name="currency" onChange={() => setCurrency()}/>
            <button onClick={() => console.log(name)}>Submit</button>
        </Fragment>
    );
}