let countDown;
//add event listeners for all the buttons
const buttons = document.querySelectorAll('.timer__button');
const timeButtons = Array.from(buttons);
timeButtons.forEach(element => element.addEventListener('click', timer));
document.querySelector('input[type=text]').addEventListener('keydown', timerr);


//actual timer function which recieves time in seconds
function timer (event) {
    clearInterval(countDown);
    let seconds = event.target.dataset.time;
    let now = Date.now();
    deadline(seconds);
    let expiration = now + seconds * 1000;
    displayTimeLeft(seconds);
    countDown = setInterval(() => {
        const secondsLeft = Math.round((expiration - Date.now())/1000);
        if(secondsLeft <= 0){
            clearInterval(countDown);
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function timerr (event) {
    clearInterval(countDown);
    if(event.key == 'Enter'){
        let seconds = (event.target.value) * 60;
        let now = Date.now();
        deadline(seconds);
        let expiration = now + seconds * 1000;
        displayTimeLeft(seconds);
        countDown = setInterval(() => {
            const secondsLeft = Math.round((expiration - Date.now())/1000);
            if(secondsLeft <= 0){
                clearInterval(countDown);
            }
            displayTimeLeft(secondsLeft);
        }, 1000);  
    }
}



//another function which adds the time inputed to the current time to show deadline

//upload the timer to the h1 element
 function displayTimeLeft (seconds) {
    let sec = seconds % 60;
    let min = Math.floor(seconds / 60);
    document.querySelector('h1').innerHTML = `${min}:${sec}`;
} 

function deadline (seconds) {
    let date = new Date();
    date.setTime(Date.now() + (seconds * 1000));
    let hr = date.getHours()
    let min = date.getMinutes();
    document.querySelector('.display__end-time').innerHTML = `${hr}:${min}`;
}


//upload deadline to display end time class
//accept time from input form too.