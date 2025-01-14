//Sets variables for each zodiac sign and buttons from html page
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
var moonPhase = document.getElementById("moon-phase-text");
var titleFact = document.getElementById("fact-title");
var horoApi = "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today";
var key =  "c18878066fmsha0045ab22824fb9p1bac68jsn789c63b07d19";
var moonBtn = document.getElementById("moon-phase");
var changeSign = document.getElementById("changeSign");

// functions for horoscope navigation
function showYest() {
    displayHoro("yesterday");
}

function showToday() {
    displayHoro("today");
}

function showTom() {
    displayHoro("tomorrow");
}

//Event triggered to display fun fact when fun fact button is pressed
function DisplayFunFact(event){
    event.preventDefault();
    var FactContainer = document.querySelector("#fact-container");
    FactContainer.classList.remove("hide");
    funFact.classList.add("hide");
}

// function for moon phase
const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = '17IbzM8GxbtOwHnj13QFyZGYzqwfcprwC1pZjXBV';

const fetchNASAData = async () => {
    try {
      const response = await fetch(`${url}${api_key}`)
      const data = await response.json()
      displayData(data)
    } catch (error) {
      console.log(error)
    }
  }

  function displayData (data) {
    console.log(data);
    document.getElementById('title').textContent = data.title;
    document.getElementById('date').textContent = data.date;
    document.getElementById('moon-phase-text').textContent = data.explanation;
   var img = document.getElementById("picture");
   img.src = data.hdurl;
   moonBtn.classList.add("hide");
   var showAstronomy = document.getElementById('showAstronomy');
   showAstronomy.classList.remove("hide");
  }
  
//Functions for each Zodiac sign adding text to fun fact container, and updating chosen sign to local storage
function clickedAries() {
    document.getElementById("fun-fact-text").innerText = "Aries are the most active zodiac sign. They're always working, investing in a hobby, exercising, or meeting new people.";   
    titleFact.innerText = "Aries";
    localStorage.setItem("Astrology Sign", "Aries");
    changeSign.innerText = "Aries";

}

function clickedTaurus() {
    document.getElementById("fun-fact-text").innerText = "Taurus people are very sensitive, devoted, affectionate, loyal, honest, and trustworthy when they fall in love.";   
    titleFact.innerText = "Taurus";
    localStorage.setItem("Astrology Sign", "Taurus");
    changeSign.innerText = "Taurus";
}

function clickedGemini() {
    document.getElementById("fun-fact-text").innerText = "Extroverted and fun-loving personalities are characteristics of Geminis. They enjoy being around others and are always up for a good time.";   
    titleFact.innerText = "Gemini";
    localStorage.setItem("Astrology Sign", "Gemini");
    changeSign.innerText = "Gemini";
}

function clickedCancer() {
    document.getElementById("fun-fact-text").innerText = "You can be a bit moody at times, but overall, you are a loving and caring partner who just wants to make things work.";   
    titleFact.innerText = "Cancer";
    localStorage.setItem("Astrology Sign", "Cancer");
    changeSign.innerText = "Cancer";
}

function clickedLeo() {
    document.getElementById("fun-fact-text").innerText = "Former President of the United States, Barack Obama, is a Leo, as are actors Arnold Schwarzenegger and Daniel Radcliffe.";   
    titleFact.innerText = "Leo";
    localStorage.setItem("Astrology Sign", "Leo");
    changeSign.innerText = "Leo";
}

function clickedVirgo() {
    document.getElementById("fun-fact-text").innerText = "Virgos are also known for their patience. While there are limits to patience, this Earth sign is more patient than others.";   
    titleFact.innerText = "Virgo";
    localStorage.setItem("Astrology Sign", "Virgo");
    changeSign.innerText = "Virgo";
}

function clickedLibra() {
    document.getElementById("fun-fact-text").innerText = "Libras are very self-critical and always want to give 110% of themselves.";   
    titleFact.innerText = "Libra";
    localStorage.setItem("Astrology Sign", "Libra");
    changeSign.innerText = "Libra";
}

function clickedScorpio() {
    document.getElementById("fun-fact-text").innerText = "Stargazing, playing games, crystal gazing, music, gathering gems, yoga, and meditation are some of the interests for Scorpios to consider.";   
    titleFact.innerText = "Scorpio";
    localStorage.setItem("Astrology Sign", "Scorpio");
    changeSign.innerText = "Scorpio";
}

function clickedSagittarius() {
    document.getElementById("fun-fact-text").innerText = "Sagittarians will talk your ears off one day, and be calm and quiet the next. There’s no in-between.";   
    titleFact.innerText = "Sagittarius";
    localStorage.setItem("Astrology Sign", "Sagittarius");
    changeSign.innerText = "Sagittarius";
}

function clickedCapricorn() {
    document.getElementById("fun-fact-text").innerText = "Alright, we know about the dependable nature of the Capricorn, but did you know they’re also one of the funniest zodiac signs?";   
    titleFact.innerText = "Capricorn";
    localStorage.setItem("Astrology Sign", "Capricorn");
    changeSign.innerText = "Capricorn";
}

function clickedAquarius() {
    document.getElementById("fun-fact-text").innerText = "The greatest inventor and forward thinker of all time, Thomas Edison, was an Aquarius, born February 11, 1847.";   
    titleFact.innerText = "Aquarius";
    localStorage.setItem("Astrology Sign", "Aquarius");
    changeSign.innerText = "Aquarius";
}

function clickedPisces() {
    document.getElementById("fun-fact-text").innerText = "Pisces are the least materialistic sign in the zodiac.";   
    titleFact.innerText = "Pisces";
    localStorage.setItem("Astrology Sign", "Pisces");
    changeSign.innerText = "Pisces";
}

//Displays horoscope to page and gets sign from local storage
function displayHoro(day)  {
    const sign = localStorage.getItem("Astrology Sign");
    if (!sign) {
        console.log("No sign selected");
        return;
    }
    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': 'c18878066fmsha0045ab22824fb9p1bac68jsn789c63b07d19',
            'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=' + sign.toLowerCase() + '&day=' + day , options)
        .then(response => response.json())
        .then(response => renderHoroscope(response))
        .catch(err => console.error(err));
}
function renderHoroscope(data) {
    console.log(data);
    document.getElementById("dh").textContent = (data.description);
}

// event listeners for zodiac signs, and horoscope yesterday/today/tommorow buttons
yesterday.addEventListener("click", showYest);
today.addEventListener("click", showToday);
tomorrow.addEventListener("click", showTom);
funFact.addEventListener("click", DisplayFunFact);
aries.addEventListener("click", clickedAries);
taurus.addEventListener("click", clickedTaurus);
gemini.addEventListener("click", clickedGemini);
cancer.addEventListener("click", clickedCancer);
leo.addEventListener("click", clickedLeo);
virgo.addEventListener("click", clickedVirgo);
libra.addEventListener("click", clickedLibra);
scorpio.addEventListener("click", clickedScorpio);
sagittarius.addEventListener("click", clickedSagittarius);
capricorn.addEventListener("click", clickedCapricorn);
aquarius.addEventListener("click", clickedAquarius);
pisces.addEventListener("click", clickedPisces);
moonBtn.addEventListener("click", fetchNASAData);