import '../styles/home.css';
import MenuLateral from "./MenuLateral";
import Grid from '@mui/material/Grid'; // Grid version 1
import TablePosts from './TablePosts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import Tendencias from './Tendencias';
import Layout from './Layout';
import Home from './Home';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Comunicate() {
 
  return (
    <div className="Comunicate">
     <h1 className="font-menu" id="homepage">DForoBate</h1>
   <p className="font-menu">Esta web ha sido creada con el objetivo de compartir información y debatir sobre todo tipo de temas entre los miembros registrados.<br></br> Por favor se respetuoso con los demás miembros y pasalo bien!</p>
   
  <TablePosts/>

    </div>

);
}
