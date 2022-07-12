window.addEventListener('keydown', play);

function play(event){
    let code = event.key;
    code = code.toUpperCase();//to make it case-insensitive
    const audio = document.querySelector(`audio[data-key = ${code}]`);
    const key = document.querySelector(`.key[data-key = ${code}]`);

    audio.currentTime = 0; //for the audio to always start afresh and for the sound to come up when played 
    //in quick succesion instead of waiting for the current one to finish playing
    audio.play();
    key.classList.add('playing');
    key.addEventListener('transitionend',remove);
};

function remove(e) {
    e.target.classList.remove('playing');
}