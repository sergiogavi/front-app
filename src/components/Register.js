import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import '../styles/loginRegister.css';
import { Outlet, Link } from "react-router-dom";
var nombre="user";
export default function Register() {

    var registrarUsuario=async function registrarUsuarios(){
                console.log("LLEGA");
            let datos = {};
            datos.nombre = document.getElementById('txtNombre').value ;
            datos.apellido = document.getElementById('txtApellido').value ;
            datos.email = document.getElementById('txtEmail').value ;
            datos.password = document.getElementById('txtPassword').value ;
        
            let repetirPassword = document.getElementById('txtRepetirPassword').value ;
        
            if(repetirPassword != datos.password){
            alert("La contraseña que escribiste es diferente");
            return;
            }
              const request = await fetch('http://localhost:8080/api/usuarios', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
              });
              alert("La cuenta ha sido registrada con exito");
        
              //window.location.href='login.html';
        
            
        
        }

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
    const classes = useStyles();
    return (
        <div id="formulario" className="font-menu">
            <img id="logo"
          src={require('../img/bate.png')} 
          alt="logo" 
        />
        <br/>
        <br/>
        <br/>
        <form className={classes.root} noValidate autoComplete="off" className="font-menu">
        <TextField id="txtNombre" label="Nombre" />
        <br/>
        <TextField id="txtApellido" label="Apellido" />
        <br/>
        <TextField id="txtEmail" label="Email" />
        <br/>
        <TextField id="txtPassword" type="password" label="Password" />
        <br/>
        <TextField id="txtRepetirPassword" type="password" label="txtRepetirPassword" />
        <br/>
        <Button className="font-menu" onClick={registrarUsuario}>Registrate</Button>
        <nav>
              
                <li><Link to='/login'>Volver al Login</Link></li>
          
            </nav>
        </form>
        </div>
          );}



