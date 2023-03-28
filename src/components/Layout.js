import { Outlet, Link } from "react-router-dom";
import '../menuSuperior.css';
const Layout = () => {
  return (
    <>
      <nav >
        <ul>
            <li>
                <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png"></img>
            </li>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/acceso" >Acceso</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;