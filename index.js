// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').appendChild(items[0])
// })

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').prepend(items[items.length -1 ]) 
// })

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.image-slide');

next.addEventListener('click', function() {
    let items = slide.querySelectorAll('.item');
    slide.appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = slide.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]);
});
