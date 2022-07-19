//copied function, the function debounce delayes the invoking of any function given to it everysingle time.
//so in this case it delays the calling of checkslide function by the eventListener by 20milliseconds.
//this allows for a smoother scroll of the page
function debounce(func, wait = 20, immediate = true) { 
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  

  const images = document.querySelectorAll('.slide-in');
  function checkSlide () {
    images.forEach(image => {
    const slidePoint = (window.scrollY + window.innerHeight)-image.height/2;//window.scrollY is the height in pixels that have been scrolled from the top of the window.
    const imageBottom = image.offsetTop + image.height;//window.innerHeight is the height of the window still in pixel
    const imageHalfShown = slidePoint > image.offsetTop//image.offsetTop gives the length from the top of the window to the top of the image.
    const imageNotScrolledPast = window.scrollY < imageBottom;
    imageHalfShown && imageNotScrolledPast ? image.classList.add('active') : image.classList.remove('active');
    console.log(slidePoint);
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));
  