function kamehameha () {
                document.getElementById("kamesound").play();
                var y = document.getElementById("kame2");
            if (y.style.display === "none") {
              y.style.display = "block";
            } else {
              y.style.display = "none";
            }
            }

    var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
showDivs(slideIndex += n);
}
function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length} ;
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
x[slideIndex-1].style.display = "block";
}



function galpsd1 () {
    document.getElementById('tennis').play();
    plusDivs(-1);
}
function galpsd2 () {
    document.getElementById('tennis').play();
    plusDivs(1);
}



function openCity(evt, page) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(page).style.display = "flex";
    evt.currentTarget.className += " active";
  }


function stopvid() {
    var x = document.getElementById("bob");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function accueil() {
  document.getElementById('accueil').style.display = "none";
  document.getElementById('ost').play();
}

function sound1() {
  var musique = document.getElementById('maite');
  musique.currentTime = 0;
  musique.play();
}
function sound2() {
  var musique = document.getElementById('maite');
  musique.currentTime = 0;
  musique.play();
}
function sound3() {
  var musique = document.getElementById('maite');
  musique.currentTime = 0;
  musique.play();
}
function sound4() {
  var musique = document.getElementById('maite');
  musique.currentTime = 0;
  musique.play();
}
function sound5() {
  var musique = document.getElementById('maite');
  musique.currentTime = 0;
  musique.play();
}
function sound6() {
  var musique = document.getElementById('maite');
  musique.currentTime = 0;
  musique.play();
}
function sound7() {
  var musique = document.getElementById('maite');
  musique.currentTime = 0;
  musique.play();
}
function sound8() {
  var musique = document.getElementById('maite');
  musique.currentTime = 0;
  musique.play();
}
function sound9() {
  var musique = document.getElementById('maite');
  musique.currentTime = 0;
  musique.play();
}