import { Link } from "react-router-dom";
import StyledFooter from "./index.Styled";

function Footer() {
  return (
    /**
    * Menggunakan styles yang sudah diimport.
    * Memanggilnya menggunakan expression.
    */
    <StyledFooter>
      <nav>
        <div>
          <h1>Covid ID</h1>
          <p>Develop by saidak286</p>
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
    </StyledFooter>
  );
}

export default Footer;
