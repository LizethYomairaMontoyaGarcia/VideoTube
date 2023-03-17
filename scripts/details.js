
import {videoTube} from "../scripts/video.js"
console.log("paguina de details");
//capturar la informacion 
const idVideoTubeStg = JSON.parse(sessionStorage.getItem("idVideoTube")) || 0; 
const idVideoTube = Number(idVideoTubeStg);
console.log(idVideoTube);


//hacer la busqueda del video que le hemos dado click
const video = videoTube.find(video =>video.id ==idVideoTube)
console.log(video)

const title = document.getElementById("title");
console.log(title)
title.innerText = video.name;


const iframe = document.getElementById("iframe");
console.log(iframe)
iframe.innerHTML =  `<article class="container__video" data-video="video"  name=${video.id} >
<iframe data-video="video" name=${video.id} src=${video.video}  alt=${video.name}>
</article>`