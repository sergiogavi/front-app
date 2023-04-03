import React, { useState, useEffect } from "react";


export default function Comunicate() {
  const [message, setMessage] = useState("");
  let myJSON;
  useEffect(() => {
    fetch("http://localhost:8080/api/prueba")
      .then((res) => res)
      .then((data) => setMessage(data.message));
  }, []);
  //let v=document.getElementById("demo").innerHTML = JSON.stringify(message);
  console.log("El valor de message es: "+message);
  return (
    <div className="Comunicate">
     <p id="demo">{message}</p>
    </div>
  );
}
