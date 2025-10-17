let menu = document.querySelector('#hero-description');
let navlist =document.querySelector('.hero-section');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal (
    {
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    }
);

/* Hero Animations */

sr.reveal('h1', {delay:200, origin:'top', reset:false});
sr.reveal('h2', {delay:200, origin:'top', reset:false});
sr.reveal('p',{delay:200,origin:'left',reset:false});
sr.reveal('.hero-img',{delay:500, origin:'right', reset:false});

//Footer animations
sr.reveal('footer',{delay:50,origin:'bottom', reset:false});
// Show borderbox deppending to page status 

// Show borderbox deppending to page status

function openFullscreen(img) {
    if (img.requestFullscreen) {
        img.requestFullscreen();
    }else if (img.webkitRequestFullscreen) { /* Safari */
    img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { /* IE11 */
    img.msRequestFullscreen();
}
}