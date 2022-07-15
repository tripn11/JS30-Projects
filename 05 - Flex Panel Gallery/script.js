let panels = document.querySelectorAll('.panel');
panels.forEach( item => {
    item.addEventListener('click', beauty);
})

function beauty () {
    panels.forEach( item => {
        item.classList.remove('open');
        item.classList.remove('open-active');
    })

    this.classList.add('open');
    this.classList.add('open-active'); 
}