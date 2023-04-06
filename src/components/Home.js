import '../styles/home.css';
import MenuLateral from "./MenuLateral";
export default function Comunicate() {
 
  return (
    <div className="Comunicate">
     <h1 className="font-menu" id="homepage">DForoBate</h1>
   <p className="font-menu">Esta web ha sido creada con el objetivo de compartir información y debatir sobre todo tipo de temas entre los miembros registrados.<br></br> Por favor se respetuoso con los demás miembros y pasalo bien!</p>
   <MenuLateral></MenuLateral>
    </div>

);
}
