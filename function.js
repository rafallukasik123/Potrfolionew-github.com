

$(function () {
  var x = 0;
  setInterval(function () {
    x -= 1;
    $('.header').css('background-position', x + 'px 0');
  }, 10);
})

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { sticky_menu() };

// Get the navbar
var navbar = document.querySelector(".nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky_menu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const nav_button = document.querySelector('.nav_hamburger');
const nav = document.querySelector('.js_nav');



nav_button.addEventListener('click', function () {
  console.log(nav);
  if (nav.classList.contains("nav_list")) {
    nav.classList.replace("nav_list", "nav_list_mobile");


  }
  else {
    nav.classList.replace("nav_list_mobile", "nav_list");
  }

})


nav.addEventListener("click", function () {
  if (nav.classList.contains("nav_list_mobile")) {
    nav.classList.replace("nav_list_mobile", "nav_list");
  }
})



const icon = document.querySelector(".icon_main");

icon.addEventListener("click", topFunction);



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


let mainNavLinks = document.querySelectorAll(".js_nav li a");
let mainSections = document.querySelectorAll(".section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});


$(document).ready(function(){
  $('*[data-animate]').addClass('hide').each(function(){
      $(this).viewportChecker({
          classToAdd: 'show animated ' + $(this).data('animate'),
          classToRemove: 'hide',
          offset: '10%'
      });
  });
});


