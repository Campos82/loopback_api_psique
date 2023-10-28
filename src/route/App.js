import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../containers/Layout";
import "../styles/App.css";
import AlumnosEdit from "../view/Alumnos/AlumnoEdit";
import Alumnos from "../view/Alumnos/Alumnos";
import AlumnosAdd from "../view/Alumnos/AlumnosAdd";
import Calificaciones from "../view/Calificaciones/Calificaciones";
import CalificacionesAdd from "../view/Calificaciones/CalificacionesAdd";
import Grupos from "../view/Grupos/Grupos";
import GruposAdd from "../view/Grupos/GruposAdd";
import Home from "../view/Home";
import Maestros from "../view/Maestros/Maestros";
import MaestrosAdd from "../view/Maestros/MaestrosAdd";
import Materias from "../view/Materias/Materias";
import MateriasAdd from "../view/Materias/MateriasAdd";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/alumnos" element={<Alumnos />}></Route>
          <Route path="/alumnos-add" element={<AlumnosAdd />}></Route>
          <Route path="/alumnos-edit/:id" element={<AlumnosEdit />}></Route>
          <Route path="/maestros" element={<Maestros />}></Route>
          <Route path="/maestros-add" element={<MaestrosAdd />}></Route>
          <Route path="/grupos" element={<Grupos />}></Route>
          <Route path="/grupos-add" element={<GruposAdd />}></Route>
          <Route path="/materias" element={<Materias />}></Route>
          <Route path="/materias-add" element={<MateriasAdd />}></Route>
          <Route path="/calificaciones" element={<Calificaciones />}></Route>
          <Route
            path="/calificaciones-add"
            element={<CalificacionesAdd />}
          ></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
