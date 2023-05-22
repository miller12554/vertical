import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
// Pages
import Posts from "./pages/Posts";
import Acerca from "./pages/Acerca";
import NoExiste from "./pages/NoExiste";
import Inicio from "./pages/Inicio";

import Nav from "react-bootstrap/Nav";

export default function App() {
  return (
    <>
      <h2>Vertical Tabs</h2>
      <p>Click on the buttons inside the tabbed menu:</p>
      <div className="tab">
        <button className="tablinks">London</button>
        <Nav.Link as={NavLink} to="/posts">
          Posts
        </Nav.Link>
      </div>
      <div className="tabcontent">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="*" element={<NoExiste />} />
        </Routes>
      </div>
    </>
  );
}
