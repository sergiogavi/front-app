import React from "react";
import {ideDefinitivo} from "./TablePosts";
import TablePosts from "./TablePosts";
import { Outlet, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ListItemText from '@mui/material/ListItemText';
import { TextField, TextareaAutosize } from '@material-ui/core';
export default function HiloX() {
    var idToSearch=localStorage.getItem("id");
    var EmailUser=localStorage.getItem("email");
    console.log(idToSearch);


    fetch("http://localhost:8080/api/getHilos/"+idToSearch)
    .then(response => response.text())
    .then((response) => {
      var myArr = JSON.parse(response);
        console.log(response);
         
        var tbody = document.getElementById('demoHilo');
        tbody.innerHTML = "";
   
      for (var i = 0; i < myArr.length; i++) {
        var tr = "<tr >";
        tr += "<td>ID</td>" + "<td>" + myArr[i].id + "</td></tr>";
        tr += "<td>Nombre : </td>" + "<td>" + myArr[i].nombre + "</td></tr>";
        tr += "<td>titulo : </td>" + "<td>" + myArr[i].titulo + "</td></tr>";
        tr += "<td>mensaje : </td>" + "<td>" + myArr[i].mensaje + "</td></tr>";
   
        tr += "<hr>";
        tbody.innerHTML += tr;
   }})
    .catch(err => console.log(err))

    fetch("http://localhost:8080/api/getMsg/"+idToSearch)
    .then(response => response.text())
    .then((response) => {
      var myArr = JSON.parse(response);
        console.log(response);
         
        var tbody = document.getElementById('listadoMsg');
        tbody.innerHTML = "";
   
      for (var i = 0; i < myArr.length; i++) {
        var tr = "<tr >";

        tr += "<td>Nombre : </td>" + "<td>" + myArr[i].publicador + "</td></tr>";
        tr += "<td>mensaje : </td>" + "<td>" + myArr[i].mensaje + "</td></tr>";
   
        tr += "<hr>";
        tbody.innerHTML += tr;
   }})
    .catch(err => console.log(err))






    var sendMessage=async function iniciarSesion(){
        console.log('button clicked');

        let datos = {};
        datos.id=idToSearch;
        

        datos.publicador = EmailUser ;
        datos.mensaje = document.getElementById('txtMensaje').value ;
    
          const request = await fetch('http://localhost:8080/api/sendMessage', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          });
          const respuesta = await request.text();
    
            if(respuesta != 'FAIL') {
                localStorage.token= respuesta;
                localStorage.email = datos.email;
              // window.location.reload();

              }else{
                alert("Las credenciales son incorrectas");
            }
    
        }

  return (


   <div className="Comunicate">
    <h1>HILO {idToSearch}</h1>
<table>
 <tbody id="demoHilo"></tbody>
</table>
<table>
 <tbody id="listadoMsg"></tbody>
</table>
<form noValidate autoComplete="off" className="font-menu">

<TextareaAutosize id="txtMensaje"  label="Mensaje" />
<br/>
<Button className="font-menu" onClick={sendMessage}>Enviar</Button>
<nav>

        <li><Link to='/'>Volver al listado de hilos</Link></li>

    </nav>
</form>

   </div>
 );

}

