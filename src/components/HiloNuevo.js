import React from "react";
import {ideDefinitivo} from "./TablePosts";
import TablePosts from "./TablePosts";
import { Outlet, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ListItemText from '@mui/material/ListItemText';
import { TextField, TextareaAutosize } from '@material-ui/core';
import '../styles/hilox.css';
export default function HiloNuevo() {
    var idToSearch=localStorage.getItem("id");
    var EmailUser=localStorage.getItem("email");
    console.log(idToSearch);

    var sendMessage=async function iniciarSesion(){
        console.log('button clicked');

        let datos = {};
        datos.id=null;
        datos.nombre=EmailUser;
        datos.titulo = document.getElementById('txtTitulo').value ;
        datos.mensaje = document.getElementById('txtMensaje').value ;


    
          const request = await fetch('http://localhost:8080/api/postHilos', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          } ).then(window.history.back());
          const respuesta = await request.text();
          console.log(datos);
        }
     
  return (
   <div className="Comunicate">
    <h1>¿En que estás pensando?</h1>
<table className='font-menu'>
 <tbody id="demoHilo"></tbody>
</table>
<table >
 <tbody id="listadoMsg"></tbody>
</table>
<form id="boxTexto" noValidate autoComplete="off" className="font-menu">
    <h3>Titulo</h3>
<TextareaAutosize id="txtTitulo" label="Titulo" />
<h3>Mensaje</h3>
<TextareaAutosize  id="txtMensaje" label="Mensaje" />
<br/>
<Button  className="font-menu" onClick={sendMessage}>Enviar</Button>
<nav>
        <li><Link to='/'>Volver al listado de hilos</Link></li>
    </nav>
</form>

   </div>
 );

}

