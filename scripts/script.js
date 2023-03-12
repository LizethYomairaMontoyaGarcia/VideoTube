// llamamos la carpeta de video.js
import { videoTube } from "./video.js";
console.log(videoTube);

//capturamos el contenedor
const containerVideo = document.querySelector(".main_video");
console.log(containerVideo);

//permite pintar los personajes dentro de un elemento contenedor
const videoCharacters = (container, videoList) => {
  //Vaciar el contenedor
  container.innerHTML = "";
  //Recorremos el array
  videoList.forEach((video) => {
    container.innerHTML += `
                <iframe src=${video.video} alt=${video.name}>`;
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
