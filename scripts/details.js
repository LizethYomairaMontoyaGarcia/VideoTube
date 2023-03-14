
import {videoTube} from "../scripts/script.js"

//capturar la informacion 
const idVideoTubeStg = JSON.parse(sessionStorage.getItem("idVideoTube")) || 0; 
const idVideoTube = number(idVideoTubeStg)
console.log(idVideoTube);

//hacer la busqueda del video que le hemos dado click
const character = videoTube.find(video =>video.id ==idVideoTube)
console.log(character)

const title = document.getElementById("title");
title.inertText = character.video