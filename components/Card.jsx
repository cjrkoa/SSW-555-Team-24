import React, { Fragment } from 'react';

const Card = ({event}) => {
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
                            <h1 className="text-lg font-bold">Price:</h1> 
                            <h1 className="p-0.5">{event.price}</h1>
                        </div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Category:</h1> 
                            <h1 className="p-0.5">{event.category}</h1>
                        </div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Type:</h1> 
                            <h1 className="p-0.5">{event.type}</h1>
                        </div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Language:</h1> 
                            <h1 className="p-0.5">{event.language}</h1>
                        </div>
                        <div className="grid grid-cols-2">
                            <h1 className="text-lg font-bold">Currency:</h1> 
                            <h1 className="p-0.5">{event.currency}</h1>
                        </div>
                        <button 
                            className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={() => console.log(props) }
                            >    
                                Register
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card;