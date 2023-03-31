/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Rédacteur web', 'Copywriter', 'Spécialiste SEO'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== pop-up ====================*/
document.addEventListener("DOMContentLoaded", function () {
    var btns = document.querySelectorAll(".open-popup");
    var popups = document.querySelectorAll(".popup");
    var closes = document.querySelectorAll(".close");

    btns.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            var popupId = this.getAttribute("data-popup-id");
            var popup = document.getElementById(popupId);
            popup.style.display = "block";
        });
    });

    closes.forEach(function (close) {
        close.addEventListener("click", function () {
            var popup = this.closest(".popup");
            popup.style.display = "none";
        });
    });

    popups.forEach(function (popup) {
        popup.addEventListener("click", function (event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    });
});

/*==================== message erreur ====================*/
document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.querySelector('input[name="Numéro"]');
  phoneInput.parentNode.insertBefore(errorMessage, phoneInput.nextSibling);

  phoneInput.addEventListener('input', function() {
    const phoneNumber = phoneInput.value;
    const isValid = /^\d{10}$/.test(phoneNumber);
    errorMessage.style.display = isValid || !phoneNumber.length ? 'none' : 'block';
  });

  const form = document.querySelector('.contact form');
  form.addEventListener('submit', function(event) {
    const phoneNumber = phoneInput.value;
    if (!/^\d{10}$/.test(phoneNumber)) {
      event.preventDefault();
      phoneInput.focus();
      errorMessage.style.display = 'block';
    }
  });
});




