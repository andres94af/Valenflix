import { servicios } from "../servicios/servicios.js";

const detalleConteedorSerie = document.querySelector("#detalle-contenedor-s");
const detalleConteedorPelicula = document.querySelector("#detalle-contenedor-p");

function obtenerDetalleSerie(){
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  servicios.verDetalleSerie(id)
    .then((detalle) => {
      detalleConteedorSerie.innerHTML = 
      `<img src="https://image.tmdb.org/t/p/original${detalle.poster_path}" alt="img-pelicula" class="detalle-img">
      <div class="detalle-cuerpo">
        <h1 class="detalle-titulo">${detalle.name}</h1>
        <p class="detalle-descripcion">${detalle.overview}</p>
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
        <p class="detalle-descripcion">${detalle.overview}</p>
        <a class="detalle-btn" href="#">Ver online</a>
      </div>`
    });
}
obtenerDetallePelicula();