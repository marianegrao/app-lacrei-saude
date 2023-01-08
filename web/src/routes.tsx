import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Professional from "./pages/Professional";
import Users from "./pages/Users";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pessoa-usuaria" element={<Users />} />
        <Route path="/profissional" element={<Professional />} />
        <Route path="*" element="Pagina não encontrada" />
      </Routes>
    </BrowserRouter>
  );
}
