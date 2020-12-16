//SPLIDE
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type   : 'loop'
    }).mount();
} );

//SCROLLREVEAL
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'top'
})

sr.reveal('.header-content-left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
})

sr.reveal('.header-content-right', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
})

sr.reveal('.testimonial', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
})

sr.reveal('.scroll', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
})



