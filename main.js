const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time-watch');

let startTime = 0;
let intervalId = 0;
let elapstime = 0;
let keepTime = 0;
let bool = true;
let bool2 = true;

start.addEventListener('click',function(){
    if(bool == false){
        return;
    }
    startTime = Date.now() ;
    bool = false;
    bool2 = true
    countup();
});

stop.addEventListener('click',function(){
    if(bool2 == false){
        return;
    }
    keepTime = elapstime;
    bool = true;
    bool2 = false;
    stopTime();
});

reset.addEventListener('click',function(){
    resetTime();
})

function countup(){
    intervalId = setTimeout(function(){
        elapstime = Date.now() - startTime + keepTime;
        outTime();
        countup();
    },10);
}

function outTime(){
    let m = Math.floor(elapstime / 60000);
    let s = Math.floor(elapstime % 60000 / 1000); 
    let ms = elapstime % 1000;
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);
    ms = ('0' + ms).slice(-2);
    time.textContent = m + ':' + s + ':' + ms;
}

function stopTime(){
    clearTimeout(intervalId);
}

function resetTime(){
    elapstime = 0;
    keepTime = 0;
    outTime();
}




