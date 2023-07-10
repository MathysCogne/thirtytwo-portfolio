// Au chargement, ajout de la classe "loading" au body pour bloquer le scrool
// Après 3 secondes, on retire la classe "loading" et on display: none le loader
// Modifier la var timer pour changer la durée (Attention à bien modifier la variable css aussi)
let timer = 3000;
window.onload = function() {
   document.body.classList.add("loading");

   setTimeout(function() {
       var loader = document.getElementById("loader");
       loader.style.display = "none";
       
       document.body.classList.remove("loading");
   }, timer);
}