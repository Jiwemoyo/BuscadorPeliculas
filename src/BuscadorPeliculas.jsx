import { useState } from "react";

export const BuscadorPeliculas = () => {
  const [busqueda, setBusqueda] = useState("");
  const handleImputchange =(e)=>{
    setBusqueda(e.target.value)
  }
  return (
    <div className="container">
      <h1 className="title">Busca Pelis</h1>
      <form action="">
        <input type="text" placeholder="Escribe tu pelicula aqui" value={busqueda} onChange={handleImputchange}/>
        <button type="submit" className="search-button">
          Buscar Pelicula
        </button>
      </form>
    </div>
  );
};
