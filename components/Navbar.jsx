const Navbar = () => {
  return (
    <nav className ="navbar">
      <div className="navbar-structure1"> 
        <div className="navbar-structure2">
          {/** Primary / Logo Nav Bar Section */}
          <div className=" flex items-center space-x-5 py-2 px-2 ">
            {/** Logo Nav Bar Section */}
            <div id="logo">
              <a href="" className=" text-center text-black font-bold font-['Outfit'] tracking-wider text-2xl">SHAREVENT</a>
            </div>
            {/** Primary Nav Bar Section */}
            <div className=" flex items-center space-x-3">
              <a href="" className="navbar-text">Find Event</a>
              <a href="" className="navbar-text">Create Event</a>
            </div>
          </div>
          {/** Secondary Nav Bar Section */}
          <div className="flex items-center space-x-5">
            <a href="" className="navbar-text">Sign In</a>
            <a href="" className="navbar-text bg-yellow-200 rounded hover:bg-yellow-300 hover:text-black transition duration-300">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;