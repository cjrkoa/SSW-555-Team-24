const LINKS = [
    {
      title: "Connect",
      items: ["Help", "Inquire", "Liscensing"]
    },
    {
      title: "Finding Events",
      items: ["Recommendations", "Searching"]
    },
    {
      title: "Creating Events",
      items: ["Demonstration", "Limitations"]
    }
  ];
  
  const currentYear = new Date().getFullYear();
  
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="content">
          <h5>SHAREVENT</h5>
          <div className="links">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <li className="title">{title}</li>
                {items.map((link) => (
                  <li key={link}>
                    <a href="#" className="link">{link}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} <a href="#">Sharevent</a>. All Rights Reserved.
          </p>
          {/* Social icons can be added here */}
        </div>
      </footer>
    );
  }
  
  export default Footer