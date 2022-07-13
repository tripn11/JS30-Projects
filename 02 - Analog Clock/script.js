function clock () {
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    document.querySelector('.second-hand').style.transform = `rotate(${degrees(seconds)}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${degrees(minutes)}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees(hours)}deg)`;
}


function degrees(base60) {
    return (((base60/60)*360));
}


function hourDegrees(hr){
    hr = hr % 12;           //in case of hours greater than 12 such as 23
    return ((hr/12)*360);
}



setInterval(clock,1000);
