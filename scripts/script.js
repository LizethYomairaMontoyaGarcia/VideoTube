// llamamos la carpeta de video.js
//importar videotube con otro nombre como tube
import { videoTube as tube } from "./video.js";
console.log(tube);

//obtener de seciontorag la lista de videos que se inserto en el formulario y insertalo a la pantalla
let videoTube = JSON.parse(sessionStorage.getItem("videoTube")) || tube;
//actualizar videotube con lo que hay en sesionstorage



//capturamos el contenedor
const containerVideo = document.querySelector(".main_video");
console.log(containerVideo);

//permite pintar los videos dentro de un elemento contenedor
const videoCharacters = (container, videoList) => {
  //Vaciar el contenedor
  container.innerHTML = "";
  //Recorremos el array
  videoList.forEach((video) => {
    container.innerHTML += `
    <article class="container__video" data-video="video"  name=${video.id} >
    <img class="imgs__video" data-video="video" name=${video.id} src=${video.img}  alt=${video.name}>
    <h4 class="video__name" data-video='video' name=${video.id}>${video.name}</h4>
    </article>`;
  });
};

//3. Vamos a escuchar al evento DomContentLoad y cuando suceda este evento se deben imprimir
document.addEventListener("DOMContentLoaded", () => {
  videoCharacters(containerVideo, videoTube);
});

const buttonAll = document.getElementById(`button-all`);
buttonAll.addEventListener("click", () => {
  filteredVideoCategory(buttonAll);
});

const buttonRecipes = document.getElementById(`button-recipes`);
buttonRecipes.addEventListener("click", () => {
  filteredVideoCategory(buttonRecipes);
});

const buttonProgramming = document.getElementById(`button-programming`);
buttonProgramming.addEventListener("click", () => {
  filteredVideoCategory(buttonProgramming);
});

const buttonChildish = document.getElementById(`button-childish`);
buttonChildish.addEventListener("click", () => {
  filteredVideoCategory(buttonChildish);
});
const buttonTravel = document.getElementById(`button-travel`);
buttonTravel.addEventListener("click", () => {
  filteredVideoCategory(buttonTravel);
});

function filteredVideoCategory(category) {
  if (category == buttonRecipes) {
    categoryVideo("resetas");
    console.log("recipes");
  } else if (category == buttonProgramming) {
    categoryVideo("programacion");
    console.log("programming");
  } else if (category == buttonChildish) {
    categoryVideo("infantil");
    console.log("childish");
  } else if (category == buttonTravel) {
    categoryVideo("viajes");
    console.log("travel");
  } else {
    console.log("else");
    //debugger;
    videoCharacters(containerVideo, videoTube);
  }
}

function categoryVideo(category) {
  const listaVideos = []; // array vacio
  videoTube.forEach((video) => {
    if (category == video.category) {
      console.log("El video es ", video);
      listaVideos.push(video);
    }
  });
  videoCharacters(containerVideo, listaVideos);
}



//Vamos a escuchar el evento click sobre los videos
document.addEventListener("click", (event) => {
  console.log("estoy utilizando el evento ", event);

  const dataVideoTubeAttribute = event.target.getAttribute("data-video");
  if (dataVideoTubeAttribute === "video") {
    //debugger;
    // console.log('Quiero ir a la página de detalles de este personaje');
    const id = event.target.getAttribute("name");

    sessionStorage.setItem("idVideoTube", JSON.stringify(id));
    
    window.location.href = "./pages/details.html";
  }
});



//FORMULARIO
//insertar un nuevo video
const form = document.querySelector(".formulario");
console.log("formulario", form);
const link = document.querySelector(".urlVideo");
console.log("link", link);
const name = document.querySelector(".name");
console.log("nombre", name);
const img = document.querySelector(".urlImg");
console.log("nombre", img);
const category = document.querySelector(".category");
console.log("nombre", category);
const enviar = document.querySelector(".enviar");
console.log("nombre", enviar);

function validate(event) {
  //console.log("holaa event",event.preventDeFault());
  //event.preventDeFault();
console.log("aca el form",form);
console.log("aca el link",link);
  //OBJETO
  const identidadDeVideos = {
    id: videoTube.length+1,
    video: link.value,
    name: name.value,
    img: img.value,
    category: category.value,
  };

  if (link.value) {
    console.log(link);
  }
  if (name.value) {
    console.log(name);
  }
  if (img.value) {
    console.log(img);
  }
  if (category.value) {
    console.log(category);
  } else {
  }
  console.log("identidad videos", identidadDeVideos);

  videoTube.push(identidadDeVideos);
 
  sessionStorage.setItem("videoTube", JSON.stringify(videoTube));

  console.log("lista de videos", videoTube);

  videoCharacters(containerVideo, videoTube);
}
enviar.addEventListener("click", validate);





//busqueda de videos por nombres
const filterByName = (termSearch, videoList) => {
  const videoFiltrados = videoList.filter((video) =>
    video.name.toLowerCase().includes(termSearch.toLowerCase())
  );
  const result = videoFiltrados.length ? videoFiltrados : videoList;

  const resultBusque = videoFiltrados.length ? false : "No existe este video";

  return {
    resultSearch: result,
    messageSearch: resultBusque,
  };
};

const searchForm = document.querySelector(".search-video");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(searchForm.children);

  const formVideoTube = Array.from(searchForm.children);

  const inputSearch = formVideoTube.find((item) => item.localName === "input");

  console.log(inputSearch.value);

  const searchTermVideoTube = inputSearch.value;

  if (searchTermVideoTube) {
    const searchResult = filterByName(searchTermVideoTube, videoTube);

    console.log(searchResult);

    videoCharacters(containerVideo, searchResult.resultSearch);

    if (searchResult.messageSearch) {
      Swal.fire("Oops!", searchResult.messageSearch, "error");
    }
  } else {
    Swal.fire("Oops!", "No ingresaste un video", "error");
  }
});



