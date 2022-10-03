const apiKey = "e81fcd60bfcf72de5f59dfb743748813";

const verListadoPeliculas = ()=>{
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`)
  .then((response) => response.json())
  .then((lista) => lista.results)
}

const verListadoSeries = ()=>{
  return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es-ES&page=5`)
  .then((response) => response.json())
  .then((lista) => lista.results)
}

const verDetalleSerie = (id)=>{
  return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=es-ES`)
  .then((respuesta) => respuesta.json())
}

const verDetallePelicula = (id)=>{
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`)
  .then((respuesta)=>respuesta.json())
}

export const servicios = {
  verListadoPeliculas,
  verListadoSeries,
  verDetalleSerie,
  verDetallePelicula
}