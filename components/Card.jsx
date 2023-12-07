import React, { Fragment, useState } from 'react';

const axios = require("axios");

const Card = ({event}) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [email, setEmail] = useState("email@example.com");
    
    const register = async (email) => {
        const data = {
            email: email,
            eventName: event.name,
        };
        try {
            const response = await axios.post("http://localhost:5000/newsignup", data);
            console.log("Message:", response.data);
            alert("Registered for Event")
        } catch (error) {
            const err =  error;
            console.log("Error", err);
        }
    };

    return(
        <Fragment>
            <div className="grid grid-cols-1 gap-1 p-3">
                <div className="col-span-1 flex justify-center items-center">
                    <div className="bg-gray-200 rounded-lg p-10 text-left w-screen h-full">
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Name:</h1> 
                            <h1 className="p-0.5">{event.name}</h1>
                        </div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Date:</h1> 
                            <h1 className="p-0.5">{event.date}</h1>
                        </div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Location:</h1> 
                            <h1 className="p-0.5">{event.location}</h1>
                        </div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Price:</h1> 
                            <h1 className="p-0.5">{event.price}</h1>
                        </div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Category:</h1> 
                            <h1 className="p-0.5">{event.category}</h1>
                        </div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Ages:</h1> 
                            <h1 className="p-0.5">{event.ages}</h1>
                        </div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Language:</h1> 
                            <h1 className="p-0.5">{event.language}</h1>
                        </div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Currency:</h1> 
                            <h1 className="p-0.5">{event.currency}</h1>
                        </div>
                        {!buttonClicked && 
                        <div>
                        <input 
                            className="bg-stone-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder={email}
                            onChange={e => setEmail(e.target.value)} 
                            />

                        <button 
                            className="bg-yellow-200 hover:bg-yellow-300 hover:text-black transition duration-300 font-semibold py-2 px-4 rounded-full"
                            onClick={() => 
                                register(email)
                                .then(setButtonClicked(true)) 
                            }
                            >    
                                Register
                        </button>
                        </div>}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card;