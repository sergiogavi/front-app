import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import NoPage from "./components/NoPage";
import Login  from "./components/Login";
import Comunicate from "./components/Comunicate";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import MenuOptions from "./components/PrimarySearchAppBar";
import Register from "./components/Register";
import HiloX from "./components/HiloX";
export default function App() {
  return (

<BrowserRouter>
<PrimarySearchAppBar />
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/usuarios" element={<Comunicate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hilox" element={<HiloX />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);