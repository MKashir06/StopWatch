var hours = 0;
var mins = 0;
var secs = 0;
var milSecs = 0;

var hoursShow = document.getElementById("hours");
var minsShow = document.getElementById("mins");
var secsShow = document.getElementById("secs");
var milSecsShow = document.getElementById("milSecs");
var interval;


function counter() {
    milSecs++;
    milSecsShow.innerHTML = milSecs;
    if (milSecs >= 100) {
        secs++;
        secsShow.innerHTML = secs;
        milSecs = 0;
    } else if (secs >= 60) {
        mins++;
        minsShow.innerHTML = mins;
        secs = 0;
    } else if (mins >= 60) {
        hours++;
        hoursShow.innerHTML = hours;
        mins = 0;
    }
}

function startCounter() {
    interval = setInterval(counter, 10);

    var btnStart = document.getElementById("startBtn");
    var btnStop = document.getElementById("stopBtn");
    var btnReset = document.getElementById("resetBtn");

    if (btnStart.style.display === "none") {
        btnStart.style.display = "inline";
    } else if (btnStop.style.display === "inline") {
        btnStop.style.display = "none";
    } else if (btnReset.style.display === "inline") {
        btnReset.style.display = "none";
    } else {
        btnStart.style.display = "none";
        btnStop.style.display = "inline";
        btnReset.style.display = "inline";
    }
}

function stopCounter() {
    clearInterval(interval);

    var btnStop = document.getElementById("stopBtn");
    var btnResume = document.getElementById("resumeBtn");

    if (btnStop.style.display === "none") {
        btnStop.style.display = "inline";
    } else if (btnResume.style.display === "inline") {
        btnResume.style.display = "none";
    } else {
        btnStop.style.display = "none";
        btnResume.style.display = "inline";
    }
}

function resumeCounter() {
    interval = setInterval(counter, 10);

    var btnResume = document.getElementById("resumeBtn");
    var btnStop = document.getElementById("stopBtn");

    if (btnResume.style.display === "none") {
        btnResume.style.display = "inline";
    } else if (btnStop.style.display === "inline") {
        btnStop.style.display = "none";
    } else {
        btnResume.style.display = "none";
        btnStop.style.display = "inline";
    }
}

function resetCounter() {
    hours = 0;
    mins = 0;
    secs = 0;
    milSecs = 0;

    hoursShow.innerHTML = hours;
    minsShow.innerHTML = mins;
    secsShow.innerHTML = secs;
    milSecsShow.innerHTML = milSecs;

    clearInterval(interval);


    var btnReset = document.getElementById("resetBtn");
    var btnStart = document.getElementById("startBtn");
    var btnStop = document.getElementById("stopBtn");
    var btnResume = document.getElementById("resumeBtn");

    if (btnReset.style.display === "none" && btnStop.style.display === "none") {
        btnReset.style.display = "inline";
        btnStop.style.display = "inline";
    } else if (btnReset.style.display === "none" && btnResume.style.display === "none") {
        btnReset.style.display = "inline";
        btnResume.style.display = "inline";
    } else if (btnStart.style.display === "inline") {
        btnStart.style.display = "none"
    } else {
        btnReset.style.display = "none";
        btnStop.style.display = "none";
        btnResume.style.display = "none";
        btnStart.style.display = "inline";
    }
}