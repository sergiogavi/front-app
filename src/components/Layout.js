import { Outlet, Link } from "react-router-dom";
import '../menuSuperior.css';
const Layout = () => {
  return (
    <>
    <div id="MenuInv" className="font-menu" >
      <nav >

      </nav>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;