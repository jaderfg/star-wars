export const obtenerDatosPorNombre = (name, personajes) => {
    let nombre = name.toLocaleLowerCase();

    return personajes.filter((personaje) => personaje.name.toLocaleLowerCase().includes(nombre));
};
