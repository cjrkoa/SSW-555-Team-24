import React, { Fragment } from 'react';

const Card = (props) => {
    
    return(
        <Fragment>
            <div className="grid grid-cols-1 gap-1 p-3">
                <div className="lg:col-span-1 flex justify-center items-center">
                    <div className="bg-gray-200 rounded-lg p-10 text-left w-screen h-full">
                        <h1>Name: {props.name}</h1>
                        <h1>Date: {props.date}</h1>
                        <h1>Price: {props.price}</h1>
                        <h1>Category: {props.category}</h1>
                        <h1>Type: {props.type}</h1>
                        <h1>Language: {props.language}</h1>
                        <h1>Currency: {props.currency}</h1>
                        <button 
                            className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={ console.log(props) }
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