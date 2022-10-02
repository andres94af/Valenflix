const apiKey = "e81fcd60bfcf72de5f59dfb743748813";


const api_url = "https://api.themoviedb.org/3/tv/popular?api_key=" + apiKey + "&language=es-ES&page=5";

const img_url = "https://image.tmdb.org/t/p/original";

const htmlResponse = document.querySelector("#container_series");

fetch(api_url)
  .then((response) => response.json())
  .then((lista) => lista.results)
  .then((results) => {
    results.forEach((movie) => {
      let divTarjeta = document.createElement("div");
      divTarjeta.classList.add("tarjeta");
      var contenido = `
      <div class="tarjeta-imagen"><img class="img" src="${img_url}${movie.backdrop_path}" alt="img-serie"></div>
      <div class="tarjeta-cuerpo">
        <h5 class="tarjeta-titulo">${movie.name}</h5>
        <p class="tarjeta-descripcion">${movie.overview}</p>
        <a class="tarjeta-boton" href="detalle-serie.html?id=${movie.id}">Ver temporadas</a>
      </div>`;

      divTarjeta.innerHTML = contenido
      htmlResponse.appendChild(divTarjeta);
    });
  });
