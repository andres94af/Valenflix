const apiKey = "e81fcd60bfcf72de5f59dfb743748813";
const img_url = "https://image.tmdb.org/t/p/original";

function obtenerDetalle(){
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const api_url = `https://api.themoviedb.org/3/tv/${id}?api_key=` + apiKey + "&language=es-ES";
  const htmlResponse = document.querySelector("#detalle-contenedor");
  fetch(api_url)
    .then((respuesta) => respuesta.json())
    .then((detalle) => {
      htmlResponse.innerHTML = 
      `<img src="${img_url}${detalle.poster_path}" alt="img-pelicula" class="detalle-img">
      <div class="detalle-cuerpo">
        <h1 class="detalle-titulo">${detalle.name}</h1>
        <p class="detalle-descripcion">${detalle.overview}</p>
        <a class="detalle-btn" href="#">Ver online</a>
      </div>`
    });
}
obtenerDetalle(); 