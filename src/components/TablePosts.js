import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function setId(ide) {
  localStorage.setItem('id', ide);
}

function comprobarRegistrado() {
  var usuarioActivo = localStorage.getItem('email');
  if (usuarioActivo !== 'DforoBate') {
    window.location.href = '/hilonuevo';
  } else {
    alert('Solo los miembros registrados pueden abrir nuevos hilos');
  }
}

export default function TablePosts() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    // Llama a la API REST para obtener los datos
    axios.get('http://localhost:8080/api/getHilos').then((response) => {
      setData(response.data);
      setFilteredData(response.data);
    });
  }, []);

  useEffect(() => {
    // Actualiza filteredData cada vez que searchTerm cambia
    const filtered = data.filter(
      (item) =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.mensaje.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);

  }, [data, searchTerm]);

  return (
    <div className="Comunicate">
      <nav>
        <li>
          <Link onClick={comprobarRegistrado} className="font-menu" id="creaHilo">
            Crea tu propio hilo
          </Link>
        </li>
      </nav>
      <SearchBar onChange={handleSearch} />
      
      <Table striped bordered>
        <thead>
          {/*...*/}
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>  
                <Link className="idText" to="/hilox" onClick={() => setId(row.id)}>
                  {row.id}
                </Link>
              </td>
              <td className="idText">
                <b>{row.nombre}</b>
              </td>
              <td className="idText">
                <u>{row.titulo}</u>
              </td>
              <td className="idText">{row.mensaje}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
