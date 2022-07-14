let desire,desireArr,desireVal,suffix;

desire = document.querySelectorAll('input');
desireArr = Array.from(desire);

desireArr.forEach(function(element) {
    element.addEventListener('change',fufillDesire);
    element.addEventListener('mousemove',fufillDesire);
})


function fufillDesire() {
    suffix = this.dataset.sizing || '';//this is to prevent outputing "undefined" when base is selected as it doesn't have any data-sizing attribute.
    document.documentElement.style.setProperty("--"+this.name,this.value+suffix);
    console.log(suffix);
}

