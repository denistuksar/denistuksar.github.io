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
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
    var element = document.getElementById('collapsibleNavbar');
    element.classList.remove('show');
}

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (window.pageYOffset > 100) {
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
var email = document.getElementById('email');
var nameInput = document.getElementById('name');
var message = document.getElementById('message');
var submit = document.getElementById('sendMessageButton');
var emailVerified = false;
var nameVerified = false;
var messageVerified = false;

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

nameInput.addEventListener('blur', () => {
    if (nameInput.value == '') {
        nameInput.classList.add('invalid');
        nameVerified = false;
    } else {
        nameInput.classList.remove('invalid');
        nameVerified = true;
    }
});

email.addEventListener('focus', () => {
    const filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value == '' || filter.test(email.value) == false) {
        email.classList.add('invalid');
        emailVerified = false;
    } else {
        email.classList.remove('invalid');
        emailVerified = true;
    }
});

message.addEventListener('blur', () => {
    if (message.value == '') {
        message.classList.add('invalid');
        messageVerified = false;
    } else {
        message.classList.remove('invalid');
        messageVerified = true;
    }
});

submit.addEventListener('click', (event) => {
    if (nameVerified === false || emailVerified === false || messageVerified === false) {
        event.preventDefault();
        alert("Invalid entries found, please correct and resubmit");
    }
    if(nameVerified===false){
        nameInput.classList.add('invalid');
    }
    if(emailVerified===false){
        email.classList.add('invalid');
    }
    if(messageVerified===false){
        message.classList.add('invalid');
    }
});
