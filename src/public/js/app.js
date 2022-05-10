const socket = io()

const myFace = document.getElementById("myFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");

let myStream;
let muted = false;
let cameraOff = false;


async function getMedia(){
    try {
        myStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
        });
        myFace.srcObject = myStream;
        console.log(myStream);
    } catch (e) {
        console.log(e);
    }
}

getMedia();

function handleCameraClick() {
    if(cameraOff) {
        cameraBtn.innerText = "Turn Camera Off";
        cameraOff = true;
    } else {
        cameraBtn.innerText = "Turn Camera On";
        cameraOff = false;
    }
}

function handleMuteClick() {
    if(!muted) {
        muteBtn.innerText = "Unmute";
        muted = true;
    } else {
        muteBtn.innerText = "mute";
        muted = false;
    }
}

muteBtn.addEventListener("click", handleMuteClick);
cameraBtn.addEventListener("click", handleCameraClick);