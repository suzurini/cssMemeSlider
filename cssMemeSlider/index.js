const BTN_FIRST = document.querySelector('#control-1');
const BTN_SECOND = document.querySelector('#control-2');
const BTN_THIRD = document.querySelector('#control-3');
const BTN_FOURTH = document.querySelector('#control-4');
const BTN_FIFTH = document.querySelector('#control-5');
const BTN_SIXTH = document.querySelector('#control-6');
const BTN_SEVENTH = document.querySelector('#control-7');

const CAROUSEL = document.querySelector('#carousel');

const firstSlide = document.querySelector('#slide-1').innerHTML;
const secondSlide = document.querySelector('#slide-2').innerHTML;
const thirdSlide = document.querySelector('#slide-3').innerHTML;
const fourthSlide = document.querySelector('#slide-4').innerHTML;
const fifthSlide = document.querySelector('#slide-5').innerHTML;
const sixthSlide = document.querySelector('#slide-6').innerHTML;
const seventhSlide = document.querySelector('#slide-7').innerHTML;

const moveLeft = () => {
    if (BTN_FIRST.classList.contains('active')) {
        BTN_FIRST.removeEventListener('click', moveLeft);
        BTN_FIRST.removeEventListener('click', moveRight);
    } else if (BTN_SECOND.classList.contains('active')) {
        CAROUSEL.classList.add('transition-left');
        BTN_SECOND.classList.remove('active');
        BTN_FIRST.classList.add('active');
        BTN_FIRST.removeEventListener('click', moveLeft);
        BTN_FIRST.removeEventListener('click', moveRight);
    } else if (BTN_THIRD.classList.contains('active')) {
        CAROUSEL.classList.add('transition-left');
        BTN_THIRD.classList.remove('active');
        BTN_SECOND.classList.add('active');
        BTN_SECOND.removeEventListener('click', moveLeft);
        BTN_SECOND.removeEventListener('click', moveRight);
    } else if (BTN_FOURTH.classList.contains('active')) {
        CAROUSEL.classList.add('transition-left');
        BTN_FOURTH.classList.remove('active');
        BTN_THIRD.classList.add('active');
        BTN_THIRD.removeEventListener('click', moveLeft);
        BTN_THIRD.removeEventListener('click', moveRight);
    } else if (BTN_FIFTH.classList.contains('active')) {
        CAROUSEL.classList.add('transition-left');
        BTN_FIFTH.classList.remove('active');
        BTN_FOURTH.classList.add('active');
        BTN_FOURTH.removeEventListener('click', moveLeft);
        BTN_FOURTH.removeEventListener('click', moveRight);
    } else if (BTN_SIXTH.classList.contains('active')) {
        CAROUSEL.classList.add('transition-left');
        BTN_SIXTH.classList.remove('active');
        BTN_FIFTH.classList.add('active');
        BTN_FIFTH.removeEventListener('click', moveLeft);
        BTN_FIFTH.removeEventListener('click', moveRight);
    } else if (BTN_SEVENTH.classList.contains('active')) {
        CAROUSEL.classList.add('transition-left');
        BTN_SEVENTH.classList.remove('active');
        BTN_SIXTH.classList.add('active');
        BTN_SIXTH.removeEventListener('click', moveLeft);
        BTN_SIXTH.removeEventListener('click', moveRight);
    }
}

const moveRight = () => {
    if (BTN_FIRST.classList.contains('active')) {
        CAROUSEL.classList.add('transition-right');
        BTN_FIRST.classList.remove('active');
        BTN_SECOND.classList.add('active');
        BTN_SECOND.removeEventListener('click', moveLeft);
        BTN_SECOND.removeEventListener('click', moveRight);
    } else if (BTN_SECOND.classList.contains('active')) {
        CAROUSEL.classList.add('transition-right');
        BTN_SECOND.classList.remove('active');
        BTN_THIRD.classList.add('active');
        BTN_THIRD.removeEventListener('click', moveLeft);
        BTN_THIRD.removeEventListener('click', moveRight);
    } else if (BTN_THIRD.classList.contains('active')) {
        CAROUSEL.classList.add('transition-right');
        BTN_THIRD.classList.remove('active');
        BTN_FOURTH.classList.add('active');
        BTN_FOURTH.removeEventListener('click', moveLeft);
        BTN_FOURTH.removeEventListener('click', moveRight);
    } else if (BTN_FOURTH.classList.contains('active')) {
        CAROUSEL.classList.add('transition-right');
        BTN_FOURTH.classList.remove('active');
        BTN_FIFTH.classList.add('active');
        BTN_FIFTH.removeEventListener('click', moveLeft);
        BTN_FIFTH.removeEventListener('click', moveRight);
    } else if (BTN_FIFTH.classList.contains('active')) {
        CAROUSEL.classList.add('transition-right');
        BTN_FIFTH.classList.remove('active');
        BTN_SIXTH.classList.add('active');
        BTN_SIXTH.removeEventListener('click', moveLeft);
        BTN_SIXTH.removeEventListener('click', moveRight);
    } else if (BTN_SIXTH.classList.contains('active')) {
        CAROUSEL.classList.add('transition-right');
        BTN_SIXTH.classList.remove('active');
        BTN_SEVENTH.classList.add('active');
        BTN_SEVENTH.removeEventListener('click', moveLeft);
        BTN_SEVENTH.removeEventListener('click', moveRight);
    } else if (BTN_SEVENTH.classList.contains('active')) {
        BTN_SEVENTH.removeEventListener('click', moveLeft);
        BTN_SEVENTH.removeEventListener('click', moveRight);
    }
}

BTN_FIRST.addEventListener('click', moveLeft);

BTN_SECOND.addEventListener('click', function() {
    if (BTN_FIRST.classList.contains('active')) { 
        moveRight(); 
    } else if (BTN_SECOND.classList.contains('active')) { 
        // nothing
    } else { 
        moveLeft(); 
    }
});

BTN_THIRD.addEventListener('click', function() {
    if (BTN_SECOND.classList.contains('active')) { 
        moveRight(); 
    } else if (BTN_THIRD.classList.contains('active')) { 
        // nothing
    } else { 
        moveLeft(); 
    }
});

BTN_FOURTH.addEventListener('click', function() {
    if (BTN_THIRD.classList.contains('active')) { 
        moveRight(); 
    } else if (BTN_FOURTH.classList.contains('active')) { 
        // nothing
    } else { 
        moveLeft(); 
    }
});

BTN_FIFTH.addEventListener('click', function() {
    if (BTN_FOURTH.classList.contains('active')) { 
        moveRight(); 
    } else if (BTN_FIFTH.classList.contains('active')) { 
        // nothing
    } else { 
        moveLeft(); 
    }
});

BTN_SIXTH.addEventListener('click', function() {
    if (BTN_FIFTH.classList.contains('active')) { 
        moveRight(); 
    } else if (BTN_SIXTH.classList.contains('active')) { 
        // nothing
    } else { 
        moveLeft(); 
    }
});

BTN_SEVENTH.addEventListener('click', moveRight());

CAROUSEL.addEventListener('animationend', (AnimationEvent) => {
    if (AnimationEvent.animetionName === "move-left") {
        if (BTN_FIRST.classList.contains('active')) {
            CAROUSEL.classList.remove('transition-left');
            document.querySelector('#slide-1').innerHTML = firstSlide;
            document.querySelector('#slide-2').innerHTML = secondSlide;
            BTN_SECOND.addEventListener('click', moveRight);
            BTN_THIRD.addEventListener('click', moveRight);
            BTN_FOURTH.addEventListener('click', moveRight);
            BTN_FIFTH.addEventListener('click', moveRight);
            BTN_SIXTH.addEventListener('click', moveRight);
            BTN_SEVENTH.addEventListener('click', moveRight);
        } else if (BTN_SECOND,classList.contains('active')) {
            CAROUSEL.classList.remove('transition-left');
            document.querySelector('#slide-0').innerHTML = firstSlide;
            document.querySelector('#slide-1').innerHTML = secondSlide;
            document.querySelector('#slide-2').innerHTML = thirdSlide;
            BTN_FIRST.addEventListener('click', moveLeft);
            BTN_THIRD.addEventListener('click', moveRight);
            BTN_FOURTH.addEventListener('click', moveRight);
            BTN_FIFTH.addEventListener('click', moveRight);
            BTN_SIXTH.addEventListener('click', moveRight);
            BTN_SEVENTH.addEventListener('click', moveRight);
        } else if (BTN_THIRD,classList.contains('active')) {
            CAROUSEL.classList.remove('transition-left');
            document.querySelector('#slide-0').innerHTML = secondSlide;
            document.querySelector('#slide-1').innerHTML = thirdSlide;
            document.querySelector('#slide-2').innerHTML = fourthSlide;
            BTN_FIRST.addEventListener('click', moveLeft);
            BTN_SECOND.addEventListener('click', moveLeft);
            BTN_FOURTH.addEventListener('click', moveRight);
            BTN_FIFTH.addEventListener('click', moveRight);
            BTN_SIXTH.addEventListener('click', moveRight);
            BTN_SEVENTH.addEventListener('click', moveRight);
        }
    }
    else {
        if (BTN_SECOND.classList.contains('active')) {
            CAROUSEL.classList.remove('transition-right');
            document.querySelector('#slide-0').innerHTML = firstSlide;
            document.querySelector('#slide-1').innerHTML = secondSlide;
            document.querySelector('#slide-2').innerHTML = thirdSlide;
            BTN_FIRST.addEventListener('click', moveLeft);
            BTN_THIRD.addEventListener('click', moveRight);
            BTN_FOURTH.addEventListener('click', moveRight);
            BTN_FIFTH.addEventListener('click', moveRight);
            BTN_SIXTH.addEventListener('click', moveRight);
            BTN_SEVENTH.addEventListener('click', moveRight);
        }
        else if (BTN_THIRD.classList.contains('active')) {
            CAROUSEL.classList.remove('transition-right');
            document.querySelector('#slide-0').innerHTML = secondSlide;
            document.querySelector('#slide-1').innerHTML = thirdSlide;
            document.querySelector('#slide-2').innerHTML = fourthSlide;
            BTN_FIRST.addEventListener('click', moveLeft);
            BTN_SECOND.addEventListener('click', moveLeft);
            BTN_FOURTH.addEventListener('click', moveRight);
            BTN_FIFTH.addEventListener('click', moveRight);
            BTN_SIXTH.addEventListener('click', moveRight);
            BTN_SEVENTH.addEventListener('click', moveRight);
        }
        else if (BTN_FOURTH.classList.contains('active')) {
            CAROUSEL.classList.remove('transition-right');
            document.querySelector('#slide-0').innerHTML = thirdSlide;
            document.querySelector('#slide-1').innerHTML = fourthSlide;
            document.querySelector('#slide-2').innerHTML = fifthSlide;
            BTN_FIRST.addEventListener('click', moveLeft);
            BTN_SECOND.addEventListener('click', moveLeft);
            BTN_THIRD.addEventListener('click', moveLeft);
            BTN_FIFTH.addEventListener('click', moveRight);
            BTN_SIXTH.addEventListener('click', moveRight);
            BTN_SEVENTH.addEventListener('click', moveRight);
        }
        else if (BTN_FIFTH.classList.contains('active')) {
            CAROUSEL.classList.remove('transition-right');
            document.querySelector('#slide-0').innerHTML = fourthSlide;
            document.querySelector('#slide-1').innerHTML = fifthSlide;
            document.querySelector('#slide-2').innerHTML = sixthSlide;
            BTN_FIRST.addEventListener('click', moveLeft);
            BTN_SECOND.addEventListener('click', moveLeft);
            BTN_THIRD.addEventListener('click', moveLeft);
            BTN_FOURTH.addEventListener('click', moveLeft);
            BTN_SIXTH.addEventListener('click', moveRight);
            BTN_SEVENTH.addEventListener('click', moveRight);
        }
        else if (BTN_SIXTH.classList.contains('active')) {
            CAROUSEL.classList.remove('transition-right');
            document.querySelector('#slide-0').innerHTML = fifthSlide;
            document.querySelector('#slide-1').innerHTML = sixthSlide;
            document.querySelector('#slide-2').innerHTML = seventhSlide;
            BTN_FIRST.addEventListener('click', moveLeft);
            BTN_SECOND.addEventListener('click', moveLeft);
            BTN_THIRD.addEventListener('click', moveLeft);
            BTN_FOURTH.addEventListener('click', moveLeft);
            BTN_FIFTH.addEventListener('click', moveLeft);
            BTN_SEVENTH.addEventListener('click', moveRight);
        }
        else if (BTN_SEVENTH.classList.contains('active')) {
            CAROUSEL.classList.remove('transition-right');
            document.querySelector('#slide-0').innerHTML = sixthSlide;
            document.querySelector('#slide-1').innerHTML = seventhSlide;
            BTN_FIRST.addEventListener('click', moveLeft);
            BTN_SECOND.addEventListener('click', moveLeft);
            BTN_THIRD.addEventListener('click', moveLeft);
            BTN_FOURTH.addEventListener('click', moveLeft);
            BTN_FIFTH.addEventListener('click', moveLeft);
            BTN_SIXTH.addEventListener('click', moveLeft);
        }
    }
});