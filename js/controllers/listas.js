import { servicios } from "../servicios/servicios.js";

const containerPeliculas = document.querySelector("#container_peliculas");
const containerSeries = document.querySelector("#container_series");

const listadoPeliculas = ()=>{
  servicios.verListadoPeliculas().then((results) => {
    results.forEach((movie) => {
      let divTarjeta = document.createElement("div");
      divTarjeta.classList.add("tarjeta-pelicula");
      var contenido = `
      <div class="tarjeta-imagen"><img class="img" src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" alt="img-serie"></div>
      <div class="tarjeta-cuerpo">
        <h5 class="tarjeta-titulo">${movie.title}</h5>
        <p class="tarjeta-descripcion">${movie.overview}</p>
        <a class="tarjeta-boton" href="detalle-pelicula.html?id=${movie.id}">Ver mas</a>
      </div>`;
      divTarjeta.innerHTML = contenido;
      containerPeliculas.appendChild(divTarjeta);
    });
  });
}
listadoPeliculas();

const listadoSeries = ()=>{
  servicios.verListadoSeries().then((results)=>{
    results.forEach((movie) => {
      let divTarjeta = document.createElement("div");
      divTarjeta.classList.add("tarjeta-serie");
      var contenido = `
      <div class="tarjeta-imagen"><img class="img" src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" alt="img-serie"></div>
      <div class="tarjeta-cuerpo">
        <h5 class="tarjeta-titulo">${movie.name}</h5>
        <p class="tarjeta-descripcion">${movie.overview}</p>
        <a class="tarjeta-boton" href="detalle-serie.html?id=${movie.id}">Ver mas</a>
      </div>`;
      divTarjeta.innerHTML = contenido
      containerSeries.appendChild(divTarjeta);
    });
  });
}
listadoSeries();