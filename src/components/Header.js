import { Link } from "react-router-dom";

function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid white",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1>David Aydin</h1>

      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>

        <Link to="/about">
          <div>ABOUT</div>
        </Link>

        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
