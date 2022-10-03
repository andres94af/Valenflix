import { servicios } from "../servicios/servicios.js";

const detalleConteedorSerie = document.querySelector("#detalle-contenedor-s");
const detalleConteedorPelicula = document.querySelector("#detalle-contenedor-p");

function obtenerDetalleSerie(){
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  servicios.verDetalleSerie(id)
    .then((detalle) => {
      const temporadas = detalle.seasons;
      detalleConteedorSerie.innerHTML = 
      `<img src="https://image.tmdb.org/t/p/original${detalle.poster_path}" alt="img-pelicula" class="detalle-img">
      <div class="detalle-cuerpo">
        <h1 class="detalle-titulo">${detalle.name}</h1>
        <p class="detalle-descripcion">${detalle.tagline}</p>
        <h5 class="detalle-sinopsis" >Sinopsis:</h5>
        <p class="detalle-descripcion">${detalle.overview}</p>
        <p class="detalle-fecha">Fecha de lanzamiento: ${detalle.first_air_date}</p>
        <p class="detalle-fecha">Cantidad de temporadas: ${temporadas.length}</p>
        <p class="detalle-estrellas">${Math.round(detalle.vote_average)}/10 &#9733</p>
        <a class="detalle-btn" href="#">Ver online</a>
      </div>`
    });
}
obtenerDetalleSerie(); 

function obtenerDetallePelicula(){
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  servicios.verDetallePelicula(id)
    .then((detalle) => {
      detalleConteedorPelicula.innerHTML = 
      `<img src="https://image.tmdb.org/t/p/original${detalle.poster_path}" alt="img-pelicula" class="detalle-img">
      <div class="detalle-cuerpo">
        <h1 class="detalle-titulo">${detalle.title}</h1>
        <p class="detalle-descripcion">${detalle.tagline}</p>
        <h5 class="detalle-sinopsis" >Sinopsis:</h5>
        <p class="detalle-descripcion">${detalle.overview}</p>
        <p class="detalle-fecha">Fecha de lanzamiento: ${detalle.release_date}</p>
        <p class="detalle-estrellas">${Math.round(detalle.vote_average)}/10 &#9733</p>
        <a class="detalle-btn" href="#">Ver online</a>
      </div>`
    });
}
obtenerDetallePelicula();