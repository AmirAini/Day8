var vid = document.getElementById('vid');
var isPlaying = false;
var vol = 1;

// var title = fullpath.substr\Users\amirh\Desktop\InvokeFrontEnd\Day8\Day8 Challenge


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
