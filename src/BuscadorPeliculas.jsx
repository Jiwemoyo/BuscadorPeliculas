import { useState } from "react";

export const BuscadorPeliculas = () => {

  const urlBase= 'https://api.themoviedb.org/3/search/movie'
  const API_KEY ='6fed1f553c85152ca941434b2802f975'

  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([])
  const handleImputchange =(e)=>{
    setBusqueda(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    fetchPeliculas()
  }
  const fetchPeliculas = async()=>{
    try {
      const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
    } catch (error) {
      console.log(`Ha ocurrido el siguiente error: ${error}`)
    }
  }
  return (
    <div className="container">
      <h1 className="title">Busca Pelis</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Escribe tu pelicula aqui" value={busqueda} onChange={handleImputchange}/>
        <button type="submit" className="search-button">
          Buscar Pelicula
        </button>
      </form>
    </div>
  );
};
