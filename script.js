//JS FOR SECTION 1
document.addEventListener('DOMContentLoaded', function(){
    const sect1 = document.querySelector('.section1');
    setTimeout(()=>{
        sect1.classList.add('animate');
    },100);
});


//JS FOR SECTION 2 
const leiButton = document.querySelector('.buttonMeetLei');
const leiSection = document.querySelector('.lei-section');
const tineButton = document.querySelector('.buttonMeetTine');
const tineSection = document.querySelector('.justine-section');

leiButton.addEventListener('click', ()=>{
        leiSection.scrollIntoView({behavior: 'smooth'});
});

tineButton.addEventListener('click', ()=>{
    tineSection.scrollIntoView({behavior: 'smooth'});
});

//JS FOR SECTION 2
document.addEventListener("DOMContentLoaded", function () {

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left >= 0 &&
            rect.bottom >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        var cardLei = document.getElementById("cardLei-id");
        var cardTine = document.getElementById("cardTine-id");

        if (cardLei && isInViewport(cardLei)) {
            setTimeout(() => {
                cardLei.classList.add('animate');
            }, 100);
            cardLei.classList.add("animate-left");
        }

        if (cardTine && isInViewport(cardTine)) {
            setTimeout(() => {
                cardTine.classList.add('animate');
            }, 100);
            cardTine.classList.add("animate-right");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});


//JS FOR SECTION 3
document.addEventListener('DOMContentLoaded', function () {
    const sect3 = document.querySelector('.section3');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left >= 0 &&
            rect.bottom >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(sect3) && !sect3.classList.contains('animate')) {
            sect3.classList.add('animate');
            // You can remove the event listener if you only want the animation to trigger once
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Trigger the handleScroll function on page load
    handleScroll();
});
    
//FOR SECTION 4 AND 5
document.addEventListener("DOMContentLoaded", function () {

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left >= 0 &&
            rect.bottom >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        var leiSect = document.querySelector('.lei-section');
        var justSect = document.querySelector('.justine-section');

        if (leiSect && isInViewport(leiSect)) {
            setTimeout(() => {
                leiSect.classList.add('animate');
            }, 100);
            leiSect.classList.add("animate-left");
        }

        if (justSect && isInViewport(justSect)) {
            setTimeout(() => {
                justSect.classList.add('animate');
            }, 100);
            justSect.classList.add("animate-right");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

//FOR CONTACT US
    document.addEventListener("DOMContentLoaded", function() {
        var cardContact = document.querySelectorAll('.cardContact');
        function isInViewport(element) {
            var rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.left >= 0 &&
                rect.bottom >= 0 &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        function handleScroll() {
            cardContact.forEach(function(cardContact) {
                if (isInViewport(cardContact) && !cardContact.classList.contains("animate")) {
                    setTimeout(() => {
                        cardContact.classList.add('animate');
                    }, 100);
                    cardContact.classList.add("animate-top");
                }
            });
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    });

