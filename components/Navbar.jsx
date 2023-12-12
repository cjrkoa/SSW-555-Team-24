import React from 'react';
import ".//styles/components.css";

const Navbar = () => {
  return (
    <nav className ="navbar">
      <div className="navbar-structure1"> 
        <div className="navbar-structure2">
          {/** Primary / Logo Nav Bar Section */}
          <div className=" flex items-center space-x-5 py-2 px-2 ">
            {/** Logo Nav Bar Section */}
            <div id="logo">
              {/** Reference to the homepage */}
              <a href="/" className=" text-center text-black font-bold font-['Outfit'] tracking-wider text-2xl">SHAREVENT</a>
            </div>
            {/** Primary Nav Bar Section */}
            <div className=" flex items-center space-x-3">
              {/** Reference to the findevents page */}
              <a href="/findevent" className="navbar-text">Find Event</a>
              {/** Reference to the createvents page */}
              <a href="/createvent" className="navbar-text">Create Event</a>
            </div>
          </div>
          {/** Secondary Nav Bar Section */}
          <div className="flex items-center space-x-5">
            {/** Reference to the sign in page */}
            <button className="navbar-text bg-red-500 rounded hover:bg-red-900 hover:text-black transition duration-300">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;