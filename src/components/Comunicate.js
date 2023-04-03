import React, { useState, useEffect } from "react";


export default function Comunicate() {
  fetch("http://localhost:8080/api/prueba")
  .then(response => response.text())
  .then((response) => {
      console.log(response)
      document.getElementById("demo").innerHTML = response;
  })
  .catch(err => console.log(err))
  return (
    <div className="Comunicate">
     <p id="demo"></p>
    </div>
  );
}
