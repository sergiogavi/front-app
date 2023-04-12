
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import "../styles/menulateral.css";
import AbreHilo from './AbreHilo';
import Button from '@material-ui/core/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom"
import $ from 'jquery';
import linq from "linq";


export default function TablePosts() {



  fetch("http://localhost:8080/api/getHilos")
  .then(response => response.text())
  .then((response) => {
    
    var myArr = JSON.parse(response);
    console.log(response);
     
    var tbody = document.getElementById('demo');

    tbody.innerHTML = "";

  for (var i = 0; i < myArr.length; i++) {
    var tr = "<tr>";
    tr += "<td ></td>" + "<a href='www.google.es'>" +" "+ myArr[i].id + "</a></tr>";
    tr += "<td>Nombre : </td>" + "<td>" + myArr[i].nombre + "</td></tr>";
    tr += "<td>Titulo : </td>" + "<td>" + myArr[i].titulo + "</td></tr>";
    tr += "<td>Mensaje : </td>" + "<td>" + myArr[i].mensaje + "</td></tr>";
    tr += "<hr></div>";
    tbody.innerHTML +=tr; 
}  

const tbl = document.getElementById('demo');
tbl.addEventListener('click', event => {
  const el = event.target;
 console.log(`you clicked "${el.innerText}"`);

});
})
.catch(err => console.log(err))
// listen for all 'click' events within table


return (
  <div className="Comunicate">
<table>

<tbody id="demo">

</tbody>

</table>

  </div>
);
}