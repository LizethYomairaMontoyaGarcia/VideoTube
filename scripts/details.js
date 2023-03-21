
import {videoTube} from "../scripts/video.js"
console.log("paguina de details");
//capturar la informacion 
const idVideoTubeStg = JSON.parse(sessionStorage.getItem("idVideoTube")) || 0; 
const idVideoTube = Number(idVideoTubeStg);
console.log(idVideoTube);

const videoLista = JSON.parse(sessionStorage.getItem("videoTube")) || videoTube;

//hacer la busqueda del video que le hemos dado click
const video = videoLista.find(video =>video.id ==idVideoTube)
console.log("video", video)

const title = document.getElementById("title");
console.log(title)
title.innerText = video.name;


const iframe = document.getElementById("iframe");
console.log(iframe)
iframe.innerHTML =  `<article class="container__video__Reproduce" data-video="video"  name=${video.id} >
<iframe data-video="video" name=${video.id} src=${video.video}  alt=${video.name}>
</article>`

//------Escuchar el click del logo de la página para que redireccione a la página principal-----

const imagen = document.querySelector(".header__figure");

imagen.addEventListener("click", () => {
  window.location.href = "../index.html";
});






//capturamos el contenedor para mostrar la lista de videos
const containerVideo = document.querySelector(".main_video");
console.log(containerVideo);

const filterVideo = videoLista.filter((item)=> item.id !== idVideoTube);
console.log(filterVideo)


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

document.addEventListener("DOMContentLoaded", () => {
  videoCharacters(containerVideo, filterVideo);
});