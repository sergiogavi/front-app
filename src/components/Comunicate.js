import React, { useState, useEffect } from "react";


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
      tr += "<td>ID</td>" + "<td>" + myArr[i].id + "</td></tr>";
      tr += "<td>Nombre : </td>" + "<td>" + myArr[i].nombre + "</td></tr>";
      tr += "<td>apellido : </td>" + "<td>" + myArr[i].apellido + "</td></tr>";
      tr += "<td>telefono : </td>" + "<td>" + myArr[i].telefono + "</td></tr>";
      tr += "<td>email : </td>" + "<td>" + myArr[i].email + "</td></tr>";
      tr += "<hr>";
      tbody.innerHTML += tr;
}})
  .catch(err => console.log(err))
  return (
    <div className="Comunicate">
 <table>
  <tbody id="demo"></tbody>
</table>
    </div>
  );
}
