import React from "react";
import {ideDefinitivo} from "./TablePosts";
import TablePosts from "./TablePosts";
import { Outlet, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ListItemText from '@mui/material/ListItemText';
import { TextField, TextareaAutosize } from '@material-ui/core';
import '../styles/hilox.css';
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
        tr += "<td></td>" + "<td><b>" + myArr[i].nombre + "</b></td></tr>";
        tr += "<td></td>" + "<td>" + myArr[i].titulo + "</td></tr>";
        tr += "<td></td>" + "<td>" + myArr[i].mensaje + "</td></tr>";
   
        tr += "<hr style='background-color: red'>";
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

        tr += "<td></td>" + "<td><b>" + myArr[i].publicador + "</b></td></tr>";
        tr += "<td></td>" + "<td>" + myArr[i].mensaje + "</td></tr>";
   

        tbody.innerHTML += tr;
   }})
    .catch(err => console.log(err))

    var sendMessage=async function iniciarSesion(){
        console.log('button clicked');

        let datos = {};
        datos.mensajeid=null;
        datos.id=idToSearch;
        datos.mensaje = document.getElementById('txtMensaje').value ;
        if(EmailUser==null || EmailUser==undefined){EmailUser='prueba@debate.cat'}

        datos.publicador = EmailUser;

    
          const request = await fetch('http://localhost:8080/api/sendMessage', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          });
          const respuesta = await request.text();
    
          console.log(datos);
          window.location.reload();
        }

  return (
   <div className="Comunicate">
<table id="primeraTabla" className='font-menu'>
 <tbody id="demoHilo"></tbody>
</table>
<table id="table2">
 <tbody id="listadoMsg"></tbody>
</table>
<form id="boxTexto" noValidate autoComplete="off" className="font-menu">

<TextareaAutosize  placeholder='Escribir mensaje...' id="txtMensaje" label="Mensaje" />
<br/>
<Button  className="font-menu" onClick={sendMessage}>Enviar</Button>
<nav>
        <li><Link to='/'>Volver al listado de hilos</Link></li>
    </nav>
</form>

   </div>
 );

}

