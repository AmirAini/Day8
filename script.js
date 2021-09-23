var vid = document.getElementById('vid');
var isPlaying = false;
var vol = 1;


var currentId = 0;

var title = document.getElementById('title');

title.innerHTML = list[currentId].title;

// var list = [{Id:1, title: "One"} , {Id:2, title: "Two",} , {Id:3, title: "Three"}, {Id:4, title: "Four",} , {Id:5, title: "Five"}];


//HOW TO CHANGE TITLE WHEN SONG CHANGE

// function init() {
   //reset music duration and setup audio
//     var audio =
//     document.getElementById(currentAudio) === null ?
//     new Audio() :
//     document.getElementById(currentAudio);
//     audio.src = list[currentId].url;
//     audio.id = currentAudio;
//     document.getElementById(currentAudio) === null ?
//     document.body.appendChild(audio) :

// }

function mute () {
    if (vol>0) {
         vol = 0;
    }
        console.log (vol);
    
}

function playPause () {
    if(isPlaying== false) {
        vid.play();
        isPlaying = true;
        document.getElementById('playPause').innerHTML = "<i class='fas fa-pause'></i>";
        return; //stop the logic scope
    }

    if(isPlaying== true) {
        vid.pause();
        isPlaying = false;
        document.getElementById('playPause').innerHTML = "<i class='fas fa-play'></i>";
        return;
    }
}

function volUp () {
    vol += 0.1; //operation

    if (vol >=1) { //logic
        vol =1;
    }

    console.log (vol);

    vid.vol = vol; //output
}

function volDown () {
    vol -= 0.1 //operation

    if (vol<=0) {
        vol = 0;
    }

    console.log (vol);

    vid.vol = vol; //output
}

function vidChange(fileName) {
    vid.src = fileName;
}
