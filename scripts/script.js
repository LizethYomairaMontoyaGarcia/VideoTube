// llamamos la carpeta de video.js
import { videoTube } from "./video.js";
console.log(videoTube);

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
    <iframe data-video="video" name=${video.id} src=${video.video}  alt=${video.name}>
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

const buttonTraining = document.getElementById(`button-training`);
buttonTraining.addEventListener("click", () => {
  filteredVideoCategory(buttonTraining);
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
  } else if (category == buttonTraining) {
    categoryVideo("entrenamiento");
    console.log("training");
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
    // console.log('Quiero ir a la página de detalles de este personaje');
    const id = event.target.getAttribute("name");

    sessionStorage.setItem("idVideoTube", JSON.stringify(id));
    window.location.href = "./pages/details.html";
  }
});

//incertar un nuevo video

let linkVideo = [];

const form = document.querySelector(".formulario");
console.log("formulario", form);
const link = document.querySelector(".link");
console.log("link", link);
const name = document.querySelector(".name");
console.log("nombre", name);

function validate(event) {
  console.log("holaa event");
  //event.preventDeFault();
  linkVideo = [];

  if (link.value) {
    linkVideo = linkVideo.concat("campo obligatorio");
    console.log(link);
  }
  if (name.value) {
    linkVideo = linkVideo.concat("campo obligatorio");
  } 
  else {
  }
}
form.addEventListener("submit", validate);
