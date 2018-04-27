function toggle_visibility(id) {
 
  var e = document.getElementById(id);
  if (e.style.display == "none") e.style.display = "block";
  else e.style.display = "none";
}

//https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyMenu()};

// Get the navbar
var navbar = document.getElementById("topbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}