
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

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

var rowDef;
let nombreDef;


export default function TablePosts() {




  fetch("http://localhost:8080/api/getHilos")
  .then(response => response.text())
  .then((response) => {

    var myArr = JSON.parse(response);

      console.log(response);
       
      var tbody = document.getElementById('demoHilo');

      tbody.innerHTML = "";




     
    for (var i = 0; i < myArr.length; i++) {

      var tr = "<tr>";
      var b="<b>";
      var c="<i>";

      var bt="<button id=\"" + i >"Saber más ";
      tr +=bt+= b+= myArr[i].id + "</b></td></tr><br/></button>";
      tr += b+= myArr[i].nombre + "</b></td></tr><br/>";
      tr += c+= myArr[i].titulo + "</i></td></tr><br/>";
      tr +=c+= myArr[i].mensaje + "</i></td></tr>";
      tr += "<hr>";
      
      tbody.innerHTML += tr;
      
    }      
   })
    .catch(err => console.log(err))
    



  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  var rows = [
    //createData('United States', 'US', "327167434", "9833520"),
  ];



   return (
     <div>
          
      <table className="font-menu" >
      <tr>
    <td id="demoHilo" ></td>
  </tr>
      </table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

</div>
  )
}



