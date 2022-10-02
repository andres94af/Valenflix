// const api_url = `https://api.themoviedb.org/3/movie/${id}?api_key=` + apiKey + "&language=es-ES&";

const apiKey = "e81fcd60bfcf72de5f59dfb743748813";
const api_url = "https://api.themoviedb.org/3/movie/165?api_key=" + apiKey + "&language=es-ES&page=1";
const img_url = "https://image.tmdb.org/t/p/original";
const htmlResponse = document.querySelector("#detalle-contenedor");

fetch(api_url)
  .then((respuesta) => respuesta.json())
  .then((detalle) => {
    console.log(api_url);
    console.log(detalle)
    htmlResponse.innerHTML = 
    `<img src="${img_url}${detalle.poster_path}" alt="img-pelicula" class="detalle-img">
    <div class="detalle-cuerpo">
      <h1 class="detalle-titulo">${detalle.title}</h1>
      <p class="detalle-descripcion">${detalle.overview}</p>
      <a class="detalle-btn" href="#">Ver online</a>
    </div>`
  });

