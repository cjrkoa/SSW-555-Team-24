const LINKS = [
  {
    title: "Connect",
    items: [
      { name: "Help", url: "/footerconnect/help" },
      { name: "Inquire", url: "/footerconnect/inquire" },
      { name: "Licensing", url: "/footerconnect/licensing" }
    ]
  },
  {
    title: "Finding Events",
    items: [
      { name: "Recommendations", url: "/footerfind/recommendations" },
      { name: "Searching", url: "/footerfind/searching" }
    ]
  },
  {
    title: "Creating Events",
    items: [
      { name: "Demonstration", url: "/footercreate/demonstration" },
      { name: "Limitations", url: "/footercreate/limitations" }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <h5>SHAREVENT</h5>
        <div className="links">
          {LINKS.map(({ title, items }) => (
            <ul key={title}>
              <li className="title">{title}</li>
              {items.map(({ name, url }) => (
                <li key={name}>
                  <a href={url} className="link">{name}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} <a href="#">Sharevent</a>. All Rights Reserved.
        </p>
        {/* Social icons can be added here */}
      </div>
    </footer>
  );
}

export default Footer;