import { servicios } from "../servicios/servicios.js";

const containerPeliculas = document.querySelector("#container_peliculas");
const containerSeries = document.querySelector("#container_series");
const carrousel = document.querySelector("#img-banner");

const listadoBanner = ()=>{
  servicios.verListadoPeliculasPopular().then((results) => {
    results.forEach((movie) => {
      let divImg = document.createElement("div");
      divImg.classList.add("carousel-item");
      var contenido = `<img id="img-banner" src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" class="d-block w-100" alt="imagen banner" />
      <div class="carousel-caption d-none d-md-block">
      <a class="titulo-banner-btn" href="detalle-pelicula.html?id=${movie.id}"><h5 class="titulo-banner">${movie.title}</h5></a>

      <p class="estrellas-banner">${movie.vote_average}/10 &#9733</p>
    </div>`;
      divImg.innerHTML = contenido;
      carrousel.appendChild(divImg);
    });
  });
}
listadoBanner();

const listadoPeliculas = ()=>{
  servicios.verListadoPeliculas().then((results) => {
    results.forEach((movie) => {
      let divTarjeta = document.createElement("div");
      divTarjeta.classList.add("tarjeta");
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
      divTarjeta.classList.add("tarjeta");
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