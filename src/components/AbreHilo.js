import React, { useState, useEffect } from "react";


export default function AbreHilo() {
  let nombreDef;
  fetch("http://localhost:8080/api/getHilos")
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
  return (
    <div className="Comunicate">
 <table>
  <tbody id="demoHilo"></tbody>
</table>
    </div>
  );
}
