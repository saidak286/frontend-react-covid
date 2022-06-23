import { Link } from "react-router-dom";
import StyledNavbar from "./index.Styled";

function Navbar() {
  return (
    /**
    * Menggunakan styles yang sudah diimport.
    * Memanggilnya menggunakan expression.
    */
    <StyledNavbar>
      <nav>
        <div>
          <h1>Covid ID</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/covid/Indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/covid/Provinsi">Provinsi</Link>
            </li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
