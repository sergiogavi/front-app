import { Outlet, Link } from "react-router-dom";
import '../menuSuperior.css';
const Layout = () => {
  return (
    <>
      <nav >
        <ul>
            <li>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png"></img>
            </li>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/blogs" >Blogs</Link>
          </li>
          <li>
            <Link to="/contact" >Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;