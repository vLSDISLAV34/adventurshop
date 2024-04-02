const video = document.getElementById("video1");
const next_BT = document.getElementById("next");
const pause_BT = document.getElementById("pause");
const sound_BT = document.getElementById("sound");
const soundless_BT = document.getElementById("soundless");
const massiv = ["Aurora - Run Away (Minecraft Cinematic)", "Minecraft Cinematic - Nostalgia Shaders - 4K 60FPS", "The Beauty Of Minecraft _ 4K Edit"]
let number=0
function next(){
    if (number<massiv.length -1){
        number=number+1;
    }
    else{
        number=0;
    }
    console.log(number)
    video.src=`video/${massiv[number]}.mp4`
}
function prev(){
    if (number!=0){
        number=number-1
    }
    else{
        number=massiv.length -1
    }
    console.log(number)
    video.src=`video/${massiv[number]}.mp4`
}
function mute() {
    if(video.muted){
        video.muted=false;
        sound_BT.src = "Img/sound.png"
    } else {
        video.muted=true
        sound_BT.src = "Img/soundless.png"
    }
}  
pause_BT.addEventListener("click", () => {
    if(video.paused) {
        video.play();
        pause_BT.src = "Img/pause.png"
    } else {
        video.pause()
        pause_BT.src = "Img/play.png"
    }
})