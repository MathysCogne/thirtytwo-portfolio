// Faire apparaitre ou non le menu burger
document.getElementById("burger-button").addEventListener("click", function() {
   var menu = document.getElementById("burger-menu");
   menu.style.display = "block";
});
 
document.getElementById("close-button").addEventListener("click", function() {
   var menu = document.getElementById("burger-menu");
   menu.style.display = "none";
});

// Fermer le menu lorsqu'on clique sur un lien
var menuButtons = document.getElementsByClassName("nav-item");
for (var i = 0; i < menuButtons.length; i++) {
   menuButtons[i].addEventListener("click", function() {
      var menu = document.getElementById("burger-menu");
      menu.style.display = "none";
   });
}