

var showFactButton = document.getElementById('fun-fact');
//var FactContainer = document.querySelector('#Hide-container-fact');

/*
document.getElementById('fun-fact').addEventListener("click", function(){
   document.getElementById('Hide-container-fact').style.visibility = 'visible';
})
*/

function DisplayFunFact(event){
    event.preventDefault();
    var FactContainer = document.querySelector('Hide-container-fact');

    FactContainer.style.display = 'visible';
    
  //else {
   // FactContainer.style.visibility = 'hidden';
  //}
}


showFactButton.addEventListener("click", DisplayFunFact);