

$(function(){
    var x = 0;
    setInterval(function(){
        x-=1;
        $('.header').css('background-position',  x + 'px 0' );
    }, 10);
})

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {sticky_menu()};

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