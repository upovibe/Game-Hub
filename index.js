let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.image-slide');
let sliderView = document.querySelector('.slider-view');

next.addEventListener('click', function() {
    let items = slide.querySelectorAll('.item');
    let nextItem = items[0].cloneNode(true);
    slide.appendChild(items[0]);
    updateSliderViewBackground(items[1]);
});

prev.addEventListener('click', function() {
    let items = slide.querySelectorAll('.item');
    let lastItem = items[items.length - 1].cloneNode(true);
    slide.prepend(lastItem);
    slide.removeChild(items[items.length - 1]);
    updateSliderViewBackground(lastItem);
});

function updateSliderViewBackground(item) {
    let backgroundImage = item.style.backgroundImage;
    sliderView.style.backgroundImage = backgroundImage;
}
