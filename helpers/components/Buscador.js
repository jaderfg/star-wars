import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import querystring from "query-string";
import { obtenerDatosPorNombre } from "../selectors/obtenerDatosPorNombre";
import "../styles/Buscador.css";
import { Cards } from "./Cards";

export const Buscador = ({ personajes }) => {
  const navigate = useNavigate();
  // console.log(personajes);
  const location = useLocation();
  const { q = "" } = querystring.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  const datosFiltrados = obtenerDatosPorNombre(searchText, personajes);

  return (
    <React.Fragment>
      <span>
        <form onSubmit={handleSubmit} className="buscador">
          <input
            type="text"
            placeholder="Encuentra tu Personaje"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={handleInputChange}
            className="inputbuscador"
          />
        </form>
      </span>

      <main>
        <section className="grilla">
          {datosFiltrados.map((dato) => (
            <Cards key={dato.id} {...dato} />
          ))}
        </section>
      </main>
    </React.Fragment>
  );
};
