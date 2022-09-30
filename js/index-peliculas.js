const apiKey = "e81fcd60bfcf72de5f59dfb743748813";

const api_url = "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=es-ES&page=1";

const img_url = "https://image.tmdb.org/t/p/original";

const htmlResponse = document.querySelector("#container_peliculas");

fetch(api_url)
  .then((response) => response.json())
  .then((lista) => lista.results)
  .then((results) => {
    console.log(results);
    results.forEach((movie) => {
      const divTarjeta = document.createElement(`div`);
      divTarjeta.classList.add("tarjeta");

      const imgTarjeta = document.createElement(`img`);
      imgTarjeta.classList.add("tarjeta-imagen");

      const divCuerpoTarjeta = document.createElement(`div`);
      divCuerpoTarjeta.classList.add("tarjeta-cuerpo");

      const tituloTarjeta = document.createElement(`h5`);
      tituloTarjeta.classList.add("tarjeta-titulo");

      const descripcionTarjeta = document.createElement(`p`);
      descripcionTarjeta.classList.add("tarjeta-descripcion");

      const btnTarjeta = document.createElement(`button`);
      btnTarjeta.classList.add("tarjeta-boton");
      btnTarjeta.appendChild(document.createTextNode("Ver trailer"));

      imgTarjeta.setAttribute("src", `${img_url}${movie.backdrop_path}`);
      tituloTarjeta.appendChild(document.createTextNode(movie.title));
      descripcionTarjeta.appendChild(document.createTextNode(movie.overview));
      divTarjeta.appendChild(imgTarjeta);
      divTarjeta.appendChild(divCuerpoTarjeta);
      divCuerpoTarjeta.appendChild(tituloTarjeta);
      divCuerpoTarjeta.appendChild(descripcionTarjeta);
      divCuerpoTarjeta.appendChild(btnTarjeta);
      htmlResponse.appendChild(divTarjeta);
    });
  });
