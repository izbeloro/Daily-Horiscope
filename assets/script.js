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
var moon = document.getElementById("moon-phase");
var moonPhase = document.getElementById("moon-phase-text");

// functions for horoscope navigation
function showYest() {}

function showToday() {}

function showTom() {}

// function for fun fact
function showFact() {
  funFact.classList.add("hide");
}

// function for moon phase
function showMoon() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c8feeaf85fmshe62afa5ac4131ffp1c312cjsnde272041401d',
            'X-RapidAPI-Host': 'ouranos3.p.rapidapi.com'
        }
    };
    
    fetch('https://ouranos3.p.rapidapi.com/apitest?lat=47&long=-1.5', options)
        .then(response => response.json())
        .then(response => renderMoonPhase(response))
        .catch(err => console.error(err));


}

function renderMoonPhase(data) {
    moonPhase.textContent = data.current_moon.moonphase;
    moonPhase.classList.remove("hide");
}

// event listeners
yesterday.addEventListener("click", showYest);
today.addEventListener("click", showToday);
tomorrow.addEventListener("click", showTom);
funFact.addEventListener("click", showFact);

var showFactButton = document.getElementById("fun-fact");
//var FactContainer = document.querySelector('#Hide-container-fact');

/*
document.getElementById('fun-fact').addEventListener("click", function(){
   document.getElementById('Hide-container-fact').style.visibility = 'visible';
})
*/

function DisplayFunFact(event) {
  event.preventDefault();
  var FactContainer = document.querySelector("Hide-container-fact");

  FactContainer.style.display = "visible";

  //else {
  // FactContainer.style.visibility = 'hidden';
  //}
}

showFactButton.addEventListener("click", DisplayFunFact);

moon.addEventListener("click", showMoon);

