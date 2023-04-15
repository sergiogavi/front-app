import React, { useState, useEffect } from "react";
import AbreHilo from "./AbreHilo";
import '../styles/home.css';
export default function Comunicate() {
  let nombreDef;
  fetch("http://localhost:8080/api/prueba")
  .then(response => response.text())
  .then((response) => {
    var myArr = JSON.parse(response);
      console.log(response);
       
      var tbody = document.getElementById('demo');
      tbody.innerHTML = "";

    for (var i = 0; i < myArr.length; i++) {
      var tr = "<tr>";
      tr += "<td>Nombre : </td>" + "<td>" + myArr[i].nombre + "</td></tr>";
      tr += "<td>email : </td>" + "<td>" + myArr[i].email + "</td></tr>";
      tr += "<hr>";
      tbody.innerHTML += tr;
}})
  .catch(err => console.log(err))
  return (
    <div className="Comunicate">
 <table id='users'>
  <tbody id="demo"></tbody>
</table>

<footer>
  <p>Author: Sergio G<br/>
</p>
</footer>
    </div>
    
  );
}
