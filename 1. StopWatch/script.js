var milliseconds = document.getElementById('milliseconds');
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hours');
var start = document.getElementById('start');
var wait = document.getElementById('stop');
var reset = document.getElementById('reset');
var millisec = 0;
var sec=0;
var min=0;
var hr=0;
var timeInterval;
const timer = () => {
    millisec++;
    if (millisec < 9) {
        milliseconds.innerHTML = "0" + millisec;
    }
    if (millisec > 9) {
        milliseconds.innerHTML = millisec;
    }
    if (millisec > 99) {
        seconds.innerHTML = "0" + sec++;
        millisec = 0;
        milliseconds.innerHTML = "0" + millisec;
    }
    if (sec < 9) {
        seconds.innerHTML = "0" + sec;
    }
    if (sec > 9) {
        seconds.innerHTML = sec;
    }
    if (sec > 60) {
        minutes.innerHTML = "0" + min++;
        sec = 0;
        seconds.innerHTML = "0" + sec;
    }
    if (min < 9) {
        minutes.innerHTML = "0" + min;
    }
    if (min > 9) {
        minutes.innerHTML = min;
    }
    if (min > 60) {
        hours.innerHTML = "0" + hr++;
    }
    if(hr<9){
        hours.innerHTML = "0" + hr;
    }
    if(hr>9){
        hours.innerHTML =  hr;
    }

}
//start
start.addEventListener("click", ()=>{
    console.log("hello from start")
    timeInterval=setInterval(timer,10);
})
//stop
wait.addEventListener("click", ()=>{
    console.log("hello from stop")
    clearInterval(timeInterval);
});
//reset
reset.addEventListener("click", ()=>{
    console.log("hello from reset")
    clearInterval(timeInterval);
    sec="00";
    min="00";
    millisec="00";
    hr="00";
    milliseconds.innerHTML=millisec;
    seconds.innerHTML=sec;
    minutes.innerHTML=min;
    hours.innerHTML=hr;
});


