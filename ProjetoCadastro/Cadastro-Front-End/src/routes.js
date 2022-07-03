import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index/index";
import Details from "./pages/details/details";
import Insert from "./pages/insert/insert";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route path="/usuarios/:id" element={<Details />} />
      <Route path="/CriarUsuarios" element={<Insert />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
