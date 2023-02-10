
var yesterday = document.getElementById("yest");
var today = document.getElementById("today");
var tomorrow = document.getElementById("tom");
var funFact = document.getElementById("fact");
var aries = document.getElementById("aries");
var taurus = document.getElementById("taurus");
var gemini = document.getElementById("gemini");
var cancer = document.getElementById("cancer");
var leo = document.getElementById("leo");
var virgo = document.getElementById("virgo");
var libra = document.getElementById("libra");
var scorpio = document.getElementById("scorpio");
var sagittarius = document.getElementById("sagittarius");
var capricorn = document.getElementById("capricorn");
var aquarius = document.getElementById("aquarius");
var pisces = document.getElementById("pisces");

// functions for horoscope navigation
function showYest() {
    
}

function showToday() {

}

function showTom() {

}

// function for fun fact
function showFact() {
    funFact.classList.add("hide");
}

// function for moon phase
function showMoon() {

}

// event listeners
yesterday.addEventListener("click", showYest);
today.addEventListener("click", showToday);
tomorrow.addEventListener("click", showTom)
funFact.addEventListener("click", showFact)



var yesterday = document.getElementById("yest");
var today = document.getElementById("today");
var tomorrow = document.getElementById("tom");
var funFact = document.getElementById("fact");
var aries = document.getElementById("aries");
var taurus = document.getElementById("taurus");
var gemini = document.getElementById("gemini");
var cancer = document.getElementById("cancer");
var leo = document.getElementById("leo");
var virgo = document.getElementById("virgo");
var libra = document.getElementById("libra");
var scorpio = document.getElementById("scorpio");
var sagittarius = document.getElementById("sagittarius");
var capricorn = document.getElementById("capricorn");
var aquarius = document.getElementById("aquarius");
var pisces = document.getElementById("pisces");

// functions for horoscope navigation
function showYest() {
    
}

function showToday() {

}

function showTom() {

}
function DisplayFunFact(event){
    event.preventDefault();
    var FactContainer = document.querySelector('Hide-container-fact');

    FactContainer.style.visibility = 'visible';
}
// function for fun fact
//function showFact() {
    //funFact.classList.add("hide");
//}

// function for moon phase
function showMoon() {

}

<<<<<<< HEAD

showFactButton.addEventListener("click", DisplayFunFact);

=======
// event listeners
yesterday.addEventListener("click", showYest);
today.addEventListener("click", showToday);
tomorrow.addEventListener("click", showTom)
funFact.addEventListener("click", DisplayFunFact)
>>>>>>> 13252ff (fixed class names)
