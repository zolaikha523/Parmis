 /**
   * Preloader
   * */
  

 document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.querySelector('#preloader');
  preloader.style.display = 'none';
});


/*
*add header
*/
document.addEventListener('DOMContentLoaded', function () {
let selectHeader = document.getElementById('header');
let selectTopbar = document.getElementById('topbar');

if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled');
      if (selectTopbar) {
        selectTopbar.classList.add('topbar-scrolled');
      }
    } else {
      selectHeader.classList.remove('header-scrolled');
      if (selectTopbar) {
        selectTopbar.classList.remove('topbar-scrolled');
      }
    }
  };

  // Add an event listener for the 'scroll' event
  window.addEventListener('scroll', headerScrolled);
}
});

/**
 * Mobile nav toggle
 */

$('.mobile-nav-toggle').on('click', function(e) {
$('#navbar').toggleClass('navbar-mobile');
$(this).toggleClass('bi-list bi-x');
});

//Prevent default behavior when a dropdown link is clicked
$('.navbar .dropdown > a').on('click', function(e) {
if (select('#navbar').classList.contains('navbar-mobile')) {
  e.preventDefault();
  this.nextElementSibling.classList.toggle('dropdown-active');
}
});

// Prevent default behavior when a dropdown link is clicked
$('.navbar .dropdown > a').on('click', function(e) {
if ($('#navbar').hasClass('navbar-mobile')) {
  e.preventDefault(); // Prevent the default behavior (e.g., navigating to a new page)
  $(this).next().toggleClass('dropdown-active');
}
});


/**
 * when click on link in mobile navbar remove the navbar and scroll to a spsefic section
 */
  document.addEventListener('DOMContentLoaded', function () {
    const scrolltoLinks = document.querySelectorAll('.scrollto');

    scrolltoLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            let navbar = document.querySelector('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
              navbar.classList.remove('navbar-mobile')
              let navbarToggle = document.querySelector('.mobile-nav-toggle')
              navbarToggle.classList.toggle('bi-list')
              navbarToggle.classList.toggle('bi-x')
            }

            // Scroll to the target section
            const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
            console.log(targetId);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});




/*
*add active class
*/
window.addEventListener("scroll", function () {
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        navLinks[index].classList.add("active");
    } else {
        navLinks[index].classList.remove("active");
    }
});
});

/*
*add to top button
*/
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>100){
      $(".back-to-top").addClass("active");
    }
    else{
      $(".back-to-top").removeClass("active");
    }
  });
});


/**
 * Initiate glightbox 
 */
const glightbox = GLightbox({
  selector: '.glightbox'
});

/**
 * Events slider
 */
new Swiper('.events-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

/**
 * Testimonials slider
 */
new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

/**
 * Initiate gallery lightbox 
 */
const galleryLightbox = GLightbox({
  selector: '.gallery-lightbox'
});

/**
 * Animation on scroll
 */

  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
  



  