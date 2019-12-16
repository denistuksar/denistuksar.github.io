function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    targetPosition -= 83;
    var startPosition = window.pageYOffset;
    var startTime = null;

    function animation(currentTime) {
        if (startTime == null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if(timeElapsed<duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
    var element = document.getElementById("collapsibleNavbar");
    element.classList.remove("show");
}

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(window.pageYOffset>100){
        toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
};

var section1 = document.querySelector('.section-1');
var section2 = document.querySelector('.section-2');
var section3 = document.querySelector('.section-3');
var section0 = document.querySelector('.section-0');
var toTop = document.querySelector('.toTop');


section1.addEventListener('click', () => {
    smoothScroll('.section1', 1000);
})

section2.addEventListener('click', () => {
    smoothScroll('.section2', 1000);
})

section3.addEventListener('click', () => {
    smoothScroll('.section3', 1000);
})

section0.addEventListener('click', () => {
    smoothScroll('.section0', 1000);
})

toTop.addEventListener('click', () => {
    smoothScroll('.section0', 1000);
})



