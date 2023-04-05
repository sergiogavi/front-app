import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import NoPage from "./components/NoPage";
import Acceso  from "./components/Acceso";
import Comunicate from "./components/Comunicate";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import Drawer from "./components/Drawer";
import MenuOptions from "./components/PrimarySearchAppBar";
export default function App() {
  return (

<BrowserRouter>
<PrimarySearchAppBar />
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/usuarios" element={<Comunicate />} />
          <Route path="/acceso" element={<Acceso />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);