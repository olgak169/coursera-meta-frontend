import logo from "../assets/img/logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer_logo">
            <img src={logo} alt="Little lemon logo" />
          </div>
          <div className="footer_column">
            <ul>
              <li>
                <a href="#">Address: Chicago Main str 564</a>
              </li>
              <li>
                <a href="#">Phone: 560 00 80</a>
              </li>
              <li>
                <a href="#">Follow us: - -</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
