import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Buscador } from "../components/Buscador";
import { Navbar } from "../components/Navbar";
import { url } from "../helpers/url";

export const AppRouter = () => {
  const [datos, setDatos] = useState({
    results: [],
  });

  const { results } = datos;

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setDatos(data);
  };
  // console.log(results);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Buscador personajes={results} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
