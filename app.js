var showHours = document.getElementById("showHours")
var showMinutes = document.getElementById("showMinutes")
var showSeconds = document.getElementById("showSeconds")


var hrs = 0;
var min = 0;
var sec = 0;


var minNumbrsAll = document.getElementById("minNumbrsAll")
var secNumbrsAll = document.getElementById("secNumbrsAll")
var hrsNumbrsAll = document.getElementById("hrsNumbrsAll")

function allHours() {
    for (var i = 1; i <= 12; i++) {
        hrsNumbrsAll.innerHTML += `<li onclick="numbrsHrs(this)" class="dropdown-item" href="#">${[i]}</li>`
    }
}
allHours();

function allMinutes() {
    for (var i = 0; i < 60; i++) {
        minNumbrsAll.innerHTML += `<li onclick="numbrsMin(this)" class="dropdown-item" href="#">${[i]}</li>`
    }
}
allMinutes();

function allSeconds() {
    for (var i = 0; i < 60; i++) {
        secNumbrsAll.innerHTML += `<li onclick="numbrsSec(this)" class="dropdown-item" href="#">${[i]}</li>`
    }
}
allSeconds();


function numbrsHrs(hoursNmbr) {

    showHours.innerHTML = hoursNmbr.innerHTML
}

function numbrsMin(minutesNmbr) {

    showMinutes.innerHTML = minutesNmbr.innerHTML
}

function numbrsSec(secondsNmbr) {

    showSeconds.innerHTML = secondsNmbr.innerHTML
}



var myInterval;

function startTimer() {

    hrs = showHours.innerHTML;
    min = showMinutes.innerHTML;
    sec = showSeconds.innerHTML;

    myInterval = setInterval(function () {

        sec++;
        showSeconds.innerHTML = sec;
        if (sec == 60) {

            sec = 0;
            showSeconds.innerHTML = sec;
            if (min == 0) {
                hrs--;
                min = 59;
                showMinutes.innerHTML = min;
                showHours.innerHTML = hrs;
            } else {

                min--;
                showMinutes.innerHTML = min;
            }
        }
       
    

    }, 1000)

}


function stopTimer() {

    clearInterval(myInterval);
}


function resetTimer() {

    hrs = 0;
    min = 0;
    sec = 0;

    showHours.innerHTML = hrs;
    showMinutes.innerHTML = min;
    showSeconds.innerHTML = sec;

}

