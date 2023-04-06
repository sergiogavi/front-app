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
export default function Login() {
 
  var nombre= window.localStorage.getItem('email');
  //Variable que realiza petición POST al back end para realizar la autenticación
  var checkUser=async function iniciarSesion(){
    console.log('button clicked');
    let datos = {};
    datos.email = document.getElementById('txtEmail').value ;
    datos.password = document.getElementById('txtPassword').value ;

      const request = await fetch('http://localhost:8080/api/login', {
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
           window.location.reload();
           console.log(nombre);
          }else{
            alert("Las credenciales son incorrectas");
        }

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
    
<h1>Login</h1>,

<div id="formulario" className="font-menu">
<img id="logo"
          src={require('../img/bate.png')} 
          alt="logo" 
        />
        <br/>
        <br/>
        <br/>
<form className={classes.root} noValidate autoComplete="off" className="font-menu">
<TextField id="txtEmail" label="Email" />
<br/>
<TextField id="txtPassword" type="password" label="Password" />
<br/>
<Button className="font-menu" onClick={checkUser}>Login</Button>
<nav>

        <li><Link to='/register'>¿Todavía no tienes cuenta? Registrate!</Link></li>

    </nav>
</form>
</div>
  );
}


 