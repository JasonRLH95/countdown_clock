const header= document.getElementById('time');


// Set the date we're counting down to
var catchTime = new Date()
var dayOfMonth = catchTime.getDate()
var month = catchTime.getMonth()
var year = catchTime.getFullYear()
var hours = catchTime.getHours()
var minutes = catchTime.getMinutes()
var seconds = catchTime.getSeconds()
var countDownDate = new Date(`${month+1} ${dayOfMonth}, ${year} ${hours+4}:${minutes+5}:${seconds}`).getTime();
var sound = new Audio();
sound.src = '/countdown_clock/sounds/shortAlert.mp3';
// sound.load();
// var play = sound.play();
console.log(sound.src)
var audio = document.createElement("Audio");

var x = setInterval(function() {
    document.body.appendChild(audio);
    audio.src = "/countdown_clock/sounds/shortAlert.mp3";
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(hours===4&&minutes===0&&seconds===0){
        header.style.color = 'blue';
        audio.play();
    }
    if((hours===3&&minutes===30&&seconds===0)||(hours===3&&minutes===0&&seconds===0)||(hours===2&&minutes===30&&seconds===0)||(hours===2&&minutes===0&&seconds===0)||(hours===1&&minutes===30&&seconds===0)||(hours===1&&minutes===0&&seconds===0)){
        header.style.color = 'red';
        audio.play();
    }
    if((hours===3&&minutes===59&&seconds===55)||(hours===3&&minutes===29&&seconds===55)||(hours===2&&minutes===59&&seconds===55)||(hours===2&&minutes===29&&seconds===55)||(hours===1&&minutes===59&&seconds===55)||(hours===1&&minutes===29&&seconds===55)||(hours===0&&minutes===59&&seconds===55)){
        header.style.color = 'black'
    }
    if(hours===0&&minutes===30&&seconds===0){
        header.style.color = 'red';
        header.style.fontSize = '100px'
        audio.play();
    }
    if(hours===0&&minutes===0&&seconds===0){
        audio.play();
    }
    document.getElementById("time").innerHTML =hours + "h "+ minutes + "m " + seconds + "s ";

    if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);